import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    name: "GenAI LLM Platform — Multi-Agent System",
    slug: "genai-llm-platform",
    description: "Migrated a multi-agent platform from AWS EKS to GCP, deploying LiteLLM proxy on GKE with Vertex AI model orchestration and GitOps-driven deployments.",
    stack: ["GCP", "GKE", "LiteLLM", "Vertex AI", "ArgoCD"],
    impact: "Full cloud portability proven in ~2 weeks",
  },
  {
    name: "GenAI Enterprise Apps — Real Estate",
    slug: "genai-enterprise-apps",
    description: "Lead architect for AI-powered Vendor Assessment and Memo Creation applications, reducing vendor evaluation turnaround from ~1 week to hours.",
    stack: ["Azure", "Cosmos DB", "Azure OpenAI", "Power Automate"],
    impact: "Vendor evaluation reduced from ~1 week to hours",
  },
  {
    name: "Regulatory Data Lake & ETL Platform",
    slug: "regulatory-data-lake",
    description: "Partner Engineer on a 10-month engagement building a regulatory-grade AWS data lake across 5 use cases, ~70 tables, with a 100+ rule data quality engine.",
    stack: ["PySpark", "AWS Glue", "Step Functions", "Terraform"],
    impact: "GBs of data processed across 4 data sources",
  },
  {
    name: "Cloud Infrastructure — Telco Sector",
    slug: "cloud-infrastructure-telco",
    description: "8-month AWS infrastructure build for a major Singapore telco with multi-account organisation, Transit Gateway, EKS cluster, and centralised security stack.",
    stack: ["AWS", "EKS", "Kubernetes", "Terraform"],
    impact: "Multi-AZ high availability, enterprise-grade security",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-grid">
        <div className="container">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            {/* Code-style label */}
            <CodeLabel className="mb-6">Cloud Architect · Data & AI</CodeLabel>

            {/* Headline with typing cursor */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm Dinesh Anbalagan.
              <br />
              <span className="text-muted-foreground">I architect cloud & AI systems</span>
              <TypingCursor />
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              A Singapore-based Cloud Architect with 5 years delivering Data and AI solutions 
              across AWS, GCP, and Azure. Bridging business problems and technical execution — 
              from architecture to production.
            </p>

            {/* CTA */}
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="font-mono transition-transform hover:scale-105">
                <Link to="/work">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label="Featured Work" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.name} 
                className={`opacity-0 animate-fade-in-up stagger-${index + 1}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link 
              to="/work" 
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              <span className="text-primary mr-2">{"//"}</span>
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
