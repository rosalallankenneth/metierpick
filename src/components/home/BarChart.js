import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom"
    },
    title: {
      display: true,
      text: "MI Assessment Results"
    }
  }
};

const HorizontalBarChart = props => {
  const { ratings } = props;

  const data = {
    labels: [
      "Linguistic",
      "Logical-Mathematical",
      "Spatial",
      "Bodily-Kinesthetic",
      "Musical",
      "Interpersonal",
      "Intrapersonal",
      "Naturalist"
    ],
    datasets: [
      {
        label: "Rating Score",
        data:
          ratings !== null
            ? [
                ratings.Linguistic,
                ratings.Logical_Mathematical,
                ratings.Spatial,
                ratings.Bodily_Kinesthetic,
                ratings.Musical,
                ratings.Interpersonal,
                ratings.Intrapersonal,
                ratings.Naturalist
              ]
            : [5, 5, 5, 5, 5, 5, 5, 5],
        backgroundColor:
          ratings !== null
            ? [
                "rgba(238, 76, 40, 0.2)",
                "rgba(190, 40, 238, 0.2)",
                "rgba(25, 119, 233, 0.2)",
                "rgba(21, 236, 191, 0.2)",
                "rgba(231, 15, 136, 0.2)",
                "rgba(209, 228, 20, 0.2)",
                "rgba(247, 199, 21, 0.2)",
                "rgba(32, 210, 4, 0.2)"
              ]
            : ["#ddd"],
        borderColor:
          ratings !== null
            ? [
                "rgba(238, 76, 40, 1)",
                "rgba(190, 40, 238, 1)",
                "rgba(25, 119, 233, 1)",
                "rgba(21, 236, 191, 1)",
                "rgba(231, 15, 136, 1)",
                "rgba(209, 228, 20, 1)",
                "rgba(247, 199, 21, 1)",
                "rgba(32, 210, 4, 1)"
              ]
            : ["#333"],
        borderWidth: 1
      }
    ]
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default HorizontalBarChart;
