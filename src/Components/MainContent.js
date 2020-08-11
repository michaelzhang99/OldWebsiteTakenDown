import React from "react";
import Profiles from "./Profiles";
import MikeZ from "./MikeZ.png";

function MainContent() {
  return (
    <>
      <h2 className="MainContent">
        Hello My name is michael and I am currently studying at NYU. I enjoy
        playins sports and talking with friends
      </h2>

      <Profiles
        img={MikeZ}
        name="Michael Zhang"
        contact="beakydabird@gmail.com"
      />
    </>
  );
}

export default MainContent;
