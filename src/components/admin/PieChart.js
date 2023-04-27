import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart as ChartJS } from "chart.js";
import EquipmentData from "../../data/equipments.json";
import RequisitionData from "../../data/requisitions.json";
import UserData from "../../data/user.json";
import CabinetData from "../../data/cabinets.json";

Chart.register(ArcElement);
ChartJS.register(ArcElement, Tooltip, Legend);

// const dataNo[] = useState([]);

// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [5, 9, 7, 4],
//       backgroundColor: [
//         "rgb(184, 15, 10)",
//         "rgb(54, 162, 235)",
//         "rgb(255, 205, 86)",
//         "rgb(28, 164, 107)",
//       ],
//       hoverOffset: 4,
//     },
//   ],
// };
// export const data = {
//   labels: ["Red", "Blue", "Yellow", "Green"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [200, 150, 100, 50],
//       backgroundColor: [
//         "rgb(184, 15, 10)",
//         "rgb(54, 162, 235)",
//         "rgb(255, 205, 86)",
//         "rgb(5, 102, 8)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

const PieChart = () => {
  //  //To check whether getting data or not
  //   var arr = [
  //     Object.keys(RequisitionData).length,
  //     Object.keys(EquipmentData).length,
  //     Object.keys(CabinetData).length,
  //     Object.keys(UserData).length,
  //   ];
  //   console.log(arr);
  var data = {
    labels: [" User", " Requisition", "Equipment", "Cabinet"],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          Object.keys(UserData).length,
          Object.keys(RequisitionData).length,
          Object.keys(EquipmentData).length,
          Object.keys(CabinetData).length,
        ],
        backgroundColor: [
          "rgb(0, 138, 66)",
          "rgb(184, 15, 10)",
          "rgb(54, 162, 235)",
          "rgb(251,177, 23)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <div className="header">
        <div className="links"></div>
      </div>
      <Doughnut data={data} />
    </div>
  );
};
export default PieChart;
