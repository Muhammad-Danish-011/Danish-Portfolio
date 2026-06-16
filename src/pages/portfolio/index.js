import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { 
  FaFolderOpen, 
  FaGithub, 
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
  FaCode,
  FaCloud,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython
} from "react-icons/fa";
import { SiNextdotjs, SiDotnet, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiSpringboot, SiFlask, SiNestjs } from "react-icons/si";

export const Portfolio = () => {
  const [repositories, setRepositories] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Projects");

  useEffect(() => {
    fetch("https://api.github.com/users/Muhammad-Danish-011/repos")
      .then((response) => response.json())
      .then((data) => {
        // Filter out forked repositories
        const nonForkedRepos = data.filter(repo => !repo.fork);
        setRepositories(nonForkedRepos);
        setFilteredRepos(nonForkedRepos);
      })
      .catch((error) => console.error('Error fetching GitHub repositories:', error));
  }, []);

  // All Projects - Combined
  const allProjects = [
    {
      id: 1,
      title: "Universal Motors HRMS",
      description: "Enterprise HR Management System with employee management, role-based access, real-time dashboards, and secure authentication. Built with React, TypeScript, .NET Core Web API, and SQL Server, deployed on Azure.",
      tech: ["React", "TypeScript", ".NET Core", "SQL Server", "Azure"],
      icon: <FaServer />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "https://universalhrm.com",
      githubUrl: "https://github.com/Muhammad-Danish-011/HRMS",
      category: "Enterprise",
      date: "2025"
    },
    {
      id: 2,
      title: "Universal Motors Dealer Portal",
      description: "Full-stack dealer management platform with multi-tier hierarchy, JWT authentication, vehicle approval workflow, and real-time inventory management. Built with Next.js, ASP.NET Core, and Azure.",
      tech: ["Next.js", "ASP.NET Core", "JWT", "Azure SQL", "Tailwind CSS"],
      icon: <FaCloud />,
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
      liveUrl: "https://umdealersportal.com",
      githubUrl: "https://github.com/Muhammad-Danish-011/Dealer-Portal",
      category: "Enterprise",
      date: "2025"
    },
    {
      id: 3,
      title: "Global Quality Cars Portal",
      description: "Complete automotive dealer platform with vehicle inventory management, multi-image upload, sub-dealer network, real-time analytics, and smart notifications. Deployed on Azure with full CI/CD pipeline.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Azure", "Tailwind CSS"],
      icon: <FaDatabase />,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
      liveUrl: "https://www.gqcportal.com",
      githubUrl: "https://github.com/Muhammad-Danish-011/GQC-Portal",
      category: "Enterprise",
      date: "2025"
    },
    {
      id: 4,
      title: "Agha Khan Board Affiliation School Portal",
      description: "School affiliation management system with data dashboards using React/Next.js and ASP.NET Core APIs. Streamlined affiliation processes and data visualization.",
      tech: ["React", "Next.js", "ASP.NET Core", "SQL Server", "REST APIs"],
      icon: <FaServer />,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "https://github.com/Muhammad-Danish-011/School-Portal",
      category: "Education",
      date: "2024-2025"
    },
    {
      id: 5,
      title: "Universal Motors Corporate Website",
      description: "Corporate website for Universal Motors Ltd with modern design, responsive layout, and seamless user experience. Built with modern web technologies and deployed on Azure.",
      tech: ["React", "Next.js", "Tailwind CSS", "Azure"],
      icon: <FaCloud />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      liveUrl: "https://www.universalmotorsltd.com",
      githubUrl: "https://github.com/Muhammad-Danish-011/Universal-Motors",
      category: "Corporate",
      date: "2025"
    },
    {
      id: 6,
      title: "XLoop Digital Services",
      description: "Digital services platform showcasing XLoop's capabilities in web development, software solutions, and digital transformation services.",
      tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      icon: <FaNodeJs />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      liveUrl: "https://www.xloopdigital.com",
      githubUrl: "https://github.com/Muhammad-Danish-011/XLoop-Digital",
      category: "Corporate",
      date: "2023"
    },
    {
      id: 7,
      title: "DGL Beforward - Vehicle Import Platform",
      description: "Vehicle import and trading website with online presence and customer engagement features. Modern platform for international vehicle trading and import management.",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "Azure"],
      icon: <FaDatabase />,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
      liveUrl: "https://www.dglbeforward.com",
      githubUrl: "https://github.com/Muhammad-Danish-011/DGL-Beforward",
      category: "E-Commerce",
      date: "2024"
    },
    {
      id: 8,
      title: "Global Quality Cars",
      description: "Global car marketplace platform with advanced search, filtering, and listing features for international car trading and dealership management.",
      tech: ["React", "Next.js", "NestJS", "PostgreSQL", "Azure"],
      icon: <FaCloud />,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
      liveUrl: "https://www.globalqualitycars.com",
      githubUrl: "https://github.com/Muhammad-Danish-011/Global-Quality-Cars",
      category: "Marketplace",
      date: "2024"
    },
    {
      id: 9,
      title: "Brand Guard - Brand Monitoring App",
      description: "Brand monitoring application for tracking and analyzing brand presence across platforms. Built with React, Flask, and PostgreSQL for real-time brand monitoring.",
      tech: ["React", "Flask", "PostgreSQL", "Python", "REST APIs"],
      icon: <FaPython />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "https://github.com/Muhammad-Danish-011/Brand-Guard",
      category: "Applications",
      date: "2023-2024"
    },
    {
      id: 10,
      title: "Mayassar - FYP Platform",
      description: "Final Year Project - Development platform with real-time chat functionality using MERN stack and Socket.IO. Collaborative platform for developers.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
      icon: <FaNodeJs />,
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "https://github.com/Muhammad-Danish-011/Mayassar",
      category: "Academic",
      date: "2022"
    },
    {
      id: 11,
      title: "Peace of Mind - Web Application",
      description: "Web application built with React and Spring Boot, using PostgreSQL for data persistence. Focus on user experience and scalable architecture.",
      tech: ["React", "Spring Boot", "PostgreSQL", "Java", "REST APIs"],
      icon: <FaJava />,
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "https://github.com/Muhammad-Danish-011/Peace-of-Mind",
      category: "Applications",
      date: "2022"
    }
  ];

  // Achievements Data with React Icons
  const achievements = [
    {
      title: "Cloud Native Solution Development",
      description: "Building scalable, cloud-native solutions for U.S. platforms using modern technologies.",
      platform: "Emeritus",
      date: "Feb 2023 - Jun 2023",
      icon: <FaCloud />
    },
    {
      title: "Google Cloud Platform Certification",
      description: "Understanding Google Cloud essentials for modern, cloud-based applications.",
      platform: "Udemy",
      date: "Oct 2023",
      icon: <FaCloud />
    },
    {
      title: "Outstanding Performance in Web Development",
      description: "Recognized at Universal Motors for exceptional web development contributions and production-ready system delivery.",
      platform: "Universal Motors",
      date: "2025-2026",
      icon: <FaStar />
    },
    {
      title: "NEXA 2025-2026 Recognition",
      description: "Received recognition at NEXA for performance, dedication, and continuous growth.",
      platform: "NEXA",
      date: "2025-2026",
      icon: <FaStar />
    },
    {
      title: "Promotion to Solution Architect",
      description: "Promoted to Solution Architect for driving innovation, technical excellence, and enterprise architecture.",
      platform: "Universal Motors",
      date: "Apr 2026",
      icon: <FaServer />
    }
  ];

  // Get unique categories for filter
  const categories = ["All Projects", ...new Set(allProjects.map(p => p.category))];

  // Filter projects by category
  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === "All Projects") {
      setFilteredRepos(repositories);
    } else {
      // Filter projects based on category
      const filtered = allProjects.filter(p => p.category === category);
      // Also filter GitHub repos by language/category
      const repoFiltered = repositories.filter(repo => {
        // You can add custom logic here to map GitHub repos to categories
        return true;
      });
      setFilteredRepos(repoFiltered);
    }
  };

  return (
    <HelmetProvider>
      <Container className="portfolio-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Header Section */}
        <Row className="mb-5 pt-3">
          <Col lg="8">
            <h1 className="portfolio-title">
              <FaFolderOpen className="title-icon" /> Portfolio
            </h1>
            <div className="title-underline"></div>
            <p className="portfolio-subtitle">
              Here are some of my featured projects that showcase my expertise in 
              full-stack development, cloud architecture, and enterprise solutions.
            </p>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="stats-row mb-5">
          <Col xs="6" md="3" className="stat-item">
            <div className="stat-number">{allProjects.length}+</div>
            <div className="stat-label">Total Projects</div>
          </Col>
          <Col xs="6" md="3" className="stat-item">
            <div className="stat-number">7</div>
            <div className="stat-label">Live Projects</div>
          </Col>
          <Col xs="6" md="3" className="stat-item">
            <div className="stat-number">{achievements.length}</div>
            <div className="stat-label">Achievements</div>
          </Col>
          <Col xs="6" md="3" className="stat-item">
            <div className="stat-number">Azure</div>
            <div className="stat-label">Cloud Deployed</div>
          </Col>
        </Row>

        {/* Filter Buttons */}
        <div className="filter-buttons mb-4">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => filterProjects(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {allProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <span className="project-date">{project.date}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <Row className="achievements-section mt-5">
          <Col lg="12">
            <h3 className="section-heading">
              <FaStar className="heading-icon" /> Achievements
            </h3>
            <div className="achievements-grid">
              {achievements.map((achievement, i) => (
                <div key={i} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                    <div className="achievement-meta">
                      <span className="achievement-platform">{achievement.platform}</span>
                      <span className="achievement-date">{achievement.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* GitHub Repositories Section */}
        <Row className="github-section mt-5">
          <Col lg="12">
            <h3 className="section-heading">
              <FaGithub className="heading-icon" /> GitHub Repositories
            </h3>
            <div className="github-grid">
              {repositories.slice(0, 6).map((repo, i) => (
                <div key={i} className="github-card">
                  <h4>{repo.name}</h4>
                  <p>{repo.description || "No description available"}</p>
                  <div className="github-stats">
                    <span><FaStar /> {repo.stargazers_count || 0}</span>
                    <span><FaCodeBranch /> {repo.forks_count || 0}</span>
                    <span><FaCode /> {repo.language || "N/A"}</span>
                  </div>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> View Repository →
                  </a>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .portfolio-container {
          padding: 2rem 0;
        }

        .portfolio-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .title-icon {
          color: #60a5fa;
          font-size: 2.5rem;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          border-radius: 2px;
          margin-bottom: 1rem;
        }

        .portfolio-subtitle {
          color: var(--text-color);
          opacity: 0.7;
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 600px;
        }

        .stats-row {
          background: var(--bg-color);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
          margin-bottom: 2rem !important;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: var(--text-color);
          opacity: 0.6;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .filter-btn {
          padding: 0.5rem 1.5rem;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.1);
          background: transparent;
          color: var(--text-color);
          opacity: 0.7;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }

        .filter-btn:hover {
          background: rgba(96, 165, 250, 0.1);
          border-color: #3b82f6;
          opacity: 1;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-color: transparent;
          color: #fff;
          opacity: 1;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .project-card {
          background: var(--bg-color);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .project-category {
          background: var(--overlay-color);
          backdrop-filter: blur(10px);
          color: var(--text-color);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.1);
        }

        .project-date {
          background: var(--overlay-color);
          backdrop-filter: blur(10px);
          color: var(--text-color);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.7rem;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.1);
        }

        .project-content {
          padding: 1.25rem;
        }

        .project-title {
          color: var(--text-color);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .project-description {
          color: var(--text-color);
          opacity: 0.7;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .project-links {
          display: flex;
          gap: 0.75rem;
        }

        .btn-live, .btn-github {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-live {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: #fff;
        }

        .btn-live:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .btn-github {
          background: var(--bg-color);
          color: var(--text-color);
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.1);
        }

        .btn-github:hover {
          background: rgba(255,255,255,0.1);
        }

        .section-heading {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-color);
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .heading-icon {
          color: #60a5fa;
        }

        /* Achievements Styles */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1rem;
        }

        .achievement-card {
          background: var(--bg-color);
          padding: 1.25rem;
          border-radius: 12px;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
          display: flex;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-3px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .achievement-icon {
          font-size: 2rem;
          flex-shrink: 0;
          color: #60a5fa;
        }

        .achievement-content h4 {
          color: var(--text-color);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .achievement-content p {
          color: var(--text-color);
          opacity: 0.7;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 0.5rem;
        }

        .achievement-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.75rem;
        }

        .achievement-platform {
          color: #60a5fa;
          font-weight: 500;
        }

        .achievement-date {
          color: var(--text-color);
          opacity: 0.5;
        }

        .github-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }

        .github-card {
          background: var(--bg-color);
          padding: 1.25rem;
          border-radius: 8px;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }

        .github-card:hover {
          background: rgba(255,255,255,0.03);
          transform: translateY(-3px);
        }

        .github-card h4 {
          color: var(--text-color);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .github-card p {
          color: var(--text-color);
          opacity: 0.6;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .github-stats {
          display: flex;
          gap: 1rem;
          color: var(--text-color);
          opacity: 0.5;
          font-size: 0.75rem;
          margin-bottom: 0.75rem;
          align-items: center;
        }

        .github-stats svg {
          margin-right: 0.25rem;
        }

        .github-card a {
          color: #60a5fa;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .github-card a:hover {
          color: #93c5fd;
        }

        @media (max-width: 768px) {
          .portfolio-title {
            font-size: 2rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .stat-number {
            font-size: 1.4rem;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .filter-buttons {
            justify-content: center;
          }
          
          .filter-btn {
            font-size: 0.75rem;
            padding: 0.25rem 1rem;
          }

          .achievement-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .portfolio-title {
            font-size: 1.75rem;
          }

          .title-icon {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </HelmetProvider>
  );
};