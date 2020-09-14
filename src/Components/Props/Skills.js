import React from "react";
import { Grid, Progress } from "semantic-ui-react";

function Skills({ percent, Skills }) {
  return (
    <Grid columns={2}>
      <Grid.Column width={3}>
        <div>{Skills}</div>
      </Grid.Column>
      <Grid.Column width={13}>
        <Progress
          style={{
            margin: "auto",
            width: "70%",
          }}
          percent={percent}
          progress
          inverted
          color="violet"
        />
      </Grid.Column>
    </Grid>
  );
}

export default Skills;
