import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import FadeIn from 'react-fade-in';
import Typewriter from "typewriter-effect";
import profilePic from '../images';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        
        <Grid className="landing-grid">
          <Cell col={12}></Cell>
          <FadeIn>
          <img
            src={profilePic}
            alt="avatar"
            className="avatar-img"
          />
          </FadeIn>
          
          <div className="banner-text">
            <FadeIn>
            <h1 className="typerAnimation">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Max Clayton")
                    .pauseFor(4000)
                    .deleteAll()
                    .typeString("Web De")
                    .typeString("velopment")
                    .pauseFor(2000)
                    .deleteChars(9)
                    .typeString("sign")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("UX/UI")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Max Clayton")
                    .start();
                    
                }}
              />
              
            </h1>
            

            <hr />
                 
            <p>HTML/CSS | Javascript | React | Wordpress | Python | Adobe Creative Cloud</p>
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/max-clayton-528b88194"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="https://github.com/Maxclayton"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* Email*/}
              <a
                href="mailto:maxclayton07@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-envelope-square" aria-hidden="true" />
                
              </a>
              
            </div>
            </FadeIn>
          </div>
          
        </Grid>
        
      </div>
    );
  }
}

export default LandingPage;
