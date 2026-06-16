import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import { 
  FaUser, 
  FaCode, 
  FaBuilding, 
  FaCloud, 
  FaCogs,
  FaBriefcase,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaMicrosoft
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiDotnet, 
  SiTypescript, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMongodb, 
  SiSpringboot, 
  SiFlask,
  SiNestjs,
  SiMysql,
  SiFirebase,
  SiGraphql
} from "react-icons/si";

export const About = () => {
  // Service icons mapping - using only icons that exist in react-icons/fa
  const serviceIcons = [
    <FaCode />,      // Full Stack Development
    <FaBuilding />,  // Enterprise Solutions
    <FaCloud />,     // Cloud Architecture
    <FaCode />,      // API Development
    <FaCogs />       // DevOps & CI/CD
  ];

  return (
    <HelmetProvider>
      <Container className="about-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Header Section */}
        <Row className="mb-5 pt-3">
          <Col lg="8">
            <h1 className="about-title">
              <FaUser className="title-icon" /> About Me
            </h1>
            <div className="title-underline"></div>
            <p className="about-subtitle">
              Learn more about my journey, skills, and what I bring to the table.
            </p>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="about-section">
          <Col lg="5" className="mb-4 lg:mb-0">
            <h3 className="section-heading">
              <FaUser className="heading-icon" /> {dataabout.title}
            </h3>
            <div className="about-stats-mini">
              <div className="mini-stat">
                <span className="mini-number">3+</span>
                <span className="mini-label">Years Experience</span>
              </div>
              <div className="mini-stat">
                <span className="mini-number">11+</span>
                <span className="mini-label">Projects</span>
              </div>
              <div className="mini-stat">
                <span className="mini-number">7</span>
                <span className="mini-label">Live Deployments</span>
              </div>
            </div>
          </Col>
          <Col lg="7">
            <div className="about-text">
              {dataabout.aboutme.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </Col>
        </Row>

        {/* Work Timeline Section */}
        <Row className="about-section">
          <Col lg="5" className="mb-4 lg:mb-0">
            <h3 className="section-heading">
              <FaBriefcase className="heading-icon" /> Work Timeline
            </h3>
          </Col>
          <Col lg="7">
            <div className="timeline">
              {worktimeline.map((data, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h4 className="timeline-title">
                      <FaLaptopCode className="timeline-icon" /> {data.jobtitle}
                    </h4>
                    <p className="timeline-company">{data.where}</p>
                    <p className="timeline-date">{data.date}</p>
                    {data.description && (
                      <p className="timeline-description">{data.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="about-section">
          <Col lg="5" className="mb-4 lg:mb-0">
            <h3 className="section-heading">
              <FaCode className="heading-icon" /> Skills
            </h3>
          </Col>
          <Col lg="7">
            <div className="skills-container">
              {skills.map((data, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{data.name}</span>
                    <span className="skill-value">{data.value}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${data.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Services Section */}
        <Row className="about-section">
          <Col lg="5" className="mb-4 lg:mb-0">
            <h3 className="section-heading">
              <FaServer className="heading-icon" /> Services
            </h3>
          </Col>
          <Col lg="7">
            <div className="services-grid">
              {services.map((data, i) => (
                <div key={i} className="service-card">
                  <div className="service-icon">
                    {serviceIcons[i % serviceIcons.length]}
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">{data.title}</h5>
                    <p className="service-description">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .about-container {
          padding: 2rem 0;
        }

        .about-title {
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

        .about-subtitle {
          color: var(--text-color);
          opacity: 0.7;
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 600px;
        }

        .about-section {
          padding: 2.5rem 0;
          border-bottom: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
        }

        .about-section:last-child {
          border-bottom: none;
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

        /* About Text */
        .about-text {
          color: var(--text-color);
          line-height: 1.8;
          opacity: 0.85;
        }

        .about-text p {
          margin-bottom: 1rem;
        }

        /* Mini Stats */
        .about-stats-mini {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .mini-stat {
          background: var(--bg-color);
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
          text-align: center;
          flex: 1;
          min-width: 80px;
        }

        .mini-number {
          display: block;
          font-size: 1.2rem;
          font-weight: 700;
          color: #60a5fa;
        }

        .mini-label {
          font-size: 0.7rem;
          color: var(--text-color);
          opacity: 0.5;
        }

        /* Timeline */
        .timeline {
          position: relative;
        }

        .timeline-item {
          position: relative;
          padding-left: 2rem;
          padding-bottom: 2rem;
          border-left: 2px solid var(--text-color);
          border-color: rgba(255,255,255,0.1);
          transition: border-color 0.3s ease;
        }

        .timeline-item:last-child {
          border-left: none;
          padding-bottom: 0;
        }

        .timeline-item:hover {
          border-color: #3b82f6;
        }

        .timeline-dot {
          position: absolute;
          left: -8px;
          top: 4px;
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          border: 2px solid var(--bg-color);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-dot {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }

        .timeline-card {
          background: var(--bg-color);
          padding: 1rem 1.25rem;
          border-radius: 8px;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }

        .timeline-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateX(5px);
        }

        .timeline-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .timeline-icon {
          color: #60a5fa;
          font-size: 0.9rem;
        }

        .timeline-company {
          color: #60a5fa;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .timeline-date {
          color: var(--text-color);
          opacity: 0.4;
          font-size: 0.8rem;
          margin-top: 0.2rem;
        }

        .timeline-description {
          color: var(--text-color);
          opacity: 0.6;
          font-size: 0.85rem;
          line-height: 1.6;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.05);
        }

        /* Skills */
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skill-item {
          width: 100%;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }

        .skill-name {
          color: var(--text-color);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .skill-value {
          color: #60a5fa;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .skill-bar {
          width: 100%;
          height: 6px;
          background: var(--text-color);
          background-color: rgba(255,255,255,0.06);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 3px;
          transition: width 1.2s ease;
          position: relative;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Services */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .service-card {
          display: flex;
          gap: 1rem;
          background: var(--bg-color);
          padding: 1.25rem;
          border-radius: 10px;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
          transition: all 0.3s ease;
          align-items: flex-start;
        }

        .service-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .service-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          background: rgba(59, 130, 246, 0.08);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #60a5fa;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
          background: rgba(59, 130, 246, 0.15);
          transform: scale(1.05);
        }

        .service-content {
          flex: 1;
        }

        .service-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 0.4rem;
        }

        .service-description {
          color: var(--text-color);
          opacity: 0.6;
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-title {
            font-size: 2rem;
          }

          .about-section {
            padding: 1.5rem 0;
          }

          .section-heading {
            font-size: 1.25rem;
          }

          .about-stats-mini {
            gap: 0.5rem;
          }

          .mini-stat {
            padding: 0.5rem 0.75rem;
            min-width: 60px;
          }

          .timeline-item {
            padding-left: 1.5rem;
            padding-bottom: 1.5rem;
          }

          .service-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .service-icon {
            width: 50px;
            height: 50px;
            min-width: 50px;
          }

          .about-title {
            font-size: 2rem;
          }

          .title-icon {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 576px) {
          .about-container {
            padding: 1rem 0;
          }

          .about-title {
            font-size: 1.75rem;
          }

          .about-stats-mini {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .mini-stat {
            flex: 1 1 calc(50% - 0.5rem);
          }

          .services-grid {
            gap: 0.75rem;
          }

          .service-card {
            padding: 1rem;
          }
        }
      `}</style>
    </HelmetProvider>
  );
};