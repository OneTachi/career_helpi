import React, { useState } from "react";
import "./assets/App.css";
import { Navbar } from "./Navbar";
import { Page } from "./interfaces/page";
import logo from "./logo.svg";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";

function App() {
  const [page, setpage] = useState<Page>("home");
  return (
    <>
      <Navbar page={page} setPage={setpage}></Navbar>
      <Homepage page={page} setPage={setpage}></Homepage>
      <Footer page={page} setPage={setpage}></Footer>
    </>
  );
}

export default App;
