// import React, { Component } from 'react'

// export default class ListItems extends Component {
//   render() {
//     return (
//       <div>ListItems</div>
//     )
//   }
// }

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { Component } from "react";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import ListSubheader from "@mui/material/ListSubheader";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import PeopleIcon from "@mui/icons-material/People";
import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from "@mui/icons-material/BarChart";
import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from "@mui/icons-material/Layers";
import LayersIcon from '@mui/icons-material/Layers';
// import AssignmentIcon from "@mui/icons-material/Assignment";

export default class MainListItems extends Component {
  render() {
    return (
      <React.Fragment>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItemButton>
      </React.Fragment>
    );
  }
}

// class SecondaryListItems extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <ListSubheader component="div" inset>
//           Saved reports
//         </ListSubheader>
//         <ListItemButton>
//           <ListItemIcon>
//             <AssignmentIcon />
//           </ListItemIcon>
//           <ListItemText primary="Current month" />
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <AssignmentIcon />
//           </ListItemIcon>
//           <ListItemText primary="Last quarter" />
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <AssignmentIcon />
//           </ListItemIcon>
//           <ListItemText primary="Year-end sale" />
//         </ListItemButton>
//       </React.Fragment>
//     );
//   }
// }
