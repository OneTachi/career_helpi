import React, { useState } from "react";
import "./assets/css/App.css";
import { Navbar } from "./Navbar";
import { Page, PageProps } from "./interfaces/page";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";

function App() {
  const [page, setPage] = useState<Page>("home");

  return LoadPage({ page, setPage });
}

function LoadPage({ page, setPage }: PageProps): JSX.Element {
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

  return <div>ERROR</div>;
}

export default App;
