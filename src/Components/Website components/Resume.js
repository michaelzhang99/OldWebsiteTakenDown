import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import MikeZ from "../MikeZ.png";
import Education from "../Props/Education";
import Experience from "../Props/Experience";
import Experience2 from "../Props/Experience2";
import Projects from "../Props/Projects";
import Skills from "../Props/Skills";
class Resume extends Component {
  render() {
    return (
      <>
        <Grid>
          <Grid.Column width={5}>
            <div style={{ textAlign: "center" }}>
              <Image src={MikeZ} size="medium" circular centered />
            </div>
            <div>
              <h1 className="MZ">Michael Zhang</h1>
              <h3 className="position">Mechanical Engineer</h3>
            </div>
            <hr
              style={{
                paddingRight: "40%",
                borderTop: "3px solid #833fb2",
                width: "50%",
              }}
            />
            <p style={{ paddingLeft: "5%" }}>
              An engineer who strives to blend the creativity, beauty, and form
              found in art with the concepts of engineering. Loves exploring
              nature, fishing, visiting meseums and sports such as
              badminton,fishing, volleyball, and basketball.
            </p>
            <hr
              style={{
                paddingRight: "40%",
                borderTop: "3px solid #833fb2",
                width: "50%",
              }}
            />
            <div style={{ paddingLeft: "5%" }}>
              <h4>Address </h4>
              <p>782 Encina Grande dr, Palo Alto, CA 94306</p>
              <h4>Phone</h4>
              <p>650-304-5380</p>
              <h4>Email</h4>
              <p>michael.zhang@nyu.edu</p>
            </div>
            <hr
              style={{
                paddingRight: "40%",
                borderTop: "3px solid #833fb2",
                width: "50%",
              }}
            />
          </Grid.Column>
          <Grid.Column width={11}>
            <cell className="NavBar1">
              <cell>
                <h1 style={{ fontSize: "40px" }}>Education</h1>
                <Education
                  startYear={"September 2019"}
                  endYear={"June 2022"}
                  location={"Brooklyn, New York City"}
                  uniName={"New York University-Tandon"}
                  GPA={3.93}
                  courseWork={
                    "Statics,Physics(electrical, magnetic, kinematics, optics), AutoCAD, Autodesk Inventor, Revit, Fusion360, Material Science, MatLabs, Algebra-Calculus III, Linear Algebra"
                  }
                />
                <hr style={{ borderTop: "3px solid #e2947" }} />
                <h1 style={{ fontSize: "40px" }}>Experience</h1>
                <Experience
                  startYear={"September 2016"}
                  endYear={"August 2018"}
                  location={"Palo Alto, California"}
                  Employer={"Gunn Robotics"}
                  Position={"Business Lead, Mechanic, CAD Team"}
                  Description1={
                    "Transformed Robot maneuverability from unidirectional to 360 degree swerve with swerve drivetrain and gearbox"
                  }
                  Description2={
                    "Received Chairman’s and Woodie Flowers awards for excellence in Business Plan analysis and presentation."
                  }
                  Description3={
                    "Brainstormed and prototyped gear pickup mechanisms in 2017’s Arizona Regional 1st pace robot."
                  }
                />
                <Experience2
                  startYear={"September 2016"}
                  endYear={"July 2018"}
                  location={"Palo Alto, California"}
                  Employer={"Stanford Assistant Researcher"}
                  Position={"Laboratory Intern under Professor Yanmin Yang"}
                  Description1={
                    "Studied in depth BDNF’s effects on a Huntington Diseased brain, and helped increase neural-culture success rate. "
                  }
                  Description2={
                    "Lead and taught 4 international students: Microtubules Stabilization By Tau in AD in Neurodegeneration, DPSE Nanoparticle Cell Toxicity and Medicinal Transport, and Zonal-Bi-Layered Polymer Scaffolding."
                  }
                />
                <hr style={{ borderTop: "3px solid #e2947" }} />
                <h1 style={{ fontSize: "40px" }}>Projects</h1>
                <Projects
                  startYear={"September 2019"}
                  endYear={"Decemeber 2019"}
                  location={"Brooklyn, New York"}
                  Project={"NYU Building Renovation"}
                  Description={
                    "Designed LEED Platinum certified 11 story NYU buildings complete with cafeterias, dorm rooms, tennis gym, rooftop Garden and awarded with the Nick Russo award for the top ten best buildings from 100+ designs."
                  }
                />
                <Projects
                  startYear={"July 2015"}
                  endYear={"Current"}
                  location={"Palo Alto, CA"}
                  Project={"Wood and Metal Work"}
                  Description={
                    "Sold and created handmade pens, bowls, and clocks from wood lathing, constructed and helped frame houses, created screws, bolts, pins, and high tolerance parts on CNC and metal lathe and mill."
                  }
                />
                <Projects
                  startYear={"July 2017"}
                  endYear={"September 2018"}
                  location={"Palo Alto, CA"}
                  Project={"Custom Built Electric Bicycle"}
                  Description={
                    "Researched and learned about basic electricity  AC DC currents, mapped and understood bicycle components mechanisms, interviewed bike technicians and joined forums. Designed and assembled an electrical bicycle from scratch."
                  }
                />
                <hr style={{ borderTop: "3px solid #e2947" }} />
                <h1 style={{ fontSize: "40px" }}>Skills</h1>
                <Skills Skills={"Solid Works"} percent={80} />{" "}
                <Skills Skills={"Autodesk Inventor"} percent={70} />
                <Skills Skills={"Autodesk Revit"} percent={60} />
                <Skills Skills={"Fusion 360"} percent={100} />
                <Skills Skills={"Ract"} percent={40} />
                <Skills Skills={"Python"} percent={30} />
                <Skills Skills={"Matlab"} percent={50} />
                <Skills Skills={"Metal Lathe"} percent={70} />
                <Skills Skills={"Wood Lathe"} percent={60} />
                <Skills Skills={"Indesign"} percent={20} />
              </cell>
            </cell>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Resume;
