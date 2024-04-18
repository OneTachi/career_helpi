import React, { useState } from "react";
import "./assets/css/App.css";
import { Navbar } from "./Navbar";
import { Page, PageProps } from "./interfaces/page";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";
import {Background} from "./Background";

function App() {
  // Hook used for page of website. Does NOT handle individual questions in basic/detailed pages.
  const [page, setPage] = useState<Page>("home");

  return LoadPage({ page, setPage });
}

/**
 * Displays appropriate section of the website (page) to the user
 * @param { page, setPage} : PageProps => Page state to pass onto UI Components
 * @returns Page shown to user
 */
function LoadPage({ page, setPage }: PageProps): JSX.Element {
  // Add JSX of page to corresponding page below.
  switch (page) {
    case "home": {
      return (
        <body>
          <Navbar page={page} setPage={setPage}></Navbar>
          <Homepage page={page} setPage={setPage}></Homepage>
          <Footer page={page} setPage={setPage}></Footer>
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
