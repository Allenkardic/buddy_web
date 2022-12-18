import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Container } from "./style";
import { colors } from "../../utils";

function BarChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,

    Tooltip
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const fakerOne = [1000, 90, 100, 800, 500, 100, 900, 70, 80, 100, 800, 700];

  const fakerTwo = [100, 10, 20, 80, 100, 800, 700, 800, 90, 100, 800, 500];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: fakerOne,
        backgroundColor: colors.greyVariantFour,
        hoverBackgroundColor: colors.gold,
        grouped: true,
        barThickness: 13,
      },
      {
        label: "",
        data: fakerTwo,
        backgroundColor: colors.greyVariantFive,
        hoverBackgroundColor: colors.primary,
        grouped: true,
        barThickness: 13,
      },
    ],
  };

  return (
    <Container>
      <Bar options={options} data={data} height={300} width={950} />
    </Container>
  );
}

export default BarChart;
