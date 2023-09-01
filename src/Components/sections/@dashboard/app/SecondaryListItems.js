// import React, { Component } from 'react'

// export default class SecondaryListItems extends Component {
//   render() {
//     return (
//       <div>SecondaryListItems</div>
//     )
//   }
// }
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default class SecondaryListItems extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ListSubheader component="div" inset>
          Saved reports
        </ListSubheader>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Year-end sale" />
        </ListItemButton>
      </React.Fragment>
    );
  }
}
