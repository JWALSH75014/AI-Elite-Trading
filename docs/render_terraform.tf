
provider "render" {
  api_key = var.render_api_key
}

resource "render_postgresql" "db" {
  name     = "ai-elite-db"
  region   = "oregon"
  database_name = "ai_elite_trading"
}

resource "render_service" "backend" {
  name        = "ai-elite-backend"
  type        = "web_service"
  env         = "node"
  build_command = "npm install"
  start_command = "node server.js"
  repo        = var.repo_url
  branch      = "main"

  env_vars = {
    DATABASE_URL     = render_postgresql.db.connection_string
    MAILGUN_API_KEY  = var.mailgun_api_key
  }
}

variable "render_api_key" {
  type = string
}

variable "mailgun_api_key" {
  type = string
}

variable "repo_url" {
  type = string
}
