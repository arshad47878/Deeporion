import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./Components/auth/SignIn";
// import Dashboard from "./Components/Dashboard";
import ProtectedRoute from "./Components/routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

// const ProtectedRoute = ({ dashboard, isAuthenticated }) => {
//   console.log("element", dashboard);
//   console.log("isAuthenticated", isAuthenticated);

//   if (isAuthenticated) {
//     return dashboard;
//   } else {
//     return <Navigate to="/SignIn" />;
//   }
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn = () => {
    this.setState({ isAuthenticated: true });
  };

  handleSignOut = () => {
    this.setState({
      isAuthenticated: false,
    });
  };

  render() {
    // const { isAuthenticated } = this.state;

    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                path="/dashboard"
                dashboard={<Dashboard />}
                isAuthenticated={this.state.isAuthenticated}
              >
                <Dashboard onSignOut={this.handleSignOut} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/SignIn"
            element={
              <SignIn
                onSignIn={this.handleSignIn}
                isAuthenticated={this.state.isAuthenticated}
              />
            }
          />

          {/* {this.state.isAuthenticated && (
            <Route path="/dashboard" element={<Dashboard />} />
          )} */}
        </Routes>
      </Router>
    );
  }
}

export default App;

// import React from "react";
// import {
//   Route,
//   BrowserRouter as Router,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
// import SignIn from "./Components/auth/SignIn";

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//           {/* Route for the Dashboard page */}
//           <Route path="/dashboard" element={<Dashboard />} />

//           {/* Route for the SignIn page */}
//           <Route path="/SignIn" element={<SignIn />} />
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;
