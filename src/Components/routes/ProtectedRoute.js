// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// // import Dashboard from "../Dashboard";

// class ProtectedRoute extends React.Component {
//   render() {
//     const { path, element: Dashboard, isAuthenticated } = this.props;

//     if (isAuthenticated) {
//       return <Route path={path} element={<Dashboard />} />;
//     } else {
//       return <Navigate to="/SignIn" />;
//     }
//   }
// }

// export default ProtectedRoute;

import React from "react";
import { Route, Navigate } from "react-router-dom";

// class ProtectedRoute extends React.Component {
//   render() {
//     const { path, element, isAuthenticated } = this.props;
//     console.log("path sending", path);

//     if (isAuthenticated) {
//       console.log(path);
//       return <Route path={this.path} element={element} />;
//     } else {
//       return <Navigate to="/SignIn" />;
//     }
//   }
// }

class ProtectedRoute extends React.Component {
  render() {
    const { path, element, isAuthenticated } = this.props;
    console.log("path sending");

    if (isAuthenticated) {
      return <Route path={path} element={element} />;
    } else {
      return <Navigate to="/SignIn" />;
    }
  }
}

export default ProtectedRoute;
