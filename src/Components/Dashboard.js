// import React, { Component } from "react";
// import {
//   CssBaseline,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Container,
// } from "@mui/material";
// import {
//   Menu as MenuIcon,
//   Dashboard as DashboardIcon,
//   BarChart as BarChartIcon,
//   Settings as SettingsIcon,
// } from "@mui/icons-material";
// import { withStyles } from "@mui/styles";

// const drawerWidth = 240;

// const styles = (theme) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-end",
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// });

// class Dashboard extends Component {
//   state = {
//     open: false,
//   };

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { classes } = this.props;
//     const { open } = this.state;

//     return (
//       <div className={classes.root}>
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           className={open ? classes.appBarShift : classes.appBar}
//         >
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={this.handleDrawerOpen}
//               edge="start"
//               className={open ? classes.hide : ""}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap>
//               Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           className={classes.drawer}
//           variant="persistent"
//           anchor="left"
//           open={open}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//         >
//           <div className={classes.drawerHeader}>
//             <IconButton onClick={this.handleDrawerClose}>
//               <MenuIcon />
//             </IconButton>
//           </div>
//           <List>
//             <ListItem button>
//               <ListItemIcon>
//                 <DashboardIcon />
//               </ListItemIcon>
//               <ListItemText primary="Dashboard" />
//             </ListItem>
//             <ListItem button>
//               <ListItemIcon>
//                 <BarChartIcon />
//               </ListItemIcon>
//               <ListItemText primary="Charts" />
//             </ListItem>
//             <ListItem button>
//               <ListItemIcon>
//                 <SettingsIcon />
//               </ListItemIcon>
//               <ListItemText primary="Settings" />
//             </ListItem>
//           </List>
//         </Drawer>
//         <main className={open ? classes.contentShift : classes.content}>
//           <div className={classes.drawerHeader} />
//           <Container maxWidth="lg">{/* Main content */}</Container>
//         </main>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(Dashboard);

import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    console.log("enter")
    return (
      <div>Dashboard</div>
    )
  }
}

