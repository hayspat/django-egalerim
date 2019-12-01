import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
import CustomLayout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";

function App(props) {
  useEffect(() => {
    props.onTryAutoSignup();
  });

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {props.isAuthenticated ? (
          <CustomLayout {...props}>
            <BaseRouter />
          </CustomLayout>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
