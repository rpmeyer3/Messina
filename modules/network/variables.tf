variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}

variable "location" {
  description = "Azure region"
  type        = string
}

variable "tags" {
  description = "Resource tags"
  type        = map(string)
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
}

variable "environment" {
  description = "Deployment environment"
  type        = string
}

variable "vnet_address_space" {
  description = "Address space for the virtual network"
  type        = list(string)
  default     = ["10.0.0.0/16"]
}

variable "function_app_subnet_prefix" {
  description = "Address prefix for the Function App subnet"
  type        = string
  default     = "10.0.1.0/24"
}

variable "private_endpoints_subnet_prefix" {
  description = "Address prefix for the private endpoints subnet"
  type        = string
  default     = "10.0.2.0/24"
}
