# ---------------------------------------------------------------------------
# Resource Group
# ---------------------------------------------------------------------------

resource "azurerm_resource_group" "main" {
  name     = "rg-${var.project_name}-${var.environment}"
  location = var.location
  tags     = var.tags
}

# ---------------------------------------------------------------------------
# Module: Network
# ---------------------------------------------------------------------------

module "network" {
  source = "./modules/network"

  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  project_name        = var.project_name
  environment         = var.environment
  vnet_address_space  = var.vnet_address_space
  tags                = var.tags
}

# ---------------------------------------------------------------------------
# Module: Database (Cosmos DB)
# ---------------------------------------------------------------------------

module "database" {
  source = "./modules/database"

  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  project_name        = var.project_name
  environment         = var.environment
  database_name       = var.cosmosdb_database_name
  container_name      = var.cosmosdb_container_name
  partition_key_path  = var.cosmosdb_partition_key_path
  tags                = var.tags
}

# ---------------------------------------------------------------------------
# Module: Compute (OpenAI + Function App)
# ---------------------------------------------------------------------------

module "compute" {
  source = "./modules/compute"

  resource_group_name    = azurerm_resource_group.main.name
  location               = azurerm_resource_group.main.location
  project_name           = var.project_name
  environment            = var.environment
  openai_model_version   = var.openai_model_version
  cosmosdb_endpoint      = module.database.account_endpoint
  cosmosdb_database_name = module.database.database_name
  cosmosdb_container_name = module.database.container_name
  tags                   = var.tags
}

# ---------------------------------------------------------------------------
# Cross-Module Role Assignments
# ---------------------------------------------------------------------------

# Cognitive Services User — allows the Function App MI to call Azure OpenAI
resource "azurerm_role_assignment" "func_openai_user" {
  scope                = module.compute.openai_account_id
  role_definition_name = "Cognitive Services User"
  principal_id         = module.compute.function_app_principal_id
}

# Cosmos DB Built-in Data Contributor — allows the Function App MI to read/write data
resource "azurerm_cosmosdb_sql_role_assignment" "func_cosmosdb_contributor" {
  resource_group_name = azurerm_resource_group.main.name
  account_name        = module.database.account_name
  role_definition_id  = "${module.database.account_id}/sqlRoleDefinitions/00000000-0000-0000-0000-000000000002"
  principal_id        = module.compute.function_app_principal_id
  scope               = module.database.account_id
}
