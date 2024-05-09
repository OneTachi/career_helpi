import React from "react";
import { PageProps } from "./interfaces/page";
import { Button } from "react-bootstrap";
import "./assets/css/Homepage.css";
import pixel from "./assets/videos/pixel_rain.gif";

export function Homepage({ page, setPage }: PageProps): JSX.Element {
  return (
    <div className="background">
      <div className="heading">8-Legged Career Quest</div>

      <img src={pixel} alt="rain pouring" className="basic-background" />

      <div>
        <Button 
        className="basic-button" 
        style={{fontFamily:"SpaceType, sans-serif"}} 
        onClick={() => setPage("basic")}
        >
          Basic Questions
        </Button>
        <p className="basic-text">
          Our basic quiz is a multiple choice assessment that determines your
          strengths to find what you would be best at. Remember, there are no
          wrong answers.
          <br />
          Follow your heart, and you will get the results that are best for you!
        </p>
      </div>

      <div className="Break"></div>

      <div>
        <Button
          className={"detailed-button"}
          style={{fontFamily:"SpaceType, sans-serif"}}
          onClick={() => setPage("detailed")}
        >
          Detailed Questions
        </Button>
        <p className="detailed-text">
          Our complex quiz consists of open response boxes, sliders, and other
          inputs. <br />
          It allows you to truly unleash your inner creativity and be yourself!
          You can answer questions with anything you want, and do what you think
          is best in each situation. <br />
          Just trust yourself and do the first thing that comes to mind. Most
          importantly, have fun!
        </p>

        <div className="subheading">Spin Your Web, Catch Your Career</div>
      </div>
    </div>
  );
}

export default Homepage;
