import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import Home from "./Website components/Home";
import Resume from "./Website components/Resume";
import Projects from "./Website components/Projects";
import Contact from "./Website components/Contact";

function NavBar() {
  const [Click, setClick] = useState(false);
  const handleClick = () => setClick(!Click);
  return (
    <Router>
      <Segment inverted>
        <Menu inverted size="huge">
          <Menu.Item>
            <div className="menu-icon" onClick={handleClick}>
              <i className={Click ? "fa fa-times" : "fa fa-bars"} />
            </div>
          </Menu.Item>
          <Menu.Item name="home" as={NavLink} exact to="/" />

          <Menu.Item name="resume" as={NavLink} to="/resume" />
          <Menu.Item name="projects" as={NavLink} to="/projects" />
          <Menu.Menu position="right">
            <Menu.Item name="Contact" as={NavLink} to="/Contact" />
          </Menu.Menu>
        </Menu>
      </Segment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default NavBar;
