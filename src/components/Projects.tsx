import { useState } from 'react';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FileSeek - AI-Powered Local Document Archivist",
    description: "An open-source, AI-powered document archival and semantic search tool with natural language query support. Features vector-based semantic search using FAISS and AI-powered OCR for enhanced text extraction.",
    image: "images/fileseek-cover.jpg", // Place your image in public/images/
    technologies: ["Python", "FAISS", "OCR", "PyPI", "Multithreading"],
    github: "https://github.com/KyrieTangSheng/file-seek",
    category: "AI Tools"
  },
  {
    id: 2,
    title: "SupreAssistant - Lifelong AI Personal Assistant",
    description: "An AI Agent that manages schedules and notes using LLMs with Retrieval-Augmented Generation (RAG). Full-stack application with TypeScript, React frontend and Node.js backend.",
    image: "images/supreassistant-cover.jpg", // Place your image in public/images/
    technologies: ["TypeScript", "React", "Node.js", "Express", "LangChain", "Docker", "SQLite"],
    github: "https://github.com/KyrieTangSheng/SupreAssistant",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Memorial Continuum",
    description: "An embedded speech-to-visual device that captures and analyzes spoken contents to output visual representations. Engineered programs connecting Raspberry Pi, Node-RED NLP, and Unity via MQTT protocol.",
    image: "images/memorial-continuum-cover.jpg",
    technologies: ["Raspberry Pi", "Node-RED", "Unity", "MQTT", "NLP"],
    github: "https://drive.google.com/file/d/1dUgIFvDeNP4-tebhvYJ3Fw6KUkA-dV2O/view?usp=sharing",
    category: "IoT"
  }
];

const categories = ["All", ...new Set(projects.map(project => project.category))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      
      <div className={styles.categories}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.projectGrid}>
        {filteredProjects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
              <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  GitHub
                </a>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map(tech => (
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

export default Projects;
