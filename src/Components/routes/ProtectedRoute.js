import React from "react";
import { Navigate } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {

    const { dashboard, isAuthenticated, path } = this.props;
    console.log("path", path);
    console.log("dashboard", dashboard);
    console.log("isAuthenticated", isAuthenticated);

    if (!isAuthenticated) {
      return <Navigate to="/SignIn" replace />;
    } else {
      return this.props.children;
    }
  }
}

export default ProtectedRoute;
