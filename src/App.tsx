import React, { useState } from "react";
import "./assets/css/App.css";
import { Navbar } from "./Navbar";
import { Page, PageProps, PageKeyProps } from "./interfaces/page";
import { KeyProps } from "./interfaces/key";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";
import { Button, Form } from "react-bootstrap";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  // Hook used for page of website. Does NOT handle individual questions in basic/detailed pages.
  const [page, setPage] = useState<Page>("home");

  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return LoadPage({
    page,
    setPage,
    key,
    setKey,
    saveKeyData,
    handleSubmit,
    changeKey,
  });
}

/**
 * Displays appropriate section of the website (page) to the user
 * @param { page, setPage} : PageProps => Page state to pass onto UI Components
 * @returns Page shown to user
 */
function LoadPage({
  page,
  setPage,
  key,
  setKey,
  saveKeyData,
  handleSubmit,
  changeKey,
}: PageKeyProps): JSX.Element {
  // Add JSX of page to corresponding page below.
  switch (page) {
    case "home": {
      return (
        <body>
          <Navbar page={page} setPage={setPage}></Navbar>
          <Homepage page={page} setPage={setPage}></Homepage>
          {Footer({
            page,
            setPage,
            key,
            setKey,
            saveKeyData,
            handleSubmit,
            changeKey,
          })}
        </body>
      );
    }
    case "basic": {
      return (
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
      );
    }
    case "detailed": {
      return <body>Detailed Page Layout</body>;
    }
    case "results": {
      return <body>Results Page Layout</body>;
    }
  }
  // This error should never occur.
  return <div>ERROR</div>;
}

export default App;
