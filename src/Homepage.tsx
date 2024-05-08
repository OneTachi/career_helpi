import React from "react";
import { PageProps } from "./interfaces/page";
import { Button } from "react-bootstrap";
import "./assets/css/Homepage.css";

export function Homepage({ page, setPage }: PageProps): JSX.Element {
  return (
    <div className="background">
      <link href="https://fonts.cdnfonts.com/css/spacetype" rel="stylesheet"></link>
      <style>
      @import url('https://fonts.cdnfonts.com/css/spacetype');
      </style>
      
      <div className="heading">8-Legged Career Quest</div>

      <div>
        <Button 
        className="basic-button" 
        style={{fontFamily:"SpaceType, sans-serif"}} 
        onClick={() => setPage("basic")}
        >
          Basic Questions
        </Button>
        <br />
        <p className="basic-text">
          Our basic quiz is a multiple choice assessment that determines your
          strengths to find what you would be best at. Remember, there are no
          wrong answers. Follow your heart, and you will get the results that
          are best for you!
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
        <br />
        <p className="detailed-text">
          Our complex quiz consists of open response boxes, sliders, and other
          inputs. It allows you to truly unleash your inner creativity and be
          yourself! You can answer questions with anything you want, and do what
          you think is best in each situation. Just trust yourself and do the
          first thing that comes to mind. Most importantly, have fun!
        </p>

        <div className="subheading">Spin Your Web, Catch Your Career</div>


      </div>
    </div>
  );
}

export default Homepage;
