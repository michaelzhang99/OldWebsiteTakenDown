import React from "react";
import { Grid, Image, Button, Icon } from "semantic-ui-react";
import Sanjude1 from "../../Photos/images/Sanjude1.jpg";
import Sanjude2 from "../../Photos/images/Sanjude2.jpg";
import Sanjude3 from "../../Photos/images/Sanjude3.jpg";
import Sanjude4 from "../../Photos/images/Sanjude4.jpg";
import Sanjude5 from "../../Photos/images/Sanjude5.jpg";
import Sanjude6 from "../../Photos/images/Sanjude6.jpg";
import Plants from "../../Photos/images/Plants.xlsx";

import LANDSCAPE1 from "../../Photos/LANDSCAPE1.png";

function Sanjude() {
  return (
    <div className="Sanjude" id="Sanjude">
      <>
        <Image src={Sanjude1} fluid />

        <div
          style={{
            top: 6650,
            position: "absolute",
            bottom: 0,
            color: "white",
            paddingLeft: "10%",
            fontSize: "100px",
            paddingTop: "5%",
            fontFamily: "Merriweather, serif",
          }}
        >
          881 SanJude Landscaping
        </div>

        <div style={{ top: 7400, position: "absolute", bottom: 0 }}>
          <div
            style={{
              color: "white",
              paddingLeft: "2%",
            }}
          >
            <p
              style={{
                paddingTop: "5%",
                marginLeft: "2%",
                marginRight: "2.5%",
                fontSize: "80px",
                color: "black",
                paddingLeft: "2%",
              }}
            >
              Concept
            </p>
            <p
              style={{
                paddingTop: "1%",
                marginLeft: "2%",
                marginRight: "2.5%",
                fontSize: "20px",
                color: "black",
                paddingLeft: "2%",
              }}
            >
              881 San Jude's landscaping combines both athetic and utility from
              California native plants that require less watering, tropical
              plants that showoff a gardens flourish, and exotic species of
              maple. The garden was compiled through the use of Autodesk Revit
              and was carefully designed to have flowering throughout all four
              seasons, a beautiful patio lounge area, tall plants for privacy
              and sound proofing.
            </p>
            <p
              style={{
                paddingTop: "5%",
                marginLeft: "2%",
                marginRight: "2.5%",
                fontSize: "80px",
                color: "black",
                paddingLeft: "2%",
              }}
            >
              Pictures
            </p>
            <Grid centered columns={2} style={{ paddingBottom: "2%" }}>
              <Grid.Column>
                <Button color="black">
                  <Image size="big" src={Sanjude2} />
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button color="black">
                  <Image size="big" src={Sanjude3} />
                </Button>
              </Grid.Column>
            </Grid>

            <Grid style={{ paddingBottom: "2%" }}>
              <Grid.Column style={{ marginLeft: "25%" }}>
                <Button color="black">
                  <Image size="big" src={Sanjude4} />
                </Button>
              </Grid.Column>
            </Grid>

            <Grid centered columns={2} style={{ paddingBottom: "5%" }}>
              <Grid.Column>
                <Button color="black">
                  <Image size="big" src={Sanjude5} />
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button color="black">
                  <Image size="big" src={Sanjude6} />
                </Button>
              </Grid.Column>
            </Grid>
            <p
              style={{
                paddingTop: "1%",
                paddingBottom: "3%",
                marginLeft: "2%",
                marginRight: "2.5%",
                fontSize: "80px",
                color: "black",
                paddingLeft: "2%",
              }}
            >
              Landscape Plan
            </p>
          </div>
          <Image style={{ paddingBottom: "5%" }} src={LANDSCAPE1} fluid />
          <Button
            inverted
            color="light blue"
            size="massive"
            animated
            style={{ marginLeft: "35%", color: "#00DBFF" }}
          >
            <Button.Content visible>
              Check out the specfic plants used!!
            </Button.Content>
            <a style={{ color: "white" }} href={Plants} download="Plants.xlsx">
              <Button.Content hidden>
                <Icon name="arrow right" />
                <Icon name="arrow right" />
                lets goooooo!
                <Icon name="arrow right" />
                <Icon name="arrow right" />
              </Button.Content>
            </a>
          </Button>
        </div>
      </>
    </div>
  );
}

export default Sanjude;
