import { Stack } from "@mui/material";
import React, { Component } from "react";
import UserRegister from "../Components/auth/UserRegister";

export default class Register extends Component {
  render() {
    return (
      <Stack>
        <UserRegister />
      </Stack>
    );
  }
}
