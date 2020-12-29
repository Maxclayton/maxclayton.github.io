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
                React Project #1
              </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has b{" "}
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share"></IconButton>
              </CardMenu>
            </FadeIn>
          </Card>
          {/*Project 2*/}
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
                React Project #2
              </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has b{" "}
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share"></IconButton>
              </CardMenu>
            </FadeIn>
          </Card>
          {/*Project 3*/}
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
                React Project #3
              </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has b{" "}
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share"></IconButton>
              </CardMenu>
            </FadeIn>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
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
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has b{" "}
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share"></IconButton>
            </CardMenu>
            </FadeIn>
          </Card>
          {/*Project 2*/}
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
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has b{" "}
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share"></IconButton>
            </CardMenu>
            </FadeIn>
          </Card>
          {/*Project 3*/}
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
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has b{" "}
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share"></IconButton>
            </CardMenu>
            </FadeIn>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
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
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has b{" "}
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share"></IconButton>
            </CardMenu>
            </FadeIn>
          </Card>
          {/*Project 2*/}
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
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has b{" "}
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share"></IconButton>
            </CardMenu>
            </FadeIn>
          </Card>
          {/*Project 3*/}
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
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has b{" "}
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share"></IconButton>
            </CardMenu>
            </FadeIn>
          </Card>
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
          <Tab>Python</Tab>
          <Tab>Design</Tab>
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
