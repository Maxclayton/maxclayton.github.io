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
import Particles from 'react-particles-js';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="everything">
       
          <div className="card-holder">
          {/*Project 1*/}
          <div className="card-1">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <FadeIn>
             
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  backgroundColor: "black",
                }}
              >
                Who Do You Love More? Smaller File Sizes or Higher Quality Images?
              </CardTitle>
              <CardText>
                Here I talk about the difference between smaller file sizes and higher quality images.{" "}
              </CardText>
              <CardActions border>
                <a  
                href="https://maxclayton07.medium.com/the-difference-between-7mb-and-341-kb-cf0021f48067"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Read</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
              </CardMenu>
              
            </FadeIn>
          </Card>
          </div>
          <div className="card-2">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            
            <FadeIn>
              
             {/*Project 2*/}
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  backgroundColor:
                    "white",
                }}
              >
                Creating my Portfolio
              </CardTitle>
              <CardText>
                How I designed and created the Projects page on my Portfolio site.{" "}
              </CardText>
              <CardActions border>
                <a  
                href="https://maxclayton07.medium.com/creating-my-portfolio-189f28cc7d0b"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Read</Button>
                </a>
              </CardActions>
              
            </FadeIn>
          </Card>
          </div>
           {/*Project 3*/}
           <div className="card-3">
           <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <FadeIn>
             
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  backgroundColor: "black"                }}
              >
                Doctors Hate Him for these Three Simple Web Design Tricks
              </CardTitle>
              <CardText>
                Three simple ways to take your digital product to the next level.
                {" "}
              </CardText>
              <CardActions border>
                <a  
                href="https://maxclayton07.medium.com/doctors-hate-him-for-these-three-simple-web-design-tricks-30aeed165eef"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Read</Button>
                </a>
              </CardActions>
              
            </FadeIn>
            
          </Card>
          </div>
          </div>
          <div className="card-holder2">
          <div className="card-4">
           <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <FadeIn>
             
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  backgroundColor: "white"                }}
              >
                HTML and CSS basics
              </CardTitle>
              <CardText>
                What are HTML and CSS, and how you can learn them.
                {" "}
              </CardText>
              <CardActions border>
                <a  
                href="https://maxclayton07.medium.com/nailing-the-basics-of-css-and-html-cd2d7fa5f3f3"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Read</Button>
                </a>
              </CardActions>
              
            </FadeIn>
            
          </Card>
          </div>
          
          <div className="card-5">
           <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <FadeIn>
             
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  backgroundColor: "black"                }}
              >
                Color Me Impressed
              </CardTitle>
              <CardText>
                How important is color in digital products?
                {" "}
              </CardText>
              <CardActions border>
                <a  
                href="https://maxclayton07.medium.com/color-me-impressed-133884ed8bd7"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Read</Button>
                </a>
              </CardActions>
              
            </FadeIn>
            
          </Card>
          </div>
          <div className="card-6">
           <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <FadeIn>
             
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  backgroundColor: "white"                }}
              >
                Believe the Hype (4)
              </CardTitle>
              <CardText>
                My learning process of Hype 4
                {" "}
              </CardText>
              <CardActions border>
                <a  
                href="https://maxclayton07.medium.com/believe-the-hype-4-fd5ff32804ff"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Read</Button>
                </a>
              </CardActions>
              
            </FadeIn>
            
          </Card>
          </div>
        
          {/* Next Project*/}
          </div>
     
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
  

        <Grid>
          <Cell col={12}>
            <h1 className="articles-text">What I've Learned</h1>
            <p className="articles-text1">“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.” – Dr.  Seus</p>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Articles;
