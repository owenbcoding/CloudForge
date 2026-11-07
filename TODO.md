# CloudForge TODO

Tasks are ordered to move from the current local landing page toward the goals in
[README.md](./README.md). The landing-page workspace and root development command
are set up.

## Application development

- [ ] Decide whether `cloudforge-landing/` or `frontend/` is the canonical
  production frontend, then document or consolidate the two.
- [ ] Define the backend API contract and implement the required REST endpoints.
- [ ] Add request validation, consistent error handling, and useful server logs.
- [ ] Configure the frontend to call the backend through an environment-based
  API URL.
- [ ] Add loading, error, and success states for API-driven features.
- [ ] Add tests for frontend behavior and backend endpoints.

## Local configuration and security

- [ ] Document required environment variables with a safe example file.
- [ ] Keep secrets out of source control and use least-privilege AWS permissions.
- [ ] Add API security controls, including appropriate CORS settings and rate
  limiting.
- [ ] Verify the production frontend build and backend startup locally.

## AWS deployment

- [ ] Configure an S3 bucket for the production frontend.
- [ ] Provision an EC2 Linux instance and deploy the backend API.
- [ ] Configure Nginx as a reverse proxy and restrict inbound network access.
- [ ] Connect the frontend and backend over HTTPS.
- [ ] Document deployment, update, and rollback steps.
- [ ] Add health checks and monitoring; replace the landing page's placeholder
  status and uptime values with real data.
- [ ] Optionally configure a custom domain and HTTPS certificate.

## Future enhancements

- [ ] Add CI/CD with GitHub Actions.
- [ ] Evaluate CloudFront, an Application Load Balancer, and Auto Scaling.
- [ ] Evaluate PostgreSQL on Amazon RDS.
- [ ] Define infrastructure as code with Terraform.
- [ ] Consider Docker and authentication/authorization.
