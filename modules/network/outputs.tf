output "vnet_id" {
  description = "ID of the virtual network"
  value       = azurerm_virtual_network.main.id
}

output "function_app_subnet_id" {
  description = "ID of the Function App subnet"
  value       = azurerm_subnet.function_app.id
}

output "private_endpoints_subnet_id" {
  description = "ID of the private endpoints subnet"
  value       = azurerm_subnet.private_endpoints.id
}
