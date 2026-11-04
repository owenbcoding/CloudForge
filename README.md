
# CloudForge
### AWS-Hosted Full-Stack Web Application

**Project Type:** Full-Stack Web Development / Cloud Infrastructure  
**Deployment Platform:** Amazon Web Services (AWS)  
**Status:** Planned

## 1. Project Overview

<p align="center">
   <img
    src="https://imgur.com/1pb8E9J.jpg"
    alt="Cloudforge img"
    style="max-width: 100%; height: auto;"
  />
</p>

CloudForge is a full-stack web application designed to demonstrate the deployment of a modern web application using Amazon Web Services (AWS).

The application will feature a frontend hosted in an Amazon S3 bucket and a backend API deployed on an Amazon EC2 instance. The two services will communicate over HTTP/HTTPS, creating a scalable, cloud-hosted application architecture.

The primary objective is to gain practical experience in cloud infrastructure, application deployment, server configuration, and full-stack development.

## 2. Project Objectives

- Build a responsive and modern frontend.
- Host static frontend assets using Amazon S3.
- Develop a backend REST API.
- Deploy and manage the backend on Amazon EC2.
- Establish secure communication between frontend and backend.
- Configure DNS and HTTPS for a custom domain (optional).
- Implement cloud security and access controls using AWS IAM.
- Gain hands-on experience with cloud deployment and infrastructure management.

## 3. Technology Stack

| Component | Technology |
|---|---|
| Frontend | React / Next.js |
| Styling | Tailwind CSS |
| Backend | Node.js / Express |
| API Architecture | REST API |
| Cloud Hosting | AWS |
| Frontend Hosting | Amazon S3 |
| Backend Hosting | Amazon EC2 |
| Web Server / Reverse Proxy | Nginx |
| Database (optional) | PostgreSQL |
| Domain & DNS (optional) | Amazon Route 53 |
| HTTPS / SSL | AWS Certificate Manager |
| Version Control | Git & GitHub |

## 4. System Architecture

The application will follow a client-server architecture.

**Frontend:** A static production build will be uploaded to an Amazon S3 bucket and served to users.

**Backend:** A Node.js API will run on an Amazon EC2 Linux instance, handling requests, business logic, and data processing.

**Communication:** The frontend will send API requests to the backend over HTTPS.

**Infrastructure flow:**

User → S3-hosted frontend → EC2 backend API → Database (optional)

## 5. Core Features

### Frontend
- Responsive user interface
- Modern component-based architecture
- API integration
- Loading and error states
- Client-side navigation

### Backend
- RESTful API endpoints
- Request validation
- Error handling and logging
- Environment-based configuration
- API security and rate limiting

### Cloud Infrastructure
- S3 bucket configuration
- EC2 instance provisioning
- Security group configuration
- IAM roles and permissions
- Application deployment and updates
- Server monitoring

## 6. Security Requirements

- HTTPS encryption for application traffic
- Restrict EC2 inbound traffic through security groups
- Use IAM roles instead of hardcoded AWS credentials
- Store secrets in environment variables or AWS Secrets Manager
- Apply least-privilege access policies
- Keep server software and dependencies updated

## 7. Deployment Plan

1. Develop the frontend and backend locally.
2. Build and test the frontend production bundle.
3. Create and configure the S3 bucket.
4. Launch and configure an EC2 Linux instance.
5. Install Node.js and configure the backend service.
6. Set up Nginx as a reverse proxy.
7. Configure frontend-to-backend API connectivity.
8. Test and verify the production deployment.
9. Configure a custom domain and HTTPS (optional).
10. Document the infrastructure and deployment process.

## 8. Future Enhancements

- Automated CI/CD pipeline using GitHub Actions
- CloudFront CDN for frontend distribution
- Application Load Balancer
- Database integration with Amazon RDS
- Infrastructure as Code using Terraform
- Monitoring using Amazon CloudWatch
- Docker containerization
- Authentication and authorization
- Auto Scaling and high availability

## 9. Success Criteria

The project will be considered complete when:

- The frontend is publicly accessible.
- The backend API is deployed and operational.
- Frontend API requests successfully reach the backend.
- The application works reliably in a production environment.
- Infrastructure configuration and deployment steps are documented.
- Security best practices are implemented where practical.


# repository structure

```
    cloudforge/
    ├── frontend/
    │   ├── src/
    │   ├── public/
    │   └── package.json
    ├── backend/
    │   ├── src/
    │   │   ├── routes/
    │   │   ├── controllers/
    │   │   └── middleware/
    │   └── package.json
    ├── infrastructure/
    │   ├── nginx/
    │   └── terraform/       # Future
    ├── docs/
    │   └── architecture.md
    ├── .gitignore
    └── README.md
```