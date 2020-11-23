import React from "react";
import { Image } from "semantic-ui-react";
import CAD100 from "../../Photos/CADPHOTOS/CAD100.PNG";
import CAD1 from "../../Photos/CADPHOTOS/CAD1.PNG";
import CAD2 from "../../Photos/CADPHOTOS/CAD2.PNG";
import CAD3 from "../../Photos/CADPHOTOS/CAD3.PNG";
import CAD4 from "../../Photos/CADPHOTOS/CAD4.PNG";
import CAD5 from "../../Photos/CADPHOTOS/CAD5.PNG";
import CAD7 from "../../Photos/CADPHOTOS/CAD7.PNG";
import CAD8 from "../../Photos/CADPHOTOS/CAD8.PNG";
import CAD9 from "../../Photos/CADPHOTOS/CAD8.PNG";
import CADF1 from "../../Photos/CADPHOTOS/CADF1.PNG";
import CADF2 from "../../Photos/CADPHOTOS/CADF2.PNG";
import CADF3 from "../../Photos/CADPHOTOS/CADF3.PNG";
import CADF4 from "../../Photos/CADPHOTOS/CADF4.PNG";
import CADF5 from "../../Photos/CADPHOTOS/CADF5.PNG";
import CADF6 from "../../Photos/CADPHOTOS/CADF6.PNG";
import CADF7 from "../../Photos/CADPHOTOS/CADF7.PNG";
import CADF8 from "../../Photos/CADPHOTOS/CADF8.PNG";
import CADF9 from "../../Photos/CADPHOTOS/CADF9.PNG";
import CADF11 from "../../Photos/CADPHOTOS/CADF11.PNG";

import Carousel from "nuka-carousel";

function CADschool() {
  return (
    <div className="CADschool" id="CADschool">
      <Image style={{ opacity: 0.65 }} fluid src={CAD100} />
      <div
        style={{
          position: "absolute",
          top: 11400,
          right: 700,
          fontSize: "100px",
          fontFamily: "Merriweather, serif",
        }}
      >
        SOLIDWORKS
      </div>
      <div
        style={{
          position: "absolute",
          top: 11500,
          right: 600,
          fontSize: "100px",
          fontFamily: "Merriweather, serif",
        }}
      >
        CAD Projects
      </div>
      <div style={{ position: "absolute", Top: 12100 }}>
        <div style={{ paddingTop: "5%", paddingLeft: "2%", fontSize: "75px" }}>
          Background
        </div>
        <p style={{ paddingTop: "5%", paddingLeft: "2%", fontSize: "20px" }}>
          These parts were created for practice from in class assignments and
          fun parts lying around in the shop. Basic techniques such as
          extrusion, fillets, rounds, and holes are demonstrated. More advanced
          techniques are also often used such as, assembly of many parts, the
          use of additional work planes, planes within the objects, rotations.
          The main purpose of these objects are to demostrate competencey of the
          use of SOLIDWORKS
        </p>
        <div style={{ paddingTop: "5%", paddingLeft: "2%", fontSize: "75px" }}>
          Parts
        </div>
        <Carousel style={{ paddingTop: "7%" }}>
          <Image src={CAD1} />
          <Image src={CAD2} />
          <Image src={CAD3} />
          <Image src={CAD4} />
          <Image src={CAD5} />
          <Image src={CAD7} />
          <Image src={CAD8} />
          <Image src={CAD9} />
        </Carousel>

        <div style={{ paddingTop: "5%", paddingLeft: "2%", fontSize: "75px" }}>
          Assembly
        </div>
        <Carousel style={{ paddingTop: "7%" }}>
          <Image src={CADF1} />
          <Image src={CADF11} />
          <Image src={CADF2} />
          <Image src={CADF3} />
          <Image src={CADF4} />
          <Image src={CADF5} />
          <Image src={CADF6} />
          <Image src={CADF7} />
          <Image src={CADF8} />
          <Image src={CADF9} />
        </Carousel>
      </div>
    </div>
  );
}

export default CADschool;
