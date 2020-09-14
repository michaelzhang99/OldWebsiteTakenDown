import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class Education extends Component {
  render() {
    return (
      <Grid relaxed columns padded>
        <Grid.Column width={5}>
          {this.props.startYear}-{this.props.endYear}
          <br />
          {this.props.location}
        </Grid.Column>

        <Grid.Column width={11}>
          <h2 style={{ marginTop: "0px" }}>{this.props.uniName}</h2>
          <p>GPA {this.props.GPA}/4.00</p>
          <h3> Notable Coursework </h3>
          <h5>{this.props.courseWork}</h5>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Education;
