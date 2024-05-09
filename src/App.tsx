import React, { useState } from "react";
import "./assets/css/App.css";
import { Navbar } from "./Navbar";
import { Page, PageKeyProps } from "./interfaces/page";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";
import { initializeAttributes } from "./Api";
import { Background } from "./Background";

function App() {
  // Hook used for page of website. Does NOT handle individual questions in basic/detailed pages.
  const [page, setPage] = useState<Page>("home");

  //local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
  let keyData = "";
  const saveKeyData = "MYKEY";
  const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
  if (prevKey !== null) {
    keyData = JSON.parse(prevKey);
  }

  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  initializeAttributes();

  return LoadPage(
    {
      page,
      setPage,
      key,
      setKey,
      handleSubmit,
    },
    keyData
  );
}

/**
 * Displays appropriate section of the website (page) to the user
 * @param { page, setPage, key, setKey, handleSubmit } : PageProps => Page state to pass onto UI Components
 * @returns Page shown to user
 */
function LoadPage(
  { page, setPage, key, setKey, handleSubmit }: PageKeyProps,
  localKey: string
): JSX.Element {
  // Add JSX of page to corresponding page below.
  switch (page) {
    case "home": {
      return (
        <div>
          <Navbar page={page} setPage={setPage}></Navbar>
          <Homepage page={page} setPage={setPage}></Homepage>
          {Footer({
            page,
            setPage,
            key,
            setKey,
            handleSubmit,
          })}
        </div>
      );
    }
    case "basic": {
      return (
        <div>
          <Navbar page={page} setPage={setPage}></Navbar>
          <Background quizType={"basic"}></Background>
          {Footer({
              page,
              setPage,
              key,
              setKey,
              handleSubmit,
            })}
        </div>
      );
    }
    case "detailed": {
      return (
        <div>
          <Navbar page={page} setPage={setPage}></Navbar>
          <Background quizType={"detailed"}></Background>
          {Footer({
            page,
            setPage,
            key,
            setKey,
            handleSubmit,
          })}
        </div>
      );
    }
    case "results": {
      return <div>Results Page Layout</div>;
    }
  }
  // This error should never occur.
  return <div>ERROR</div>;
}

export default App;
