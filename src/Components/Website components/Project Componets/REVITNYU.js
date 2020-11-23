import React from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import floor1 from "../../Photos/floor1.png";
import Floor2 from "../../Photos/Floor2.png";
import Floor3 from "../../Photos/Floor3.png";
import Floor4 from "../../Photos/Floor4.png";
import Floor5 from "../../Photos/Floor5.png";
import Floor121 from "../../Photos/Floor1.5.png";

import SkyDeckView from "../../Photos/images/SkyDeckView.png";
import SkyGarden from "../../Photos/images/SkyGarden.png";
import Classrooms from "../../Photos/images/Classrooms.png";
import Dorm from "../../Photos/images/Dorm.png";
import DormBrightView from "../../Photos/images/DormBrightView.png";
import DormCommonRoom from "../../Photos/images/DormCommonRoom.png";
import Auditorium from "../../Photos/images/Auditorium.png";
import DormView from "../../Photos/images/DormView.png";
import DormSkyView from "../../Photos/images/DormSkyView.png";
import F1BrightView from "../../Photos/images/F1BrightView.png";
import F1Cafeteria from "../../Photos/images/F1Cafeteria.png";
import F1SkyView from "../../Photos/images/F1SkyView.png";
import Floor1View from "../../Photos/images/Floor1View.png";
import Floor121pic from "../../Photos/images/Floor121pic.png";
import SecurityF1 from "../../Photos/images/SecurityF1.png";
import Shower from "../../Photos/images/Shower.png";
import Sideview from "../../Photos/images/Sideview.png";
import SkydeckTopView from "../../Photos/images/SkydeckTopView.png";
import WholeView from "../../Photos/images/WholeView.png";
import Lockeroom from "../../Photos/images/Lockeroom.png";
import TennisView from "../../Photos/images/TennisView.png";
import DormFP from "../../Photos/images/DormFP.png";
import Commission from "../../Photos/images/Commission.pdf";

import { useSpring, animated } from "react-spring";
import ReactPlayer from "react-player";
import Carousel from "nuka-carousel";

