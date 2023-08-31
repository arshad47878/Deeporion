import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";
import { Box, Card, CardHeader } from "@mui/material";
import { fNumber } from "../../../utils/formatNumber";

class AppConversionRates extends Component {
  constructor(props) {
    super(props);

    const chartLabels = props.chartData.map((i) => i.label);
    const chartSeries = props.chartData.map((i) => i.value);

    this.state = {
      chartLabels,
      chartSeries,
    };
  }

  render() {
    const { title, subheader, ...other } = this.props;
    const { chartSeries, chartLabels } = this.state;

    const chartOptions = {
      tooltip: {
        marker: { show: false },
        y: {
          formatter: (seriesName) => fNumber(seriesName),
          title: {
            formatter: () => "",
          },
        },
      },
      plotOptions: {
        bar: { horizontal: true, barHeight: "28%", borderRadius: 2 },
      },
      xaxis: {
        categories: chartLabels,
      },
    };

    return (
      <Card {...other}>
        <CardHeader title={title} subheader={subheader} />

        <Box sx={{ mx: 3 }} dir="ltr">
          <ReactApexChart
            type="bar"
            series={[{ data: chartSeries }]}
            options={chartOptions}
            height={364}
          />
        </Box>
      </Card>
    );
  }
}

AppConversionRates.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
};

export default AppConversionRates;
