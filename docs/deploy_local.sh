
#!/bin/bash

echo "Starting AI Elite Trading Automated Deployment..."

# === Variables ===
PROJECT_NAME="ai-elite-trading"
DB_NAME="ai_elite_trading"
FRONTEND_DIR="./frontend"
BACKEND_DIR="./backend"
DB_SCRIPT="./database/init.sql"

# === Check Node.js and PostgreSQL Installed ===
command -v node >/dev/null 2>&1 || { echo >&2 "Node.js not found. Install it first."; exit 1; }
command -v psql >/dev/null 2>&1 || { echo >&2 "PostgreSQL not found. Install it first."; exit 1; }

# === Setup PostgreSQL ===
echo "Creating PostgreSQL database..."
psql -U postgres -c "DROP DATABASE IF EXISTS ${DB_NAME};"
psql -U postgres -c "CREATE DATABASE ${DB_NAME};"
psql -U postgres -d ${DB_NAME} -f ${DB_SCRIPT}

# === Install Backend Dependencies ===
echo "Installing backend dependencies..."
cd ${BACKEND_DIR}
npm install

# === Start Backend ===
echo "Starting backend server on port 3000..."
nohup node server.js > backend.log 2>&1 &

# === Install Frontend Dependencies ===
cd ../${FRONTEND_DIR}
echo "Installing frontend dependencies..."
npm install
npm install @mui/material @emotion/react @emotion/styled react-router-dom

# === Build Frontend ===
echo "Building frontend..."
npm run build

# === Serve Frontend with Static Server (if available) ===
if command -v serve >/dev/null 2>&1; then
    echo "Serving frontend at http://localhost:5000"
    nohup serve -s build -l 5000 > frontend.log 2>&1 &
else
    echo "Install 'serve' with 'npm install -g serve' to serve frontend locally."
fi

echo "AI Elite Trading is running locally with database, backend, and frontend."
