import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import FadeIn from "react-fade-in";
import ProfilePic from "./images/profile.png";
class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={4}>
            <FadeIn>
            <div className="contact-content">
              <img
                className={"contact-avatar"}
                src={ProfilePic}
                style={{ height: "250px" }}
              />
              
              <p style={{ width: "80%", paddingTop: "1em" }}>
                I am a web developer with a passion for design.
                I pride myself in keeping clean and organized code.
                I am eager to learn, and feel confident I can solve any
                problem thrown my way.
             
              
                
              </p>{" "}
              <p style={{fontSize: "25px"}}>Let's chat </p>
              <div className="email-contact">
              <h1 >
                  
              maxclayton07@gmail.com
              </h1>
              </div>
              
                <div className="plane">
              <i
                className="fa fa-paper-plane"
                aria-hidden="true"
                style={{ fontSize: "30px", paddingTop: "20px", padingBottom: "25px", marginLeft: "0px"}}
              />
              </div>
              </div>
           
            </FadeIn>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;



