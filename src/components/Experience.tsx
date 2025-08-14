import { useEffect, useRef } from 'react';
import styles from './Experience.module.css';

interface Experience {
  company: string;
  companyUrl?: string;
  companyDescription?: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

// Helper function to sort technologies by priority
const sortTechnologies = (technologies: string[]) => {
  const priorityOrder: { [key: string]: number } = {
    // Languages
    'Python': 1,
    'TypeScript': 2, 
    'Java': 3,
    'C#': 4,

    // Popular Frameworks
    'React': 5,
    'Node.js': 6,
    'Express.js': 7,
    'FastAPI': 8,
    'Spring': 9,
    '.NET': 10,

    // Cloud & Infrastructure 
    'AWS': 11,
    'Docker': 12,
    'Kubernetes': 13,

    // Databases
    'MySQL': 14,
    'SQL Server': 15,
    'Redis': 16,

    // Other technologies get default priority of 100
  };

  return [...technologies].sort((a, b) => 
    (priorityOrder[a] || 100) - (priorityOrder[b] || 100)
  );
};

const experiences: Experience[] = [
  {
    company: "TikTok",
    companyUrl: "https://www.tiktok.com/explore",
    companyDescription: "Social Media",
    role: "Software Engineer Intern",
    period: "Jun 2025 - Sept 2025",
    location: "San Jose, CA",
    description: [
        "Architected a retargeting strategy as core component of dynamic targeting framework across 8M+ advertisements, reducing cost per acquisition by 7% compared to broad targeting via budget-split experimentation",
        "Developed and integrated LLM tag expansion as a strategy within multi-arm bandit system, enabling automated generation of enhanced ad tags for improved audience matching and increasing advertiser value by 1.24%",
        "Developed new RPC service for more configurable and safer targeting strategy injection to avoid injection conflicts"
    ],
    technologies: sortTechnologies([
      "Golang", "Apache Spark", "Kubernetes", "Cron", "RPC", "Multi-Arm Bandit", "LLM"
    ])
  },
  {
    company: "UrsaTech",
    companyUrl: "https://ursatech.com",
    companyDescription: "Multimodal AI",
    role: "Software Engineer Intern",
    period: "Nov 2024 - Feb 2025",
    location: "San Francisco, CA",
    description: [
      "Architected foundational ML infrastructure from scratch, building prototype experimentation platform with Kubernetes-based GPU resource allocation for AI model training workflows",
      "Developed core collaborative coding infrastructure with real-time synchronization capabilities, establishing the technical foundation for the startup’s educational programming environment"
    ],
    technologies: sortTechnologies([
      "Python", "Node.js", "Express.js", "FastAPI", "MySQL", "AWS S3", "WebSocket", "Redis"
    ])
  },
  {
    company: "FNZ Group",
    companyUrl: "https://www.fnz.com",
    companyDescription: "Global Fintech Platform",
    role: "Software Engineer",
    period: "Jul 2023 - Jun 2024",
    location: "London, UK",
    description: [
      "Built scalable online trading service for fintech platforms with C# .NET framework",
      "Designed and implemented REST APIs under MVC pattern for regular investment functions",
      "Implemented reliable inter-platform communication using RabbitMQ",
      "Optimized database schema and queries, improving overall query latency by over 30%",
      "Integrated third party APIs with JWT Token authentication"
    ],
    technologies: sortTechnologies([
      "C#", ".NET", "SQL Server", "RabbitMQ", "REST API", "MVC", "JWT"
    ])
  },
  {
    company: "Hello Transtech",
    companyUrl: "https://www.hello-inc.com",
    companyDescription: "Mobility Tech",
    role: "Backend Engineer Intern",
    period: "Sep 2022 - Nov 2022",
    location: "Shanghai, China",
    description: [
      "Worked for a leading ride rental company in Asia",
      "Contributed to microservices development for e-bike rent business within Java Spring framework",
      "Implemented controller and business logic for order processing and payment handling"
    ],
    technologies: sortTechnologies([
      "Java", "Spring", "Microservices"
    ])
  }
];

const Experience = () => {
  const expRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    expRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className={styles.timelineItem}
            ref={(el: HTMLDivElement | null) => { expRefs.current[index] = el }}
          >
            <div className={styles.timelineContent}>
              <div className={styles.header}>
                <h3 className={styles.company}>
                  {exp.company}
                  {exp.companyUrl && (
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                      <span>↗</span>
                    </a>
                  )}
                </h3>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <div className={styles.companyDescription}>{exp.companyDescription}</div>
              <div className={styles.role}>{exp.role}</div>
              <div className={styles.location}>{exp.location}</div>
              <ul className={styles.description}>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className={styles.technologies}>
                {exp.technologies.map(tech => (
                  <span key={tech} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 