import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta} from "../../content_option";

export const Portfolio = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Muhammad-Danish-011/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => console.error('Error fetching GitHub repositories:', error));
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {repositories.map((repo, i) => (
            <div key={i} className="po_item">
              <img src={`https://picsum.photos/400/?random=${i}`} alt="" />
              <div className="content">
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url}>View project</a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
