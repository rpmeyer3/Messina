variable "project_name" {
  description = "Name of the project, used for resource naming"
  type        = string
  default     = "ai-pip"
}

variable "environment" {
  description = "Deployment environment (dev, staging, prod)"
  type        = string
  default     = "dev"
}

variable "location" {
  description = "Azure region for all resources (must support Azure OpenAI gpt-4o)"
  type        = string
  default     = "eastus2"
}

variable "tags" {
  description = "Common tags applied to all resources for project identification and Infracost tracking"
  type        = map(string)
  default = {
    project    = "ai-pip"
    environment = "dev"
    managed_by = "terraform"
  }
}

variable "openai_model_version" {
  description = "Version of the gpt-4o model to deploy"
  type        = string
  default     = "2024-08-06"
}

variable "cosmosdb_database_name" {
  description = "Name of the Cosmos DB SQL database"
  type        = string
  default     = "chat_db"
}

variable "cosmosdb_container_name" {
  description = "Name of the Cosmos DB SQL container"
  type        = string
  default     = "chat_history"
}

variable "cosmosdb_partition_key_path" {
  description = "Partition key path for the Cosmos DB container"
  type        = string
  default     = "/sessionId"
}

variable "vnet_address_space" {
  description = "Address space for the virtual network"
  type        = list(string)
  default     = ["10.0.0.0/16"]
}
