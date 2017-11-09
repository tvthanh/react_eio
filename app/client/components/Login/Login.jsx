import React from 'react';
import { Grid, Row, Col, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Router, Route, Link, History } from 'react-router';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4} mdPush={4}>
              <h1>Login Page</h1>
              <br />
              <form>
                <FormGroup controlId="email" bsSize="large">
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    autoFocus
                    type="email"
                  />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    autoFocus
                    type="password"
                  />
                </FormGroup>
                <Button
                  block-center
                  bsSize="large"
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
