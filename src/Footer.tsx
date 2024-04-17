import "./assets/css/Footer.css";
import { PageProps } from "./interfaces/page";
import { KeyProps } from "./interfaces/key";
import GithubLogo from "./assets/images/github-mark-white.png";
import { Button, Form } from "react-bootstrap";

export function Footer(
  { page, setPage }: PageProps,
  { key, setKey }: KeyProps,
  saveKeyData: string
): JSX.Element {
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <footer className="footer">
      <a className="item left" href="https://github.com/OneTachi/career_helpi">
        <img src={GithubLogo} alt="Github" className="github logo" />
      </a>
      <span className="item right">
        <h3 style={{ textDecorationLine: "underline" }}>Created By</h3>
        <p>Siddharth Lokula | Justin Burger | Christopher Rasquin</p>
      </span>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Insert API Key Here"
          onChange={changeKey}
        ></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </footer>
  );
}
