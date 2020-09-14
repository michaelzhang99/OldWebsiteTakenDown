import React from "react";
import { Grid, Image, List } from "semantic-ui-react";
import MikeZ from "../MikeZ.png";

function Contact() {
  return (
    <Grid style={{ width: "90%" }}>
      <Grid.Row columns={2} className="contactGridColor" padded>
        <Grid.Column>
          <h1 className="h1Contact">Michael Zhang</h1>
          <Image
            style={{ marginTop: "10px", height: "200px" }}
            src={MikeZ}
            rounded
            centered
          />
          <p className="pContact">
            Hello! I hope you are doing well. If you have any questions or want
            to contact me further, please message me, email me. I will be happy
            to answer, and I'll do my best to get back to you.
          </p>
        </Grid.Column>
        <Grid.Column>
          <h1
            style={{
              fontSize: "40px",
              fontFamily: "anton, sans-serif",
              paddingTop: ".6em",
              textAlign: "center",
            }}
          >
            Contact me
          </h1>
          <hr
            style={{
              textAlign: "center",
              alignItems: "center",
              marginBottom: "15px",
            }}
          />
          <div className="contact-list">
            <List style={{ padding: "auto", marginLeft: "12%" }}>
              <List.Item style={{ marginTop: "40px", marginBottom: "15px" }}>
                <List.Icon
                  style={{ fontSize: "50px", textAlign: "center" }}
                  name="phone square"
                />
                <List.Content
                  style={{
                    paddingLeft: ".2em",
                    fontSize: "35px",
                    fontFamily: "Anton",
                  }}
                >
                  (650) 304-5380
                </List.Content>
              </List.Item>

              <List.Item style={{ marginBottom: "15px" }}>
                <List.Icon
                  style={{ fontSize: "50px", textAlign: "center" }}
                  name="marker"
                />
                <List.Content
                  style={{
                    paddingLeft: ".2em",
                    fontSize: "35px",
                    fontFamily: "Anton",
                  }}
                >
                  Palo Alto, CA
                </List.Content>
              </List.Item>

              <List.Item style={{ marginBottom: "15px" }}>
                <List.Icon
                  style={{ fontSize: "50px", textAlign: "center" }}
                  name="mail"
                />
                <List.Content
                  style={{
                    paddingLeft: ".2em",
                    fontSize: "35px",
                    fontFamily: "Anton",
                  }}
                >
                  <a href="mailto:michael.zhang@nyu.edu">
                    michael.zhang@nyu.edu
                  </a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon
                  style={{ fontSize: "50px", textAlign: "center" }}
                  name="facebook messenger"
                />
                <List.Content
                  style={{
                    paddingLeft: ".2em",
                    fontSize: "35px",
                    fontFamily: "Anton",
                  }}
                >
                  <a
                    href="https://www.messenger.com/t/michaelzhang1219"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My messenger
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Contact;
