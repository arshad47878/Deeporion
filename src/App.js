import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./Components/auth/SignIn";
import ProtectedRoute from "./Components/routes/ProtectedRoute";
import Dashboard from "./Components/Dashboard";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isAuthenticated: false,
//     };
//   }

//   componentDidMount() {
//     this.handleSignIn = () => {
//       this.setState({ isAuthenticated: true });
//     };
//   }

//   render() {
//     const { isAuthenticated } = this.state;
//     console.log("path catch", this.props)

//     return (
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute
//                 element={<Dashboard />}
//                 isAuthenticated={isAuthenticated}
//                 path="/dashboard" // Specify the path for the ProtectedRoute
//               />
//             }
//           />
//           <Route
//             path="/SignIn"
//             element={<SignIn onSignIn={this.handleSignIn} />}
//           />
//         </Routes>
//       </Router>
//     );
//   }
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  handleSignIn = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    const { isAuthenticated } = this.state;
    console.log("catching", this.props);

    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                element={<Dashboard />}
                isAuthenticated={isAuthenticated}
                path="/dashboard" // Specify the path for the ProtectedRoute
              />
            }
          />
          <Route
            path="/SignIn"
            element={<SignIn onSignIn={this.handleSignIn} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
