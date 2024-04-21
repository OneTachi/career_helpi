import "./assets/css/Footer.css";
import { PageProps, PageKeyProps } from "./interfaces/page";
import { KeyProps } from "./interfaces/key";
import GithubLogo from "./assets/images/github-mark-white.png";
import { Button, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

export function Footer({
  page,
  setPage,
  key,
  setKey,
  saveKeyData,
  handleSubmit,
  changeKey,
  keyForm,
}: PageKeyProps): JSX.Element {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <a
              className="item left"
              href="https://github.com/OneTachi/career_helpi"
            >
              <img src={GithubLogo} alt="Github" className="github logo" />
            </a>
          </Col>
          <Col>
            <span className="item right">
              <h3 style={{ textDecorationLine: "underline" }}>Created By</h3>
              <p>Siddharth Lokula | Justin Burger | Christopher Rasquin</p>
            </span>
          </Col>
          <Col>{keyForm}</Col>
        </Row>
      </Container>
    </footer>
  );
}
