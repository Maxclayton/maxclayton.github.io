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

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <FadeIn>
             
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
                }}
              >
                Portfolio Site
              </CardTitle>
              <CardText>
                This is my portfolio site built in React.  I used React Router and React MDL{" "}
              </CardText>
              <CardActions border>
                <a  
                href="https://github.com/Maxclayton/maxclayton.github.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Github</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share"></IconButton>
              </CardMenu>
              
            </FadeIn>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <FadeIn>
             {/*Project 2*/}
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
                }}
              >
                Practice Site
              </CardTitle>
              <CardText>
                This is a site I built to practice some website design and layout.  The particle background
                is from react-particles-js.{" "}
              </CardText>
              <CardActions border>
                <a  
                href="https://github.com/Maxclayton/practice-blog"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Github</Button>
                </a>
                <a
                href="https://600f4dc13976f01b680ba3ec--romantic-easley-755782.netlify.app/"
                rel="noopener noreferrer"
                target="_blank">
                <Button colored>Demo</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share"></IconButton>
              </CardMenu>
              
            </FadeIn>
          </Card>
          {/*Project 2*/}
          {/*Project 3*/}
          
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
