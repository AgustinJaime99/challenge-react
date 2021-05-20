import React from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal";

import { Icon } from "@iconify/react";
import linkedinFill from "@iconify-icons/akar-icons/linkedin-fill";
import githubIcon from "@iconify-icons/entypo-social/github";

const Footer = () => {
  return (
    <Fade bottom>
      <footer className="foot">
        <Container>
          <div className="social-links">
            <a
              className="icon"
              href="https://www.linkedin.com/in/agustin-diego-jaime-4033041b7/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="linkedin"
            >
              <Icon icon={linkedinFill} color="white" />
              <i className={`fa fa-linkedin fa-inverse`} />
            </a>
            <a
              className="icon"
              href="https://github.com/AgustinJaime99"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="github"
            >
              <Icon icon={githubIcon} color="white" />
              <i className={`fa fa-linkedin fa-inverse`} />
            </a>
          </div>
          <hr />
          <p className="footer__text">
            © {new Date().getFullYear()} - Developed by{" "}
            <a
              href="https://github.com/AgustinJaime99"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agustin Diego Jaime
            </a>
          </p>
        </Container>
      </footer>
    </Fade>
  );
};

export default Footer;
