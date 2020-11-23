import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";
import REVITPIC from "../Photos/REVITPIC.png";
import LANDSCAPE1 from "../Photos/LANDSCAPE1.png";
import CADCAR from "../Photos/CADCAR.png";
import CADSCHOOL from "../Photos/CADSCHOOL.png";
import MOTHERSDAYJ from "../Photos/MOTHERSDAYJ.jpg";
import BIKE from "../Photos/BIKE.jpg";
import REACT from "../Photos/REACT.png";
// import ROOF from "../Photos/ROOF.png";
import REVITNYU from "./Project Componets/REVITNYU";
import Sanjude from "./Project Componets/Sanjude";
import WelcomeProjects from "./Project Componets/WelcomeProjects";
import CADschool from "./Project Componets/CADschool";
import CADCARZ from "./Project Componets/CADCARZ";
import BIKEZ from "./Project Componets/BIKEZ";
import REACTproj from "./Project Componets/REACTproj";
import Mothersday from "./Project Componets/Mothersday";
import { Link } from "react-scroll";
import ProjectNavbar from "./Project Componets/ProjectsNavbar";

function Projects() {
  return (
    <>
      <div id="Home" />
      <Card.Group style={{ padding: "2em" }} centered>
        <Card>
          <Image
            style={{ margin: "auto", verticalAlign: "middle" }}
            src={REVITPIC}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>NYU Building Renovation</Card.Header>
            <Card.Meta>Autodesk Revit, Fusion360, Microsoft Office</Card.Meta>
            <Card.Description>
              Qualified and Won the Mark Russo Award
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link
              activeClass="active"
              to="REVITNYU"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            >
              <Icon name="info" />
              More Information
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Image
            style={{ height: "233px", verticalAlign: "middle" }}
            src={LANDSCAPE1}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>
              Landscaping Plan for 881 San Jude Street, Palo Alto, CA
            </Card.Header>
            <Card.Meta>Autodesk Revit, Microsoft Excel</Card.Meta>
            <Card.Description>
              Designed and created landscaping plan for 881 San Jude Street for
              contractor.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link
              activeClass="active"
              to="Sanjude"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            >
              <Icon name="info" />
              More Information
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Image
            style={{ margin: "auto", verticalAlign: "middle" }}
            src={CADSCHOOL}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>SOLIDWORKS CAD Parts </Card.Header>
            <Card.Meta>SOLIDWORKS</Card.Meta>
            <Card.Description>
              Practice on SOLIDWORKS parts of medium to high difficulty
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link
              activeClass="active"
              to="CADschool"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Icon name="info" />
              More Information
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Image
            style={{ height: "233px", verticalAlign: "middle" }}
            src={CADCAR}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Reverse Engineering of Toy Sweeper Car</Card.Header>
            <Card.Meta>Autodesk Inventor, Microsoft Excel</Card.Meta>
            <Card.Description>
              Using Callipers Reverse Engineered a toy car.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link
              activeClass="active"
              to="CADCARZ"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Icon name="info" />
              More Information
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Image
            style={{ margin: "auto", verticalAlign: "middle" }}
            src={REACT}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>BUILT REACT WEBSITE</Card.Header>
            <Card.Meta>REACT, Semantic.ui, Gradient.ui, FontAwesome</Card.Meta>
            <Card.Description>self-tuaght react from scratch.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link
              activeClass="active"
              to="REACTproj"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Icon name="info" />
              More Information
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Image
            style={{ margin: "auto", verticalAlign: "middle" }}
            src={BIKE}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Built Electrical Bicycle from Scratch</Card.Header>
            <Card.Meta>
              Microsoft Office, Hand Tools, Online and Local Bike Shop Mentors
            </Card.Meta>
            <Card.Description>
              Designed and Created Electrical Bicycle from scratch, for parents
              commute
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link
              activeClass="active"
              to="BIKEZ"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Icon name="info" />
              More Information
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Image
            style={{ height: "233px", verticalAlign: "middle" }}
            src={MOTHERSDAYJ}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Mother's Day Card </Card.Header>
            <Card.Meta>
              Adobe Illustrator, CorelDraw, Lasercutting(Spectrum)
            </Card.Meta>
            <Card.Description>
              Designed Card, self-taught Corel Draw and Lasercutting basics.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link
              activeClass="active"
              to="Mothersday"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Icon name="info" />
              More Information
            </Link>
          </Card.Content>
        </Card>
      </Card.Group>

      <WelcomeProjects />
      <ProjectNavbar />
      <REVITNYU />
      <Sanjude />
      <CADschool />
      <CADCARZ />
      <REACTproj />
      <BIKEZ />
      <Mothersday />
    </>
  );
}

export default Projects;
