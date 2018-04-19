import React, { Component } from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import InputWithIcon from "../Elements/InputWithIcon";

class LoginForm extends React.Component {
  constructor({ styles, ...props }) {
    super(props);
    this.state = {
      email: "",
      password: "",
      btnDisabled: false //This can be used for disabling button until email/password is a certain length
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
    //Todo: On submit send both email and password for validation
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <FlexContainer>
          <Heading size="2">Log in as presenter</Heading>
          <form onSubmit={this.handleSubmit}>
            <FlexContainer>
              <FlexContainer align="start" style={{ width: "400px" }}>
                <label style={{ marginBottom: "5px" }} for="email">
                  Email
                </label>
                <InputWithIcon
                  name="email"
                  appearance="primary"
                  icon={<i class="fas fa-check" />}
                  iconPosition="right"
                  iconAppearance="primary"
                  type="text"
                  placeholder="Email..."
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <label
                  for="password"
                  style={{ marginTop: "20px", marginBottom: "5px" }}
                >
                  Password
                </label>
                <InputWithIcon
                  name="password"
                  appearance="primary"
                  icon={<i class="fas fa-check" />}
                  iconPosition="right"
                  iconAppearance="primary"
                  type="text"
                  placeholder="Password..."
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FlexContainer>
              {this.state.btnDisabled ? (
                <Button disabled>Log In</Button>
              ) : (
                <Button>Log In</Button>
              )}
            </FlexContainer>
          </form>
          <Paragraph>
            Don't have an account? <a href="#">Sign up here!</a>
          </Paragraph>
        </FlexContainer>
      </div>
    );
  }
}

export default withStyles(({ themes, text, colors }) => {
  return {
    loginForm: {},
    primary: colors.primary,
    danger: colors.danger
  };
})(LoginForm);