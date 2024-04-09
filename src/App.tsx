import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import './CareerStartButtons.css';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
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
  return (
    <div className="App">
      <div>Christopher Rasquin</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Siddharth</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Justin Burger
        </a>
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      
      <div className="BasicCareerButton">
      <header>Basic Career Quiz</header>
      <Button className="Basic-Career-Start ">Take Basic Career Quiz</Button>
      </div>
      
      <div className="DetailedCareerButton">
      <header>Detailed Career Quiz</header>
      <Button className="Detailed-Career-Start">Take Detailed Career Quiz</Button>
      </div>
    </div>
  );
}

export default App;
