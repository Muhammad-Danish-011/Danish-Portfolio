import React, { useState, useEffect } from "react";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { 
  FaHome, 
  FaFolderOpen, 
  FaUser, 
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaGlobe
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    if (!isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <header className="site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button" onClick={handleToggle}>
              {isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu"></div>
          <div className="menu__wrapper">
            <div className="menu__container">
              <ul className="the_menu">
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/">
                    <FaHome /> Home
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/portfolio">
                    <FaFolderOpen /> Portfolio
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/about">
                    <FaUser /> About
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact">
                    <FaEnvelope /> Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu_footer">
            <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href={socialprofils.portfolio} target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </a>
            <p className="copyright">© {logotext}</p>
          </div>
        </div>
      </header>

      <style>{`
        .site__header {
          top: 10px;
          padding-left: 10px;
          padding-right: 10px;
          position: fixed;
          z-index: 1000;
          width: 100%;
          background: var(--bg-color);
        }

        .menu__button {
          color: var(--text-color);
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 5px;
        }

        .menu__button:focus,
        .menu__button:hover {
          color: var(--text-color);
          box-shadow: unset;
        }

        .menu__button svg {
          width: 2em;
          height: 2em;
          fill: var(--text-color);
          color: var(--text-color);
        }

        .nav_ac {
          padding: 5px 15px;
          margin: 0;
          border: unset;
          background: transparent;
          font-size: 1.25rem;
          font-family: Marcellus;
          color: var(--text-color);
          line-height: 2;
          height: 50px;
          font-weight: bold;
          z-index: 1000;
          text-decoration: none;
        }

        .nav_ac:hover {
          color: var(--text-color);
        }

        .br-top,
        .br-bottom,
        .br-right,
        .br-left {
          position: fixed;
          z-index: 999999;
          background: var(--bg-color);
        }

        .br-top {
          top: 0;
          height: 10px;
          left: 0;
          width: 100%;
        }

        .br-bottom {
          bottom: 0;
          left: 0;
          height: 10px;
          width: 100%;
        }

        .br-right {
          width: 10px;
          right: 0;
          top: 0;
          height: 100%;
        }

        .br-left {
          width: 10px;
          left: 0;
          top: 0;
          height: 100%;
        }

        .site__navigation {
          height: 100%;
          left: 0;
          overflow: hidden;
          position: fixed;
          top: 0;
          width: 100%;
          visibility: hidden;
          z-index: 999;
        }

        .menu__opend {
          visibility: visible !important;
        }

        .bg__menu {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 100%;
          height: 100%;
          background-color: var(--bg-color);
          will-change: transform;
          transform: translateY(-100%);
          transition: .5s ease all;
        }

        .menu__opend .bg__menu {
          transform: translateY(0);
        }

        .menu__wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 80px 0 100px 0;
        }

        .menu__container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          padding: 2rem;
        }

        .the_menu {
          padding: 0;
          margin: 0;
          list-style: none;
          text-align: center;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .menu__opend .the_menu {
          opacity: 1;
        }

        .the_menu .menu_item {
          margin: 15px 0;
        }

        .the_menu .menu_item > a {
          color: var(--text-color);
          line-height: 1;
          font-size: 2.5rem;
          display: inline-flex;
          align-items: center;
          gap: 15px;
          position: relative;
          transition: all 250ms cubic-bezier(0, 0, 0.58, 1) 0s;
          padding: 8px 20px;
          text-decoration: none;
          font-family: Marcellus;
          border-radius: 12px;
        }

        .the_menu .menu_item > a:hover {
          color: #60a5fa;
          background: rgba(59, 130, 246, 0.05);
          transform: translateX(10px);
        }

        .the_menu .menu_item > a svg {
          font-size: 1.8rem;
          color: #60a5fa;
        }

        @media (max-width: 768px) {
          .the_menu .menu_item > a {
            font-size: 1.8rem;
          }
          .the_menu .menu_item > a svg {
            font-size: 1.4rem;
          }
        }

        .menu_footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          font-family: Marcellus;
          font-size: 14px;
          background: var(--bg-color);
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.06);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .menu__opend .menu_footer {
          opacity: 1;
        }

        .menu_footer a {
          color: var(--text-color);
          margin: 0 10px;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .menu_footer a:hover {
          color: #60a5fa;
          transform: translateY(-3px);
        }

        .copyright {
          margin-top: 10px;
          opacity: 0.4;
          font-size: 0.8rem;
        }

        /* Mobile */
        @media (max-width: 576px) {
          .site__header {
            top: 5px;
            padding: 0.5rem 0.5rem;
          }
          .nav_ac {
            font-size: 1rem;
            height: 40px;
            padding: 5px 10px;
          }
          .menu__button svg {
            width: 1.5em;
            height: 1.5em;
          }
          .menu__wrapper {
            padding: 60px 0 80px 0;
          }
          .the_menu .menu_item > a {
            font-size: 1.5rem;
            padding: 6px 15px;
          }
          .the_menu .menu_item > a svg {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Headermain;