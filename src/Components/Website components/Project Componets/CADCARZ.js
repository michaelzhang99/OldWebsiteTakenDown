import React from "react";
import { Image } from "semantic-ui-react";
import Carousel from "nuka-carousel";
import CAD0 from "../../Photos/ICADPHOTOS/WholeCar.PNG";
import CAD00 from "../../Photos/ICADPHOTOS/WholeCar2.PNG";
import CAD000 from "../../Photos/ICADPHOTOS/WholeCar3.PNG";
import DSHEET from "../../Photos/ICADPHOTOS/DSHEET.png";
import ICAD1 from "../../Photos/ICADPHOTOS/ICAD1.PNG";
import ICAD2 from "../../Photos/ICADPHOTOS/ICAD2.PNG";
import ICAD3 from "../../Photos/ICADPHOTOS/ICAD3.PNG";
import ICAD4 from "../../Photos/ICADPHOTOS/ICAD4.PNG";
import ICAD5 from "../../Photos/ICADPHOTOS/ICAD5.PNG";
import ICAD6 from "../../Photos/ICADPHOTOS/ICAD6.PNG";
import ICAD7 from "../../Photos/ICADPHOTOS/ICAD7.PNG";
import ICAD8 from "../../Photos/ICADPHOTOS/ICAD8.PNG";
import ICAD9 from "../../Photos/ICADPHOTOS/ICAD9.PNG";
import ICAD10 from "../../Photos/ICADPHOTOS/ICAD10.PNG";
import ICAD11 from "../../Photos/ICADPHOTOS/ICAD11.PNG";
import ICAD12BOT from "../../Photos/ICADPHOTOS/ICAD12BOT.PNG";
import ICAD12TOP from "../../Photos/ICADPHOTOS/ICAD12TOP.PNG";
import ICAD12M from "../../Photos/ICADPHOTOS/ICAD12M.PNG";
import ICAD4M from "../../Photos/ICADPHOTOS/ICAD4M.PNG";
import ICAD5M from "../../Photos/ICADPHOTOS/ICAD5M.PNG";
import ICAD6M from "../../Photos/ICADPHOTOS/ICAD6M.PNG";
import ICAD7M from "../../Photos/ICADPHOTOS/ICAD7M.PNG";
import ICAD8M from "../../Photos/ICADPHOTOS/ICAD8M.PNG";
import ICAD9M from "../../Photos/ICADPHOTOS/ICAD9M.PNG";
import ICAD10M from "../../Photos/ICADPHOTOS/ICAD10M.PNG";

function CADCARZ() {
  return (
    <div className="CADCARZ" id="CADCARZ">
      <Image fluid src={CAD0} />
      <div
        style={{
          position: "absolute",
          top: 15000,
          right: 350,
          fontSize: "70px",
          fontFamily: "Merriweather, serif",
          color: "white",
        }}
      >
        Reverse Engineering
      </div>
      <div
        style={{
          position: "absolute",
          top: 15100,
          right: 290,
          fontSize: "70px",
          fontFamily: "Merriweather, serif",
          color: "white",
        }}
      >
        A Toy Eraser Sweeper Car
      </div>
      <div style={{ position: "absolute", top: 15800 }}>
        <div style={{ fontSize: "75px", color: "white", paddingLeft: "2%" }}>
          Background
        </div>
        <p
          style={{
            fontSize: "20px",
            color: "white",
            paddingTop: "5%",
            paddingLeft: "2%",
          }}
        >
          This reverse engineering project invesitageted the inner components of
          how a toy car is made and uncovered small details in production of
          such products. The toy car was disassembled. Each part was recorded on
          Excel, and then measured by an elctronic caliper to nearest
          thousandths. The parts were then replicated in CAD on Autodesk
          Inventor. Once all the parts were digitized, an assembly was done. The
          final product was then 3D printed.
        </p>
        <div
          style={{
            fontSize: "75px",
            color: "white",
            paddingLeft: "2%",
            paddingTop: "5%",
            paddingBottom: "5%",
          }}
        >
          Parts List
        </div>
        <Image src={DSHEET} centered massive />
        <div
          style={{
            fontSize: "75px",
            color: "white",
            paddingLeft: "2%",
            paddingTop: "5%",
            paddingBottom: "5%",
          }}
        >
          CAD Parts
        </div>
        <Carousel>
          <Image src={ICAD1} />
          <Image src={ICAD2} />
          <Image src={ICAD3} />
          <Image src={ICAD4} />
          <Image src={ICAD5} />
          <Image src={ICAD6} />
          <Image src={ICAD7} />
          <Image src={ICAD8} />
          <Image src={ICAD9} />
          <Image src={ICAD10} />
          <Image src={ICAD11} />
          <Image src={ICAD12TOP} />
          <Image src={ICAD12BOT} />
        </Carousel>
        <div
          style={{
            fontSize: "75px",
            color: "white",
            paddingLeft: "2%",
            paddingTop: "5%",
            paddingBottom: "5%",
          }}
        >
          CAD Multiviews
        </div>
        <Carousel>
          <Image src={ICAD12M} />
          <Image src={ICAD4M} />
          <Image src={ICAD5M} />
          <Image src={ICAD6M} />
          <Image src={ICAD7M} />
          <Image src={ICAD8M} />
          <Image src={ICAD9M} />
          <Image src={ICAD10M} />
        </Carousel>
        <div
          style={{
            fontSize: "75px",
            color: "white",
            paddingLeft: "2%",
            paddingTop: "5%",
            paddingBottom: "5%",
          }}
        >
          Assembly
        </div>
        <Carousel>
          <Image src={CAD00} />
          <Image src={CAD0} />
          <Image src={CAD000} />
        </Carousel>
      </div>
    </div>
  );
}

export default CADCARZ;
