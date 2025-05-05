
#!/bin/bash
echo "Select deployment mode:"
echo "1) Local"
echo "2) Docker"
echo "3) Terraform (Render)"
read -p "Enter choice [1-3]: " choice

case $choice in
  1)
    bash ./docs/deploy_local.sh
    ;;
  2)
    docker-compose -f ./docker/docker-compose.yml up --build -d
    ;;
  3)
    terraform init
    terraform apply -auto-approve
    ;;
  *)
    echo "Invalid option"
    ;;
esac
