import React from "react";
import { Grid, Image } from "semantic-ui-react";
import TimeOfDay from "../TimeOfDay";
import MikeZ from "../MikeZ.png";

function Home() {
  return (
    <Grid.Row className="seperator">
      <Grid.Column style={{ marginBottom: "20px" }}>
        <TimeOfDay />
      </Grid.Column>

      <Grid.Column>
        <Image
          style={{ marginBottom: "30px" }}
          src={MikeZ}
          size="medium"
          circular
          centered
        />
      </Grid.Column>

      <Grid.Column className="bannerText">
        <h1>Mechanical Engineer</h1>
        <hr />
        <p>
          Autodesk Inventor | SolidWorks | Fusion360 | Autodesk Revit | React |
          Python
        </p>
        <div className="icons">
          {/* linkedin*/}
          <a
            href="https://www.linkedin.com/in/michael-zhang-a76117184/"
            target="_blank"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          {/* Github*/}

          <a href="http://google.com" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          {/* Gmail*/}

          <a href="mailto:michael.zhang@nyu.edu" target="_blank">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>
        </div>
      </Grid.Column>
    </Grid.Row>
  );
}

export default Home;
