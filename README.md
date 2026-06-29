# Messina: AI-PIP

**Serverless AI Inference Pipeline on Azure** · Provisioned with Terraform.

A serverless AI inference pipeline running on Azure, with infrastructure defined in Terraform and a Vite/React frontend that exercises the pipeline interactively.

[![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)
[![Azure](https://img.shields.io/badge/Microsoft_Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)](https://azure.microsoft.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**Live Demo:** [ai-pip.vercel.app](https://ai-pip.vercel.app)

<!-- -->

## Highlights

- **Engineered** an end-to-end serverless AI inference pipeline on Azure, with reusable Terraform modules under `modules/` and root configuration via `main.tf` / `variables.tf` / `outputs.tf` / `providers.tf`.
- **Built** a Vite + React 19 + TypeScript frontend with GSAP animations to demonstrate the inference pipeline interactively.
- **Stack:** Terraform · Azure · React 19 · TypeScript · Vite · GSAP

<!-- -->

## Repository Structure

```
├── main.tf, variables.tf, outputs.tf, providers.tf  # Terraform root
├── modules/                                         # Reusable IaC modules
├── terraform.tfvars                                 # Environment values
├── src/                                             # React/TS frontend
└── index.html, vite.config.ts                       # Vite entrypoint
```

## Run the Frontend Locally

```bash
npm install
npm run dev
```

## Deploy Infrastructure

```bash
terraform init
terraform plan
terraform apply
```
