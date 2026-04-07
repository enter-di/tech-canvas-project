import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData: Record<string, {
  name: string;
  description: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  challenges: string[];
  features: string[];
  role: string;
  period: string;
}> = {
  "genai-llm-platform": {
    name: "GenAI LLM Platform — Multi-Agent System",
    description: "Multi-agent platform migration and LiteLLM proxy deployment on GCP.",
    fullDescription: "Migrated KAI — an internal multi-agent platform — from AWS EKS to GCP in approximately 2 weeks, refactoring the React Native (EAS/Expo) mobile app and proving full cloud portability. Deployed a dedicated LiteLLM proxy cluster on GKE to orchestrate Vertex AI model endpoints (Gemini Flash, Pro, Embedding, TTS), exposing a unified external HTTPS API consumed by the Sentinel multi-agent flight intelligence application.",
    stack: ["GCP", "GKE", "LiteLLM", "Vertex AI", "Gemini", "Workload Identity Federation", "Cloud Build", "Artifact Registry", "GitLab CI", "ArgoCD", "Docker", "React Native"],
    impact: "Full cloud portability proven; PoC accepted with positive client feedback",
    role: "Cloud Architect",
    period: "2024",
    challenges: [
      "Migrating multi-agent platform across cloud providers in tight timeline",
      "Orchestrating multiple Vertex AI model endpoints through a unified API",
      "Eliminating API key management with Workload Identity Federation",
      "Investigating and resolving Vertex AI billing spike post-deployment"
    ],
    features: [
      "LiteLLM proxy cluster on GKE for model orchestration",
      "Keyless Vertex AI authentication via Workload Identity Federation",
      "Automated container builds via Cloud Build into Artifact Registry",
      "GitOps deployments with GitLab CI and ArgoCD"
    ]
  },
  "genai-enterprise-apps": {
    name: "GenAI Enterprise Apps — Real Estate",
    description: "AI-powered Vendor Assessment and Memo Creation for a major Singapore real estate client.",
    fullDescription: "Lead Solution Architect and Technical Lead for two GenAI applications serving a major Singapore real estate client's procurement and asset management operations. Vendor Assessment features an AI-powered scoring engine with dynamic weighted questionnaire logic, vendor clarification workflow, matching engine, and risk-based clause analysis. Memo Creation supports 4 memo types with dynamic approval signature logic driven by capex/opex budget thresholds.",
    stack: ["Azure", "App Service", "Cosmos DB", "Blob Storage", "Microsoft Fabric", "Azure OpenAI", "Application Gateway", "Microsoft Entra ID", "Key Vault", "Power Automate", "Python", "React"],
    impact: "Vendor evaluation turnaround reduced from ~1 week to hours",
    role: "Lead Solution Architect & Technical Lead",
    period: "2024",
    challenges: [
      "Designing end-to-end Azure architecture across two complex use cases",
      "Implementing dynamic weighted questionnaire logic for vendor scoring",
      "Building dynamic approval signature logic driven by budget thresholds",
      "Managing scope changes and aligning stakeholders throughout delivery lifecycle"
    ],
    features: [
      "AI-powered vendor scoring engine with risk-based clause analysis",
      "Document generation for 4 memo types (Tender Selection, Tender Waiver, 3 Quotations, Quote Waiver)",
      "Entra External ID for vendor authentication (OAuth2/OIDC)",
      "Formal solution architecture documents and full UAT management"
    ]
  },
  "regulatory-data-lake": {
    name: "Regulatory Data Lake & ETL Platform",
    description: "Regulatory-grade AWS data lake for a Central Bank engagement.",
    fullDescription: "Partner Engineer on a 10-month engagement co-delivered with AWS Professional Services, building a regulatory-grade AWS data lake across 5 use cases and 4 data sources — API submissions, on-premises credit database, regulatory financial data, ServiceNow, and SharePoint; ingesting across ~70 tables with daily, on-demand, and event-driven pipeline runs processing GBs of data.",
    stack: ["PySpark", "AWS Glue", "DQDL", "Apache Iceberg", "Step Functions", "EventBridge", "AWS DMS", "AWS DataSync", "S3", "DynamoDB", "Redshift Spectrum", "Terraform"],
    impact: "GBs of data processed daily across ~70 tables and 4 data sources",
    role: "Partner Engineer",
    period: "2023–2024",
    challenges: [
      "Multi-source ingestion: DMS, DataSync, S3 event-driven, REST APIs (OAuth2)",
      "Building 100+ rule data quality engine with dynamic DQDL ruleset generation",
      "Orchestrating 6 Step Functions state machines — fully config-driven from DynamoDB",
      "Ensuring no hardcoded values in pipelines for zero-code source onboarding"
    ],
    features: [
      "4-tier medallion architecture (Staging → Raw → Curated → Redshift Spectrum)",
      "100+ rule DQ engine with concurrent run detection and failure quarantine",
      "Config-driven pipelines — new sources onboarded without code changes",
      "SNS alerting, audit trails, and cross-account updates via Terraform"
    ]
  },
  "cloud-infrastructure-telco": {
    name: "Cloud Infrastructure — Telco Sector",
    description: "Enterprise AWS infrastructure build for a major Singapore telco.",
    fullDescription: "Executed an 8-month AWS infrastructure build for a major Singapore telco, implementing a multi-account AWS Organisation with Transit Gateway, VPC architecture, Direct Connect integration, and FortiGate firewall deployment across production and non-production environments. Deployed and configured an EKS Kubernetes cluster for mobile application workloads with high availability across multiple availability zones.",
    stack: ["AWS", "EKS", "Kubernetes", "Transit Gateway", "VPC", "GuardDuty", "SecurityHub", "CloudTrail", "CloudWatch", "Systems Manager", "Terraform", "Docker"],
    impact: "Multi-AZ high availability, enterprise-grade security posture",
    role: "Cloud Engineer",
    period: "2022–2023",
    challenges: [
      "Implementing multi-account AWS Organisation with complex networking",
      "Deploying EKS across multiple availability zones for HA",
      "Building centralised security and monitoring across all accounts",
      "Automating patching with compliance reporting for enterprise standards"
    ],
    features: [
      "Multi-account Organisation with Transit Gateway and Direct Connect",
      "EKS cluster for mobile application workloads",
      "Centralised security stack: GuardDuty, SecurityHub, CloudTrail",
      "Automated patching via Systems Manager with compliance reporting"
    ]
  },
  "cloud-data-analytics": {
    name: "Cloud Data Analytics — Education Sector",
    description: "Modern cloud analytics platform using Snowflake for an education sector client.",
    fullDescription: "Technical Lead on a competitive RFP win — transitioning a client from legacy on-prem systems to their first modern cloud analytics platform using Snowflake as the core data warehouse. Enabled advanced analytics and self-service BI capabilities for the client.",
    stack: ["AWS", "Snowflake", "Terraform", "Python"],
    impact: "Self-service BI capabilities enabled for client",
    role: "Technical Lead",
    period: "2023",
    challenges: [
      "Winning a competitive RFP against established vendors",
      "Migrating from legacy on-prem to cloud-native analytics",
      "Designing a scalable Snowflake data warehouse architecture",
      "Enabling self-service BI for non-technical stakeholders"
    ],
    features: [
      "Snowflake-based modern data warehouse",
      "Self-service BI and advanced analytics capabilities",
      "Infrastructure as Code with Terraform",
      "Smooth migration from legacy on-prem systems"
    ]
  },
  "trailblazer-genai-workshops": {
    name: "Trailblazer GenAI Workshops — 100+ Orgs",
    description: "GenAI workshop leadership accelerating regional AI adoption.",
    fullDescription: "Provisioned GenAI workshop environments for 100+ organisations using Terraform across AWS and GCP. Guided firms as partner consultant from conception to MVP, accelerating regional GenAI adoption across Singapore. Led strategic technical engagements with Google and AWS partner teams, earning recognition as a trusted delivery consultant.",
    stack: ["AWS", "GCP", "Terraform", "Vertex AI", "AWS Bedrock", "Azure OpenAI"],
    impact: "100+ organisations onboarded to GenAI across 2023 & 2024",
    role: "Partner Consultant",
    period: "2023–2024",
    challenges: [
      "Provisioning scalable workshop environments for 100+ diverse organisations",
      "Guiding non-technical firms from GenAI conception to working MVP",
      "Coordinating strategic engagements with Google and AWS partner teams",
      "Adapting workshop content across industries and maturity levels"
    ],
    features: [
      "Terraform-provisioned GenAI environments at scale",
      "Conception-to-MVP guidance for each organisation",
      "Multi-cloud workshop coverage (AWS Bedrock, Vertex AI, Azure OpenAI)",
      "Recognition as trusted delivery consultant by cloud partners"
    ]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
              <Button asChild>
                <Link to="/work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/work" 
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>

          {/* Project Header */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {project.name}
            </h1>

            {/* Role & Period */}
            <div className="flex flex-wrap gap-4 mb-4 font-mono text-sm">
              <span className="text-primary">{project.role}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{project.period}</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            {/* Impact */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <span className="font-mono text-sm text-primary">
                <span className="text-muted-foreground">{"//"}</span> Impact: {project.impact}
              </span>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Challenges" />
          </div>

          {/* Challenges */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-3">
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-3">
            <CodeDivider label="Key Deliverables" />
          </div>

          {/* Features */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-4">
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
