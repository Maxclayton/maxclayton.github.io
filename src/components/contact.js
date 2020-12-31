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
              <img
                className={"contact-avatar"}
                src={ProfilePic}
                style={{ height: "250px" }}
              />
              <div className="contact-content">
              <p style={{ width: "80%", paddingTop: "1em" }}>
                blah blah orem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries,
             
              
                
              </p>{" "}</div>
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
              
            </FadeIn>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;



