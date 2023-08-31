import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Component, PropTypes } from "react";

// import ReactTelephoneInput from 'react-telephone-input'

export default class UserRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: "",
      email: "",
      emailErrorText: "",
      password: "",
      confirmPassword: "",
      confirmPasswordErrorText: "",
      telNum: "",
    };
  }

  validateEmail(e) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  }

  getStyle() {
    return {
      height: 600,
      width: 350,
      margin: 20,
      textAlign: "center",
      display: "inline-block",
    };
  }

  _onSubmit(e) {
    e.preventDefault();

    console.log("_onSubmit");
    if (
      this.state.emailErrorText == "" &&
      this.state.confirmPasswordErrorText == ""
    ) {
      console.log("_onSubmit: state=", this.state);
    } else {
      console.log("has error, unable to submit");
    }
  }

  _onReset() {
    console.log("_onReset");
    this.setState({
      account: "",
      email: "",
      emailErrorText: "",
      password: "",
      confirmPassword: "",
      confirmPasswordErrorText: "",
      telNum: "",
    });
  }

  _handleAccountChange(e, val) {
    this.setState({ account: val });
  }

  _handlePasswordChange(e, val) {
    this.setState({ password: val });
  }

  _handleConfirmPasswordChange(e, val) {
    var errorText = "";
    if (val != this.state.password) {
      errorText = "Passwords are not matched";
    }
    this.setState({
      confirmPassword: val,
      confirmPasswordErrorText: errorText,
    });
  }

  _handleEmailChange(e, val) {
    var errorText = "";
    if (!this.validateEmail(val)) {
      errorText = "Email Format Error";
    }
    this.setState({ emailErrorText: errorText, email: val });
  }

  _handleInputChange(telNumber, selectedCountry) {
    console.log(
      "input changed. number: ",
      telNumber,
      "selected country: ",
      selectedCountry
    );
  }

  // _handleInputBlur(telNumber, selectedCountry) {
  //   console.log('Focus off the ReactTelephoneInput component. Tel number entered is: ', telNumber, ' selected country is: ', selectedCountry);
  //   this.setState({telNum: telNumber})
  // }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack sx={{ alignItems: "center" }}>
            {/* <Paper style={this.getStyle()}> */}
            <form onSubmit={this._onSubmit.bind(this)}>
              {/* <Stack direction="row">
              <TextField
                value={this.state.account}
                onChange={this._handleAccountChange.bind(this)}
                hintText="Account"
                floatingLabelText="Account"
                floatingLabelFixed={true}
              />

              <TextField
                value={this.state.password}
                onChange={this._handlePasswordChange.bind(this)}
                hintText="Password"
                floatingLabelText="Password"
                floatingLabelFixed={true}
                type="password"
              />
            </Stack>

            <Stack direction="row">
              <TextField
                value={this.state.confirmPassword}
                errorText={this.state.confirmPasswordErrorText}
                onChange={this._handleConfirmPasswordChange.bind(this)}
                hintText="Confirmed Password"
                floatingLabelText="Confirmed Password"
                floatingLabelFixed={true}
                type="password"
              />

              <TextField
                value={this.state.email}
                errorText={this.state.emailErrorText}
                onChange={this._handleEmailChange.bind(this)}
                hintText="Email"
                floatingLabelText="Email"
                floatingLabelFixed={true}
              />
            </Stack> */}

              {/* <div>
        <ReactTelephoneInput
              flagsImagePath='static/images/flags.png'
              defaultCountry='id'
              onChange={this._handleInputChange.bind(this)}
              onBlur={this._handleInputBlur.bind(this)}
              preferredCountries={['sg', 'id', 'cn', 'tw']}
              />
        </div> */}
              {/* <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={this._onReset.bind(this)}>
                Reset
              </button>
            </div> */}

              <Typography component="h1" variant="h4">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                // onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={this.state.firstName}
                      errorText={this.state.firstNameErrorText}
                      onChange={this._handleEmailChange.bind(this)}
                      // hintText="Email"
                      floatingLabelText="FirstName"
                      floatingLabelFixed={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      value={this.state.lastName}
                      errorText={this.state.lastNameErrorText}
                      onChange={this._handleEmailChange.bind(this)}
                      // hintText="Email"
                      floatingLabelText="LastName"
                      floatingLabelFixed={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      errorText={this.state.emailErrorText}
                      onChange={this._handleEmailChange.bind(this)}
                      // hintText="Email"
                      floatingLabelText="Email"
                      floatingLabelFixed={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={this.state.confirmPassword}
                      errorText={this.state.confirmPasswordErrorText}
                      onChange={this._handleConfirmPasswordChange.bind(this)}
                      hintText="Confirmed Password"
                      floatingLabelText="Confirmed Password"
                      floatingLabelFixed={true}
                      // type="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <button type="button" onClick={this._onReset.bind(this)}>
                  Reset
                </button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </form>
            {/* </Paper> */}
          </Stack>
        </Box>
      </Container>
    );
  }
}
