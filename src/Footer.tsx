import "./assets/css/Footer.css";
import { PageKeyProps } from "./interfaces/page";
import GithubLogo from "./assets/images/github-mark-white.png";
import { Button, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

export function Footer({
  page,
  updatePage: setPage,
  key,
  setKey,
  handleSubmit,
}: PageKeyProps): JSX.Element {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <footer className="footer" style={{fontFamily:"SpaceType, sans-serif"}}>
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
              <h3 style={{ textDecorationLine: "underline"}}>Created By</h3>
              <p>Siddharth Lokula | Justin Burger | Christopher Rasquin</p>
            </span>
          </Col>
          <Col>
            <Form>
              <Form.Control
                type="password"
                placeholder="Insert API Key Here"
                onChange={changeKey}
                value={key}
              ></Form.Control>
              <Button className="Submit-Button" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
