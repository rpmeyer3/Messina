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

variable "database_name" {
  description = "Name of the Cosmos DB SQL database"
  type        = string
  default     = "chat_db"
}

variable "container_name" {
  description = "Name of the Cosmos DB SQL container"
  type        = string
  default     = "chat_history"
}

variable "partition_key_path" {
  description = "Partition key path for the SQL container"
  type        = string
  default     = "/sessionId"
}
