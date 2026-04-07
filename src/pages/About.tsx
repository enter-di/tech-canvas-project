import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";

const skills = [
  "Cloud Architecture",
  "Data & AI Solutions",
  "Multi-Cloud Strategy",
  "Solution Design & Pre-Sales",
  "Technical Leadership",
  "Cost Optimisation",
];

const stack = [
  "AWS",
  "GCP",
  "Azure",
  "Terraform",
  "Kubernetes",
  "Python",
  "PySpark",
  "Vertex AI",
  "AWS Bedrock",
  "Docker",
  "Snowflake",
  "Apache Kafka",
];

const certifications = [
  "AWS Solutions Architect – Associate",
  "AWS Cloud Practitioner",
  "AWS Well-Architected Proficient",
  "Azure Data Fundamentals",
  "Azure Fundamentals",
  "Confluent – Apache Kafka",
  "Snowflake Technical Sales Professional",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <span className="text-primary font-medium">Dinesh Anbalagan</span>, a Cloud Architect based in Singapore with 5 years delivering Data and AI solutions across AWS, GCP, and Azure for enterprise clients in the region.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  I bridge business problems and technical execution — designing cloud infrastructure, 
                  data platforms, and AI-powered applications that actually reach production. 
                  Multi-cloud, client-facing, and hands-on from architecture to deployment.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  Currently at <span className="text-foreground font-medium">Keppel Technology Solutions</span>, 
                  I architect cloud and AI-driven data platforms across Financial Services, Real Estate, Education, 
                  Telecommunications, and Government sectors. I've served 100+ organisations, secured USD 500K in AWS MAP funding, 
                  and won contracts averaging $250K–$500K.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Philosophy" />
              </div>

              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Architecture over hacking — build for production
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Config-driven, not hardcoded
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Measure cost, not just performance
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Bridge business and engineering
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Skills <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <span className="text-primary mr-2">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Stack <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Certifications <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <span className="text-primary mr-2">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Experience <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>5+ years in cloud & data engineering</p>
                  <p>100+ organisations served</p>
                  <p>Multi-cloud: AWS · GCP · Azure</p>
                  <p>Based in Singapore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
