import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <div className="home-container">
          {/* Left Content */}
          <div className="home-content">
            <div className="home-text">
              <span className="home-greeting">Welcome to my portfolio</span>
              <h2 className="home-title">{introdata.title}</h2>
              <h1 className="home-typewriter">
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                    delay: 50,
                  }}
                />
              </h1>
              <p className="home-description">{introdata.description}</p>
              
              <div className="home-buttons">
                <Link to="/portfolio" className="btn-primary">
                  <i className="fas fa-folder-open"></i>
                  My Portfolio
                </Link>
                <Link to="/contact" className="btn-secondary">
                  <i className="fas fa-paper-plane"></i>
                  Contact Me
                </Link>
              </div>

              {/* Tech Stack Tags */}
              <div className="home-tech-stack">
                <span className="tech-label">Tech Stack:</span>
                <div className="tech-tags">
                  <span className="tech-tag">.NET</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Azure</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">SQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="home-image">
            <div className="image-wrapper">
              <img 
                src={introdata.your_img_url} 
                alt="Muhammad Danish" 
                className="profile-image"
              />
              <div className="image-glow"></div>
              <div className="image-badge">
                <span>Solution Architect</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="floating-stats">
          <div className="stat-card">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">11+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">7</span>
            <span className="stat-label">Live Deployments</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Azure</span>
            <span className="stat-label">Cloud Expert</span>
          </div>
        </div>
      </section>

      <style>{`
        .home-section {
          min-height: calc(100vh - 60px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 4rem;
          position: relative;
          overflow: hidden;
        }

        /* Background Glow */
        .home-section::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.05), transparent 70%);
          top: -200px;
          right: -200px;
          border-radius: 50%;
          pointer-events: none;
        }

        .home-section::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.05), transparent 70%);
          bottom: -100px;
          left: -100px;
          border-radius: 50%;
          pointer-events: none;
        }

        .home-container {
          display: flex;
          align-items: center;
          gap: 4rem;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        /* Left Content */
        .home-content {
          flex: 1;
        }

        .home-text {
          max-width: 700px;
        }

        .home-greeting {
          display: inline-block;
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .home-title {
          font-size: 1.8rem;
          font-weight: 500;
          color: var(--text-color);
          opacity: 0.8;
          margin-bottom: 0.5rem;
        }

        .home-typewriter {
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--text-color);
          min-height: 4rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .home-description {
          color: var(--text-color);
          opacity: 0.7;
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 600px;
          margin-bottom: 2rem;
        }

        /* Buttons */
        .home-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .btn-primary, .btn-secondary {
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: #fff;
          border: none;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
          background: var(--bg-color);
          color: var(--text-color);
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.1);
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.05);
          transform: translateY(-3px);
        }

        /* Tech Stack */
        .home-tech-stack {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .tech-label {
          color: var(--text-color);
          opacity: 0.5;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(59, 130, 246, 0.08);
          color: #60a5fa;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          border: 1px solid rgba(59, 130, 246, 0.15);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(59, 130, 246, 0.15);
          transform: translateY(-2px);
        }

        /* Right Image */
        .home-image {
          flex: 0 0 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          position: relative;
          width: 380px;
          height: 380px;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid var(--text-color);
          border-color: rgba(255,255,255,0.1);
          position: relative;
          z-index: 2;
          transition: all 0.5s ease;
        }

        .profile-image:hover {
          transform: scale(1.02);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .image-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%);
          top: 0;
          left: 0;
          z-index: 1;
          animation: pulseGlow 3s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        .image-badge {
          position: absolute;
          bottom: 20px;
          right: -10px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 3;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
          animation: bounceBadge 2s ease-in-out infinite;
        }

        @keyframes bounceBadge {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        /* Floating Stats */
        .floating-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1000px;
          margin: 3rem auto 0;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .stat-card {
          background: var(--bg-color);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid var(--text-color);
          border-color: rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: var(--text-color);
          opacity: 0.6;
          font-size: 0.875rem;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .home-image {
            flex: 0 0 320px;
          }
          .image-wrapper {
            width: 320px;
            height: 320px;
          }
        }

        @media (max-width: 992px) {
          .home-container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 2rem;
          }

          .home-text {
            max-width: 100%;
          }

          .home-description {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          .home-buttons {
            justify-content: center;
          }

          .home-tech-stack {
            justify-content: center;
          }

          .home-image {
            flex: 0 0 280px;
          }
          .image-wrapper {
            width: 280px;
            height: 280px;
          }

          .floating-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .home-typewriter {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 576px) {
          .home-section {
            padding: 1.5rem;
          }

          .home-title {
            font-size: 1.4rem;
          }

          .home-typewriter {
            font-size: 1.6rem;
            min-height: 3rem;
          }

          .home-image {
            flex: 0 0 200px;
          }
          .image-wrapper {
            width: 200px;
            height: 200px;
          }

          .image-badge {
            font-size: 0.65rem;
            padding: 0.3rem 0.75rem;
            bottom: 10px;
            right: -5px;
          }

          .floating-stats {
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
          }

          .stat-card {
            padding: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .home-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </HelmetProvider>
  );
};