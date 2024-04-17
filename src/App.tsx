import React, { useState } from "react";
import "./assets/css/App.css";
import { Navbar } from "./Navbar";
import { Page, PageProps, PageKeyProps } from "./interfaces/page";
import { KeyProps } from "./interfaces/key";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";

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

  return LoadPage({ page, setPage }, { key, setKey }, saveKeyData);
}

/**
 * Displays appropriate section of the website (page) to the user
 * @param { page, setPage} : PageProps => Page state to pass onto UI Components
 * @returns Page shown to user
 */
function LoadPage(
  { page, setPage }: PageProps,
  { key, setKey }: KeyProps,
  saveKeyData: string
): JSX.Element {
  // Add JSX of page to corresponding page below.
  switch (page) {
    case "home": {
      return (
        <body>
          <Navbar page={page} setPage={setPage}></Navbar>
          <Homepage page={page} setPage={setPage}></Homepage>
          <Footer
            page={page}
            setPage={setPage}
            key={key}
            setKey={setKey}
            saveKeyData={saveKeyData}
          ></Footer>
        </body>
      );
    }
    case "basic": {
      return <body>Basic Page Layout</body>;
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
