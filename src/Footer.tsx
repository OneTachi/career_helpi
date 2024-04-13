import "./assets/css/Footer.css";
import { PageProps } from "./interfaces/page";
import GithubLogo from "./assets/images/github-mark-white.png";
import { Col, Container, Row } from "react-bootstrap";

export function Footer({ page, setPage }: PageProps): JSX.Element {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <a
              href="https://github.com/OneTachi/career_helpi"
              className="item left"
            >
              <img src={GithubLogo} alt="Github" className="github logo" />
            </a>
          </Col>
          <Col className="item right">
            <h3 style={{ textDecorationLine: "underline" }}>Created By</h3>
            <p>Siddharth Lokula | Justin Burger | Christopher Rasquin</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
