import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class Experience2 extends Component {
  render() {
    return (
      <Grid relaxed columns padded>
        <Grid.Column width={5}>
          {this.props.startYear}-{this.props.endYear}
          <br />
          {this.props.location}
        </Grid.Column>

        <Grid.Column width={11}>
          <h2 style={{ marginTop: "0px" }}>{this.props.Employer}</h2>
          <h5>{this.props.Position}</h5>
          <ul>
            <li>{this.props.Description1}</li>
            <li>{this.props.Description2}</li>
          </ul>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Experience2;
