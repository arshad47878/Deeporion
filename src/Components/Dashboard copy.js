import React from "react";
import { Helmet } from "react-helmet-async";
// import faker from "@faker-js/faker";
// @mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
// components
// import Iconify from "../components/iconify";
// sections
// import {
//   AppTasks,
//   AppNewsUpdate,
//   AppOrderTimeline,
//   AppCurrentVisits,
//   AppWebsiteVisits,
//   AppTrafficBySite,
//   AppWidgetSummary,
//   AppCurrentSubject,
//   AppConversionRates,
// } from "../sections/@dashboard/app";
import Iconify from "./iconify/Iconify";
import AppConversionRates from "./sections/@dashboard/app/AppConversionRates";

// ----------------------------------------------------------------------

const theme = createTheme();

class DashboardAppPage extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Helmet>
          <title> Dashboard | Minimal UI </title>
        </Helmet>

        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Hi, Welcome back
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              {/* <AppWidgetSummary
                title="Weekly Sales"
                total={714000}
                icon={"ant-design:android-filled"}
              /> */}
            </Grid>

            {/* Other Grid items ... */}

            <Grid item xs={12} md={6} lg={8}>
              {/* <AppWebsiteVisits
                title="Website Visits"
                subheader="(+43%) than last year"
                chartLabels={[
                  "01/01/2003",
                  "02/01/2003",
                  "03/01/2003",
                  "04/01/2003",
                  "05/01/2003",
                  "06/01/2003",
                  "07/01/2003",
                  "08/01/2003",
                  "09/01/2003",
                  "10/01/2003",
                  "11/01/2003",
                ]}
                chartData={[
                  {
                    name: "Team A",
                    type: "column",
                    fill: "solid",
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                  },
                  {
                    name: "Team B",
                    type: "area",
                    fill: "gradient",
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                  },
                  {
                    name: "Team C",
                    type: "line",
                    fill: "solid",
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  },
                ]}
              /> */}
            </Grid>

            {/* Other Grid items ... */}

            <Grid item xs={12} md={6} lg={8}>
              <AppConversionRates
                title="Conversion Rates"
                subheader="(+43%) than last year"
                chartData={[
                  { label: "Italy", value: 400 },
                  // Other data points ...
                ]}
              />
            </Grid>

            {/* Other Grid items ... */}

            <Grid item xs={12} md={6} lg={4}>
              {/* <AppTrafficBySite
                title="Traffic by Site"
                list={
                  [
                    // Site data points ...
                  ]
                }
              /> */}
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              {/* <AppTasks
                title="Tasks"
                list={
                  [
                    // Task data points ...
                  ]
                }
              /> */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {/* <AppTrafficBySite
                title="Traffic by Site"
                list={[
                  {
                    name: "FaceBook",
                    value: 323234,
                    icon: (
                      <Iconify
                        icon={"eva:facebook-fill"}
                        color="#1877F2"
                        width={32}
                      />
                    ),
                  },
                  {
                    name: "Google",
                    value: 341212,
                    icon: (
                      <Iconify
                        icon={"eva:google-fill"}
                        color="#DF3E30"
                        width={32}
                      />
                    ),
                  },
                  {
                    name: "Linkedin",
                    value: 411213,
                    icon: (
                      <Iconify
                        icon={"eva:linkedin-fill"}
                        color="#006097"
                        width={32}
                      />
                    ),
                  },
                  {
                    name: "Twitter",
                    value: 443232,
                    icon: (
                      <Iconify
                        icon={"eva:twitter-fill"}
                        color="#1C9CEA"
                        width={32}
                      />
                    ),
                  },
                ]}
              /> */}
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
}

export default DashboardAppPage;
