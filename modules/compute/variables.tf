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

variable "openai_model_name" {
  description = "Name of the OpenAI model to deploy"
  type        = string
  default     = "gpt-4o"
}

variable "openai_model_version" {
  description = "Version of the OpenAI model"
  type        = string
  default     = "2024-08-06"
}

variable "openai_capacity" {
  description = "Token-per-minute capacity in thousands (e.g., 10 = 10K TPM)"
  type        = number
  default     = 10
}

variable "cosmosdb_endpoint" {
  description = "Cosmos DB account endpoint"
  type        = string
}

variable "cosmosdb_database_name" {
  description = "Cosmos DB database name"
  type        = string
}

variable "cosmosdb_container_name" {
  description = "Cosmos DB container name"
  type        = string
}

variable "function_app_subnet_id" {
  description = "Subnet ID for Function App VNet integration (optional, requires Premium plan)"
  type        = string
  default     = null
}
