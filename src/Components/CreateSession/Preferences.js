import React from "react";
import { css, withStyles } from "../../withStyles";

import FlexContainer from "../../Containers/FlexContainer";
import Modal from "../Modal";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import Input from "../../Elements/Input";
import Icon from "../../Elements/Icon";
import Checkbox from "../../Elements/Checkbox";

const Preferences = ({ styles }) => (
  <div {...css(styles.preferences)}>
    <FlexContainer align="start">
      <Heading appearance="primary" size="2">
        Preferences
      </Heading>
      <Paragraph size="normal">
        Here you can set some preferred settings for your session.
      </Paragraph>
      <Paragraph>Don't worry, you can change them before starting!</Paragraph>

      <FlexContainer
        direction="row"
        justify="between"
        style={{ width: "450px", marginBottom: "20px" }}
      >
        <FlexContainer align="start">
          <Paragraph size="sub">Max attendees</Paragraph>
          <Input
            type="number"
            name="maxAttendees"
            icon="fas fa-users"
            iconFillColor="white"
            iconBackground="primary"
          />
        </FlexContainer>

        <FlexContainer align="start">
          <Paragraph size="sub">Warning threshold</Paragraph>
          <Input
            name="threshold"
            icon="fas fa-exclamation-triangle"
            iconFillColor="white"
            iconBackground="primary"
          />
        </FlexContainer>
      </FlexContainer>

      <FlexContainer
        direction="row"
        justify="between"
        style={{ width: "450px", marginBottom: "20px" }}
      >
        <FlexContainer justify="around" align="start">
          <Paragraph size="sub">Engagement description</Paragraph>
          <label
            htmlFor="descriptionPositive"
            style={{ color: "#FFF", marginBottom: "5px" }}
          >
            Positive
          </label>
          <Input
            name="descriptionPositive"
            placeholder="Ex. Are you able to follow..?"
            style={{ marginLeft: "0px", marginTop: "0px", width: "200px" }}
          />
          <label
            htmlFor="descriptionNegative"
            style={{ color: "#FFF", marginBottom: "5px", marginTop: "5px" }}
          >
            Negative
          </label>
          <Input
            name="descriptionNegative"
            placeholder="Ex. Are you not able to follow..?"
            style={{ marginLeft: "0px", marginTop: "5px", width: "200px" }}
          />
        </FlexContainer>

        <FlexContainer align="start">
          <Paragraph size="sub">Lobby message</Paragraph>
          <Input
            name="message"
            placeholder="Ex. Welcome to my lecture!"
            style={{ marginLeft: "0px", marginTop: "0px", width: "200px" }}
          />
        </FlexContainer>
      </FlexContainer>

      <FlexContainer
        direction="row"
        justify="between"
        style={{ marginBottom: "20px", width: "450px", paddingRight: "18px" }}
      >
        <FlexContainer direction="row">
          <Checkbox name="comments" />
          <Paragraph>Allow comments</Paragraph>
        </FlexContainer>

        <FlexContainer direction="row">
          <Checkbox name="isAverage" />
          <Paragraph>Show average as percentage</Paragraph>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  </div>
);

export default withStyles(({}) => {
  return {
    preferences: {
      ":nth-child(1n) div div input": {
        margin: "0px"
      },
      ":nth-child(1n) div div svg": {
        verticalAlign: "0px"
      },
      ":nth-child(1n) div div span": {
        padding: "13.5px"
      }
    }
  };
})(Preferences);
