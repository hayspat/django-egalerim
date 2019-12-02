import React from "react";
import { connect } from "react-redux";

const Profil = () => {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    email: state.auth.email
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    //
  };
};

export default connect(mapStateToProps)(Profil);