function REVITNYU() {
  const props = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });
  const prop2 = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500,
  });

  return (
    <div
      className="REVITNYU"
      id="REVITNYU"
      //   style={{ backgroundImage: "url(" + F1BrightView + ")" }}
    >
      <>
        <Image src={SkyGarden} fluid />

        <animated.div style={props}>
          <div
            style={{
              fontSize: "100px",
              position: "absolute",
              top: 2250,
              left: 800,
              right: 0,
              bottom: 0,
              fontFamily: "Merriweather, serif",
              color: "white",
            }}
          >
            En.Vision
          </div>
        </animated.div>
        <animated.div style={prop2}>
          <div
            style={{
              fontSize: "60px",
              position: "absolute",
              top: 2350,
              left: 900,
              right: 0,
              bottom: 0,
              fontFamily: "Merriweather, serif",
              color: "white",
            }}
          >
            The OCTAN
          </div>
        </animated.div>

        <div
          style={{
            fontSize: "100px",
            paddingTop: "5%",
            fontFamily: "Merriweather, serif",
          }}
        >
          <div style={{ top: 2850, position: "absolute", bottom: 0 }}>
            <div
              style={{
                color: "white",
                paddingLeft: "2%",
              }}
            >
              NYU RENOVATION
            </div>

            <p
              style={{
                paddingTop: "5%",
                marginLeft: "2%",
                marginRight: "2%",
                fontSize: "20px",
                color: "white",
                paddingLeft: "2%",
              }}
            >
              The NYU Renovation project was designed to model the shape of a
              tree in the shape of a octaagon to representthe theme of
              conservation, clyclical motifs of recylce, reusability and clean
              energy. The project satisfys all categories of LEED(Location and
              transportation,Materials and Resources, Water efficiency, Energy
              and atmosphere, Sustainable sites, Indoor environmental quality
              ,Innovation,Regional priority credits), is equipped with a green
              rooftop garden, cafeteria, tennis courts, classrooms, dormitories,
              common rooms, and green technolgies such as the use of groundwater
              and solar electric windows.
            </p>

            <div
              style={{
                fontSize: "75px",
                paddingTop: "5%",
                marginLeft: "2%",
                fontFamily: "Merriweather, serif",
                color: "white",
                paddingLeft: "2%",
              }}
            >
              Video Walkthrough
            </div>

            <div style={{ paddingTop: "10%", paddingBottom: "5%" }}>
              <Carousel style={{ marginRight: "2%" }}>
                <ReactPlayer
                  className="VideoIndex"
                  url="https://www.youtube.com/watch?v=ChyeuPsAyiE"
                />
                <ReactPlayer
                  className="VideoIndex"
                  url="https://www.youtube.com/watch?v=h7ozdfttHT4"
                />
                <ReactPlayer
                  className="VideoIndex"
                  url="https://www.youtube.com/watch?v=Ah_ui22LEpI"
                />
                <ReactPlayer
                  className="VideoIndex"
                  url="https://www.youtube.com/watch?v=uq-d4yQyuUo"
                />
                <ReactPlayer
                  className="VideoIndex"
                  url="https://www.youtube.com/watch?v=mqDtU-EGkm8"
                />
                <ReactPlayer
                  className="VideoIndex"
                  url="https://www.youtube.com/watch?v=EQC9B4010js"
                />
              </Carousel>
            </div>

            <div
              style={{
                fontSize: "75px",
                paddingTop: "5%",
                marginLeft: "2%",
                fontFamily: "Merriweather, serif",
                color: "white",
                paddingLeft: "2%",
              }}
            >
              Realistic Renderings
            </div>

            <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
              <Carousel>
                <img className="ImgResize" src={WholeView} alt="WholeView" />
                <img
                  className="ImgResize"
                  src={SkyDeckView}
                  alt="SkyDeckView"
                />
                <img className="ImgResize" src={SkyGarden} alt="SkyGarden" />
                <img className="ImgResize" src={Classrooms} alt="Classrooms" />
                <img className="ImgResize" src={Dorm} alt="Dorm" />
                <img
                  className="ImgResize"
                  src={DormBrightView}
                  alt="DormBrightView"
                />
                <img
                  className="ImgResize"
                  src={DormCommonRoom}
                  alt="DormCommonRoom"
                />
                <img className="ImgResize" src={Auditorium} alt="Auditorium" />
                <img className="ImgResize" src={DormView} alt="DormView" />
                <img
                  className="ImgResize"
                  src={DormSkyView}
                  alt="DormSkyView"
                />
                <img
                  className="ImgResize"
                  src={F1BrightView}
                  alt="F1BrightView"
                />
                <img
                  className="ImgResize"
                  src={F1Cafeteria}
                  alt="F1Cafeteria"
                />
                <img className="ImgResize" src={F1SkyView} alt="F1SkyView" />
                <img className="ImgResize" src={Floor1View} alt="Floor1View" />
                <img
                  className="ImgResize"
                  src={Floor121pic}
                  alt="Floor121pic"
                />
                <img className="ImgResize" src={SecurityF1} alt="SecurityF1" />
                <img className="ImgResize" src={Shower} alt="Shower" />
                <img className="ImgResize" src={Sideview} alt="Sideview" />
                <img
                  className="ImgResize"
                  src={SkydeckTopView}
                  alt="SkydeckTopView"
                />
                <img className="ImgResize" src={Lockeroom} alt="Lockeroom" />
                <img className="ImgResize" src={TennisView} alt="TennisView" />
              </Carousel>
            </div>
            <div>
              <div
                style={{
                  fontSize: "75px",
                  paddingTop: "5%",
                  marginLeft: "2%",
                  fontFamily: "Merriweather, serif",
                  color: "white",
                  paddingLeft: "2%",
                }}
              >
                Floorplan
              </div>
              <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                <Carousel>
                  <Image src={floor1} />
                  <Image src={Floor2} />
                  <Image src={Floor3} />
                  <Image src={Floor4} />
                  <Image src={Floor5} />
                  <Image src={Floor121} />
                  <Image src={DormFP} />
                </Carousel>
              </div>
              {/* <Button>
                <a href={Commission} download="Commission.pdf">
                  For More Information!
                </a>
              </Button> */}

              <Button
                inverted
                color="violet"
                size="massive"
                animated
                style={{ marginLeft: "27%", color: "#00DBFF" }}
              >
                <Button.Content visible>
                  Check out the Project Commission For More Information!
                </Button.Content>
                <a
                  style={{ color: "white" }}
                  href={Commission}
                  download="Commission.pdf"
                >
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
          </div>
        </div>
      </>
    </div>
  );
}

export default REVITNYU;

/* <Grid>
<Grid.Row>
  <Image.Group
    size="large"
    centered
    style={{
      paddingTop: "5%",
      marginLeft: "2%",
    }}
  >
    <Image className="ImgSpace" src={floor1} />
    <Image className="ImgSpace" src={Floor2} />
    <Image className="ImgSpace" src={Floor3} />
    <Image className="ImgSpace" src={Floor4} />
    <Image className="ImgSpace" src={Floor5} />
    <Image className="ImgSpace" src={Floor121} />
  </Image.Group>
</Grid.Row>
</Grid> */
