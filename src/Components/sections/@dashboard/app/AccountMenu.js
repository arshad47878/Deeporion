// import React, { Component } from "react";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";

// class AccountItems extends Component {
//   constructor(props) {
//     super(props);
//   }

//   toggleList = () => {
//     this.setState((prevState) => ({
//       isListOpen: !prevState.isListOpen,
//     }));
//   };

//   // componentDidMount() {
//   //   document.addEventListener("mousedown", this.handleClickOutside);
//   // }

//   // componentDidUpdate() {
//   //   if (this.state.isListOpen) {
//   //     document.addEventListener("mousedown", this.handleClickOutside);
//   //   } else {
//   //     document.removeEventListener("mousedown", this.handleClickOutside);
//   //   }
//   // }

//   // componentWillUnmount() {
//   //   document.removeEventListener("mousedown", this.handleClickOutside);
//   // }

//   handleClickOutside = (e) => {
//     if (this.listRef && !this.listRef.contains(e.target)) {
//       this.setState({ isListOpen: false });
//     }
//   };
//   render() {
//     const { isOpen } = this.props;

//     return (
//       <div>
//         <IconButton onClick={this.toggleList}>
//           {/* Add your icon here */}
//         </IconButton>
//         {isOpen && (
//           <div ref={(ref) => (this.listRef = ref)}>
//             <List>
//               <ListItem>
//                 <ListItemText primary="Item 1" />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Item 2" />
//               </ListItem>
//               {/* Add more list items as needed */}
//             </List>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default AccountItems;
import React, { Component } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Navigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

class AccountMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    // if (sessionStorage.setItem("isAuthenticated", "false")) {
    //   return <Navigate to="/SignIn" />;
    // }
    this.props.onSignOut();
    // window.location.href = "/SignIn";
    console.log("hello");
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={this.handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              color="inherit"
            >
              {/* <Avatar sx={{ width: 32, height: 32 }}> */}
              <AccountCircleIcon />
              {/* </Avatar> */}
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={this.handleClose}
          onClick={this.handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={this.handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={this.handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={this.handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

export default AccountMenu;
