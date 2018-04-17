import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import List from "../../Elements/List";
import ListItem from "../../Elements/ListItem";
import ListItemWithIcon from "../../Elements/ListItemWithIcon";

storiesOf("List", module)
  .add("Unordered list (column)", () => (
    <List>
      <ListItem>List item</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ))
  .add("Unordered list (row)", () => (
    <List direction="row">
      <ListItem>List item</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ))
  .add("Ordered list(column)", () => (
    <List listType="ol">
      <ListItem>List item</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ))
  .add("Ordered list(row)", () => (
    <List direction="row" listType="ol">
      <ListItem>List item</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ))
  .add("List with icon (left)", () => (
    <List>
      <ListItemWithIcon>List item</ListItemWithIcon>
      <ListItemWithIcon>List item 2</ListItemWithIcon>
      <ListItemWithIcon>List item 3</ListItemWithIcon>
    </List>
  ))
  .add("List with icon (right)", () => (
    <List>
      <ListItemWithIcon iconPosition="right">List item</ListItemWithIcon>
      <ListItemWithIcon iconPosition="right">List item 2</ListItemWithIcon>
      <ListItemWithIcon iconPosition="right">List item 3</ListItemWithIcon>
    </List>
  ));
