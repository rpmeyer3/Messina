# ---------------------------------------------------------------------------
# Azure OpenAI
# ---------------------------------------------------------------------------

resource "azurerm_cognitive_account" "openai" {
  name                  = "oai-${var.project_name}-${var.environment}"
  location              = var.location
  resource_group_name   = var.resource_group_name
  kind                  = "OpenAI"
  sku_name              = "S0"
  custom_subdomain_name = "oai-${var.project_name}-${var.environment}"
  tags                  = var.tags
}

resource "azurerm_cognitive_deployment" "gpt4o" {
  name                 = "gpt-4o"
  cognitive_account_id = azurerm_cognitive_account.openai.id

  model {
    format  = "OpenAI"
    name    = var.openai_model_name
    version = var.openai_model_version
  }

  sku {
    name     = "GlobalStandard"
    capacity = var.openai_capacity
  }
}

# ---------------------------------------------------------------------------
# Storage Account (Function App backing store — accessed via Managed Identity)
# ---------------------------------------------------------------------------

resource "azurerm_storage_account" "func" {
  name                     = replace("stfunc${var.project_name}${var.environment}", "-", "")
  location                 = var.location
  resource_group_name      = var.resource_group_name
  account_tier             = "Standard"
  account_replication_type = "LRS"
  tags                     = var.tags
}

# ---------------------------------------------------------------------------
# App Service Plan (Consumption / Serverless)
# ---------------------------------------------------------------------------

resource "azurerm_service_plan" "func" {
  name                = "asp-${var.project_name}-${var.environment}"
  location            = var.location
  resource_group_name = var.resource_group_name
  os_type             = "Linux"
  sku_name            = "Y1"
  tags                = var.tags
}

# ---------------------------------------------------------------------------
# Linux Function App (Python 3.11, System-Assigned Managed Identity)
# ---------------------------------------------------------------------------

resource "azurerm_linux_function_app" "main" {
  name                       = "func-${var.project_name}-${var.environment}"
  location                   = var.location
  resource_group_name        = var.resource_group_name
  service_plan_id            = azurerm_service_plan.func.id
  storage_account_name       = azurerm_storage_account.func.name
  storage_uses_managed_identity = true
  tags                       = var.tags

  identity {
    type = "SystemAssigned"
  }

  site_config {
    application_stack {
      python_version = "3.11"
    }
  }

  app_settings = {
    # Azure OpenAI — endpoint only, auth via Managed Identity
    AZURE_OPENAI_ENDPOINT   = azurerm_cognitive_account.openai.endpoint
    AZURE_OPENAI_DEPLOYMENT = azurerm_cognitive_deployment.gpt4o.name

    # Cosmos DB — endpoint only, auth via Managed Identity
    COSMOSDB_ENDPOINT  = var.cosmosdb_endpoint
    COSMOSDB_DATABASE  = var.cosmosdb_database_name
    COSMOSDB_CONTAINER = var.cosmosdb_container_name

    # Function App storage via Managed Identity (no connection string)
    AzureWebJobsStorage__accountName = azurerm_storage_account.func.name
  }
}

# ---------------------------------------------------------------------------
# Storage Blob Data Owner — required for MI-based AzureWebJobsStorage
# ---------------------------------------------------------------------------

resource "azurerm_role_assignment" "func_storage_blob_owner" {
  scope                = azurerm_storage_account.func.id
  role_definition_name = "Storage Blob Data Owner"
  principal_id         = azurerm_linux_function_app.main.identity[0].principal_id
}
