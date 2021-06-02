import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import FadeIn from "react-fade-in";
import ResIcon from "./images/responsive-icon1.png";
import CakeDemo from "./images/cake-demo.gif";
import BlogDemo from "./images/blog-demo.gif";
import PortfolioDemo from "./images/portfolio-demo.gif";
import StonkyDemo from "./images/stonky-demo.gif";

class Projects extends Component {
  render() {
    return (
      <div className="projects-holder">
        <div className="project-title-page">
          <div className="project-desc">
            <FadeIn>
              <h1>Projects</h1>
              <p>
                I try to make all of my projects responsive. Designing first for
                mobile, then scaling up. Check out some of the things I've
                worked on below.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <img
            className="res-icon"
              src={ResIcon}
             
            />
          </FadeIn>
        </div>
        <div className="first-project">
          
          <div className="first-project-desc">
            <img
              className="cake-demo"
              src={StonkyDemo}
            />
          </div>
          <div className="first-proj-text">
            <h1>Stonky</h1>
            <p className="cakes-text">
              This is a website I built to track the closing price of AMC Stock.  The site pulls data from 
              an API that gives both the closing price and date, and plugs it into that graph.  The user can then drag over the
               graph to zoom and get a better look at the data.  All of the closing prices are also listed below, with an 
               equation that tells you the percentage of that days gain or loss. If it is a gain, the message is green, as well as the "$"
               on top.  If it is a loss, the message and "$" are red.
            </p>
            <div className="links">
            <a
              href="https://stonky.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button colored>Live Demo</Button>
            </a>
            <a
              href="https://github.com/Maxclayton/stonky"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button colored>View Repository</Button>
            </a>
            </div>
          </div>
          
        </div>
                {/* Second Project */}
        <div className="second-project-page">
          <div className="second-proj-text">
            <h1>Sydni's Cakes</h1>
            <p>
            This is a website for a local baker. The idea of the site is to
              show off different cakes that the baker has made, as well as let
              the user place an order. When the user gets to the "Order Now"
              Page, there is a text box asking them for their first and last
              name, email address, and a text box. The idea is that the user
              will describe what kind of cake they want, and the baker will get
              that in their email, and be able to respond. It even error catches
              in case the user doesn't submit an actual email address.            </p>
              <a
              href="https://maxclayton.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button colored>Live Demo</Button>
            </a>
            <a
              href="https://github.com/Maxclayton/cakes"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button colored>View Repository</Button>
            </a>
            
          </div>
        
          <div className="second-proj-demo">
          <img
              className="cake-demo"
              src={CakeDemo}
            />
          </div>
        </div>
        {/* third project page */}
        <div className="third-project-page">
          <div className="third-project-desc">
            <img
            className="demo-demo"
              src={BlogDemo}
            />
          </div>
          <div className="third-proj-text">
            <h1>Demo Site</h1>
            <p>
            For this, I wanted to practice layouts as well as using the particle background.  The site does not do anything at the moment, but it does look pretty sweet.
            </p>
     
            <a
            href="https://600f4dc13976f01b680ba3ec--romantic-easley-755782.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button colored>Live Demo</Button>
          </a>
          <a
            href="https://github.com/Maxclayton/practice-blog"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button colored>View Repository</Button>
          </a>
            
          </div>
        </div>
        {/* third project page */}
        <div className="fourth-project-page">
          <div className="second-proj-text">
            <h1>Portfolio</h1>
            <p>
            This portfolio site that you are currently on has lot of different parts to it as well.  Each page uses a different React library to show different things I am capable of.
            </p>
            <a
              href="https://github.com/Maxclayton/maxclayton.github.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button colored>View Repository</Button>
            </a>
            
          </div>
        
          <div className="second-proj-demo">
          <img
          className="portdemo"
            src={PortfolioDemo}

          />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
