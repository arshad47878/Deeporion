import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";
import { fShortenNumber } from "../../../utils/formatNumber";

class AppTrafficBySite extends Component {
  constructor(props) {
    super(props);
    this.renderSites = this.renderSites.bind(this);
  }

  renderSites() {
    const { list } = this.props;

    return list.map((site) => (
      <Paper
        key={site.name}
        variant="outlined"
        sx={{ py: 2.5, textAlign: "center" }}
      >
        <Box sx={{ mb: 0.5 }}>{site.icon}</Box>
        <Typography variant="h6">{fShortenNumber(site.value)}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {site.name}
        </Typography>
      </Paper>
    ));
  }

  render() {
    const { title, subheader, ...other } = this.props;

    return (
      <Card {...other}>
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {this.renderSites()}
          </Box>
        </CardContent>
      </Card>
    );
  }
}

AppTrafficBySite.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default AppTrafficBySite;
