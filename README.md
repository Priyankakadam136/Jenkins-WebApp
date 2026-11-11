# Jenkins-WebApp – Daily Expense Tracker | CI/CD Deployment using Jenkins, Docker & AWS EC2

## Project Overview

This project demonstrates an end-to-end CI/CD pipeline for a Daily Expense Tracker web application using **GitHub, Jenkins, Docker, Docker Hub, and AWS EC2**.

The application is developed using React.js and Vite. Jenkins automates the build and deployment process whenever changes are pushed to the configured GitHub repository.

The primary objective is to demonstrate practical DevOps implementation, including continuous integration, Docker containerization, and automated cloud deployment.

## Application Features

- Dashboard displaying total income, expenses, and available balance.
- Add and delete expense transactions.
- Categorize and filter expenses.
- Store expense data using browser LocalStorage.
- Responsive user interface.

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Build Tool | Vite |
| Version Control | Git, GitHub |
| CI/CD | Jenkins |
| Containerization | Docker |
| Image Registry | Docker Hub |
| Cloud Platform | AWS EC2 |
| Web Server | Nginx |
| Operating System | Ubuntu Server |

## CI/CD Architecture

```text
Developer
   |
   | Git Push
   v
GitHub Repository
   |
   | GitHub Webhook
   v
Jenkins Pipeline (AWS EC2)
   |
   | Checkout Source Code
   v
Docker Image Build
   |
   | Push Image
   v
Docker Hub
   |
   | Pull / Deploy Image
   v
Docker Container (AWS EC2)
   |
   v
Nginx Web Server
   |
   v
Daily Expense Tracker
   |
   v
Public Application URL
```

## CI/CD Pipeline Workflow

The project follows these stages:

1. **Source Code Management:** Application source code and deployment configuration are maintained in GitHub.
2. **GitHub Webhook:** GitHub notifies Jenkins whenever a push event occurs on the configured repository.
3. **Jenkins Pipeline:** Jenkins checks out the latest source code and executes the pipeline defined in the `Jenkinsfile`.
4. **Docker Image Build:** Jenkins builds the application image using the existing Dockerfile.
5. **Docker Hub Integration:** Jenkins authenticates using configured Docker Hub credentials and pushes the image to Docker Hub.
6. **Application Deployment:** The Docker container is deployed on the AWS EC2 instance.
7. **Application Access:** The deployed application is accessible using the EC2 public IPv4 address.

## Project Structure

```text
Jenkins-WebApp/
│
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── docs/
│   └── deployment/
│       └── AWS_EC2_Jenkins_GitHub_Webhook_Docker_Project_Guide.pdf
│
├── Dockerfile
├── Jenkinsfile
├── docker-compose.yaml
├── package.json
├── package-lock.json
├── index.html
├── .gitignore
└── README.md
```

## Docker Implementation

Docker is used to containerize the Daily Expense Tracker application.

The existing Dockerfile defines the application image build and runtime configuration.

The container serves the production frontend through Nginx on port `80`.

## Jenkins Configuration

Jenkins is hosted on an AWS EC2 Ubuntu instance.

The pipeline is configured using the `Jenkinsfile` maintained in the GitHub repository.

The pipeline automates:

- Source code checkout.
- Docker image creation.
- Docker Hub authentication.
- Docker image push.
- Application container deployment.

Docker Hub credentials are stored securely in Jenkins Credentials. The credential ID used by the pipeline is `dockerhub-credentials`.

## AWS EC2 Deployment

The application is deployed on an AWS EC2 instance running Ubuntu.

The EC2 instance hosts Jenkins and Docker for this project.

### Security Group Inbound Ports

| Service | Port |
|---|---:|
| SSH | 22 |
| Jenkins | 8080 |
| Application | 80 |

### Application Access

- Jenkins: `http://EC2_PUBLIC_IP:8080`
- Application: `http://EC2_PUBLIC_IP`

Replace `EC2_PUBLIC_IP` with the public IPv4 address of your EC2 instance.

## GitHub Webhook Integration

A GitHub webhook is configured to trigger the Jenkins pipeline automatically when code is pushed to the repository.

Webhook configuration:

- **Payload URL:** `http://EC2_PUBLIC_IP:8080/github-webhook/`
- **Content type:** `application/json`
- **Trigger event:** Just the push event

This integration eliminates the need to manually trigger the pipeline for every code update.

## Deployment Verification

The deployment can be verified using the following commands on the EC2 instance:

```bash
docker ps
docker images
curl -I http://localhost/
```

The application should be accessible through the EC2 public IPv4 address.

## Security Considerations

- Do not commit AWS credentials, private SSH keys, or access tokens.
- Store Docker Hub credentials securely in Jenkins.
- Keep Jenkins authentication enabled.
- Restrict SSH access to trusted IP addresses.
- Avoid exposing Jenkins through unsecured public HTTP for long-term use.
- Monitor AWS resource usage and associated costs.

## Project Documentation

The following PDF provides the detailed implementation guide for this project.

It covers:

- AWS EC2 instance setup.
- Jenkins installation and configuration.
- Docker installation and configuration.
- GitHub webhook integration.
- Jenkins pipeline creation.
- Docker Hub credentials and image management.
- Application deployment.
- Deployment verification and troubleshooting.

**[View Detailed AWS EC2 + Jenkins + GitHub Webhook + Docker Deployment Guide](docs/deployment/AWS_EC2_Jenkins_GitHub_Webhook_Docker_Project_Guide.pdf)**

## Future Enhancements

- Add automated application testing to the Jenkins pipeline.
- Configure HTTPS for secure application access.
- Implement application monitoring and logging.
- Explore additional AWS services for deployment improvements.

## Conclusion

This project demonstrates an end-to-end CI/CD workflow using GitHub, Jenkins, Docker, Docker Hub, and AWS EC2.

It provides practical experience with source code management, automated builds, Docker image creation, container registry integration, and cloud-based application deployment.