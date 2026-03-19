output "resource_group_name" {
  description = "Name of the resource group"
  value       = azurerm_resource_group.main.name
}

output "function_app_hostname" {
  description = "Default hostname of the Function App"
  value       = module.compute.function_app_default_hostname
}

output "openai_endpoint" {
  description = "Azure OpenAI service endpoint"
  value       = module.compute.openai_endpoint
}

output "cosmosdb_endpoint" {
  description = "Cosmos DB account endpoint"
  value       = module.database.account_endpoint
}

output "vnet_id" {
  description = "ID of the virtual network"
  value       = module.network.vnet_id
}
