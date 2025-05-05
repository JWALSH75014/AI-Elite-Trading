
deploy-local:
	bash ./docs/deploy_local.sh

deploy-docker:
	docker-compose -f ./docker/docker-compose.yml up --build -d

deploy-terraform:
	terraform init
	terraform apply -auto-approve
