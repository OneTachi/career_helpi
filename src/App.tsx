import React, { useState } from "react";
import "./assets/css/App.css";
import { Navbar } from "./Navbar";
import { Page } from "./interfaces/page";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";

function App() {
  const [page, setpage] = useState<Page>("home");
  return (
    <body>
      <Navbar page={page} setPage={setpage}></Navbar>
      <Homepage page={page} setPage={setpage}></Homepage>
      <Footer page={page} setPage={setpage}></Footer>
    </body>
  );
}

export default App;
