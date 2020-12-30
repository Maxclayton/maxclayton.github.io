import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import FadeIn from "react-fade-in";
import ProfilePic from "./images/profile.png"

class Resume extends Component {
  render() {
    return (
      <div>
          
        <Grid>
          <Cell col={4}>
              <FadeIn>
       
            <div style={{ textAlign: "center" }}>
              <img
                src={ProfilePic}
                alt="avatar"
                className="avatar-resume"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Max Clayton</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p style={{width: "20em"}}>
              I am currently going to school for my Bachelor's degree in Web Design and Development.
              I am on track to graduate in the Spring of 2022.  {" "}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Email</h5>
            <p>maxclayton07@gmail.com</p>
            <h5>Web</h5>
            <p>maxclayton.github.io</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            </FadeIn>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <FadeIn>
              
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2022}
              schoolName="UVU"
              schoolDescription="I am currently attending Utah Valley University, where I am getting my major in Web Design/Development, and getting a minor in Computer Science.  I started
                            in the fall of 2018 and am on track to finish my bachelor's degree in the Spring of 2022.  "
            />

            <Education
              startYear={2018}
              endYear={"Current Day"}
              schoolName="Udemy"
              schoolDescription="I have complete several Udemy Courses, including The Complete React Developer Course (w/Hooks and Redux), The Web Developer Bootcamp, Python 3: Project-based Python, Algorithms, Data Structures. "
            />
            <hr style={{ bordertop: "3px solid #e22947" }} />
            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Slingshot Sales Representative"
              jobDescription="Took calls to assist customer's in making payments on their accounts and scheduling new services."
            />

            <Experience
              startYear={2020}
              endYear={"Current Day"}
              jobName="Slingshot Technical Support Specialist"
              jobDescription="As a Technical Support Specialist I have many responsabilites.  I help callfloor reps when they are having technical difficulties, I also create and manage forms through
              Wordpress and make Javascript automation scripts to help our team complete tasks quicker."
            />
            <hr style={{ bordertop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="React" progress={90} />
            <Skills skill="HTML/CSS" progress={90} />
            <Skills skill="Wordpress" progress={75} />
            <Skills skill="Python" progress={50} />
            <Skills skill="Adobe Creative Cloud" progress={90} />
            <Skills skill="Sketch" progress={80} />     
                </FadeIn>
                </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
