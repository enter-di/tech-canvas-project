import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "GenAI LLM Platform — Multi-Agent System",
    slug: "genai-llm-platform",
    description: "Migrated a multi-agent platform from AWS EKS to GCP in ~2 weeks. Deployed LiteLLM proxy on GKE to orchestrate Vertex AI model endpoints, with Workload Identity Federation and GitOps-driven deployments via ArgoCD.",
    stack: ["GCP", "GKE", "LiteLLM", "Vertex AI", "ArgoCD", "Docker"],
    impact: "Full cloud portability proven; PoC accepted by client",
  },
  {
    name: "GenAI Enterprise Apps — Real Estate",
    slug: "genai-enterprise-apps",
    description: "Lead Solution Architect for two GenAI applications — Vendor Assessment (AI-powered scoring engine) and Memo Creation (document generation for 4 memo types) — serving a major Singapore real estate client.",
    stack: ["Azure", "Cosmos DB", "Azure OpenAI", "Entra ID", "Power Automate"],
    impact: "Vendor evaluation reduced from ~1 week to hours",
  },
  {
    name: "Regulatory Data Lake & ETL Platform",
    slug: "regulatory-data-lake",
    description: "10-month engagement co-delivered with AWS Professional Services. Built a regulatory-grade data lake across 5 use cases, ~70 tables, with a 100+ rule data quality engine and 6 Step Functions state machines.",
    stack: ["PySpark", "AWS Glue", "Step Functions", "Terraform", "DynamoDB"],
    impact: "GBs of data processed daily across 4 data sources",
  },
  {
    name: "Cloud Infrastructure — Telco Sector",
    slug: "cloud-infrastructure-telco",
    description: "8-month AWS infrastructure build for a major Singapore telco — multi-account Organisation with Transit Gateway, VPC architecture, EKS cluster, and centralised security & monitoring stack.",
    stack: ["AWS", "EKS", "Kubernetes", "Transit Gateway", "Terraform"],
    impact: "Multi-AZ HA, enterprise-grade security posture",
  },
  {
    name: "Cloud Data Analytics — Education Sector",
    slug: "cloud-data-analytics",
    description: "Technical Lead on a competitive RFP win — transitioning a client from legacy on-prem systems to their first modern cloud analytics platform using Snowflake.",
    stack: ["AWS", "Snowflake", "Terraform", "Python"],
    impact: "Self-service BI capabilities enabled for client",
  },
  {
    name: "Trailblazer GenAI Workshops — 100+ Orgs",
    slug: "trailblazer-genai-workshops",
    description: "Provisioned GenAI workshop environments for 100+ organisations using Terraform. Guided firms from conception to MVP, accelerating regional GenAI adoption across Singapore.",
    stack: ["AWS", "GCP", "Terraform", "Vertex AI", "AWS Bedrock"],
    impact: "100+ organisations onboarded to GenAI",
  },
];

export default function Work() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A selection of cloud architecture and data engineering projects delivered 
              across Financial Services, Real Estate, Telecommunications, Education, and 
              Government sectors in Singapore and the region.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Projects" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
