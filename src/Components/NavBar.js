import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import Home from "./Website components/Home";
import Resume from "./Website components/Resume";
import Projects from "./Website components/Projects";
import Message from "./Website components/Message";

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  const whichButton = () => {
    if (activeItem == "home") return <Home />;
    else if (activeItem == "resume") return <Resume />;
    else if (activeItem == "projects") return <Projects />;
    else if (activeItem == "message") return <Message />;
  };

  return (
    <>
      <nav>
        <nav className="NavBar"> Home</nav>
      </nav>
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="resume"
            active={activeItem === "resume"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="projects"
            active={activeItem === "projects"}
            onClick={handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="message"
              active={activeItem === "message"}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        {whichButton()}
      </div>
    </>
  );
}

export default NavBar;
