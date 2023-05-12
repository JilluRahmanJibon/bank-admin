import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("http://server.bank.genzam.it/api/v1/chartTransition")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  // console.log(info)
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Transition",
        data: [info[0]?.jan, info[1]?.feb, info[2]?.mar, info[3]?.apr, info[4]?.may, info[5]?.jun, info[6]?.jul, info[7]?.aug, info[8]?.sep, info[9]?.oct, info[10]?.nov, info[11]?.dec],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
      {/* {console.log("bar chart ",info)} */}
    </div>
  );
};

export default BarChart;
