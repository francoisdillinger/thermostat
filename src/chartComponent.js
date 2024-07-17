import * as React from "react";
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Utility Uasage',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Power Usage',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'red',
      backgroundColor: 'red',
    },
    {
      label: 'Water Usage',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'blue',
      backgroundColor: 'blue',
    },
  ],
};

const ChartComponent = (props) => {



    return(
        <div id="chart">
            <Line options={options} data={data}  />
        </div>
    );
}

export default ChartComponent;
