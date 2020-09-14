import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class Projects extends Component {
  render() {
    return (
      <Grid relaxed columns padded>
        <Grid.Column width={5}>
          {this.props.startYear}-{this.props.endYear}
          <br />
          {this.props.location}
        </Grid.Column>

        <Grid.Column width={11}>
          <h2 style={{ marginTop: "0px" }}>{this.props.Project}</h2>
          <p>{this.props.Description}</p>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Projects;
