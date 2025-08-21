import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Radar, Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import "./App.css";

import financeData from "./data/financeData.json";
import businessStreams from "./data/businessStreams.json";
import activitiesData from "./data/activitiesData.json";

defaults.maintainAspectRatio = false;

defaults.plugins.title.display = true;
defaults.plugins.title.color = "black";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.align = "start";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Line
          data={{
            labels: financeData.map((item) => item.label),
            datasets: [
              {
                label: "Earnings",
                data: financeData.map((item) => item.income),
                backgroundColor: "#6A5ACD",
                borderColor: "#6A5ACD",
              },
              {
                label: "Expenses",
                data: financeData.map((item) => item.outflow),
                backgroundColor: "#20B2AA",
                borderColor: "#20B2AA",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.4, // Smooth lines
              },
            },
            plugins: {
              title: {
                text: "Financial Overview",
              },
            },
          }}
        />
      </div>
      <div className="card">
        <Bar
          data={{
            labels: businessStreams.map((item) => item.label),
            datasets: [
              {
                label: "Share of Income",
                data: businessStreams.map((item) => item.value),
                backgroundColor: [
                  "rgba(106, 90, 205, 0.8)",
                  "rgba(72, 209, 204, 0.8)",
                  "rgba(144, 238, 144, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Business Streams Overview",
              },
            },
          }}
        />
      </div>
      <div className="card">
        <Doughnut
          data={{
            labels: businessStreams.map((item) => item.label),
            datasets: [
              {
                data: businessStreams.map((item) => item.value),
                backgroundColor: [
                  "rgba(106, 90, 205, 0.8)",
                  "rgba(72, 209, 204, 0.8)",
                  "rgba(144, 238, 144, 0.8)",
                ],
                borderColor: [
                  "rgba(106, 90, 205, 0.8)",
                  "rgba(72, 209, 204, 0.8)",
                  "rgba(144, 238, 144, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Business Streams Distribution",
              },
            },
          }}
        />
      </div>
      <div className="card">
        <Pie
          data={{
            labels: businessStreams.map((item) => item.label),
            datasets: [
              {
                data: businessStreams.map((item) => item.value),
                backgroundColor: [
                  "rgba(106, 90, 205, 0.8)",
                  "rgba(72, 209, 204, 0.8)",
                  "rgba(144, 238, 144, 0.8)",
                ],
                borderColor: [
                  "rgba(106, 90, 205, 0.8)",
                  "rgba(72, 209, 204, 0.8)",
                  "rgba(144, 238, 144, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Business Streams Pie Chart",
              },
            },
          }}
        />
      </div>
      <div className="card radarCard">
        <Radar
          data={{
            labels: activitiesData.map((item) => item.label),
            datasets: [
              {
                label: "Team A",
                data: [65, 59, 90, 81, 56, 55, 40],
                backgroundColor: "rgba(138, 43, 226, 0.2)",
                borderColor: "rgb(138, 43, 226)",
              },
              {
                label: "Team B",
                data: [28, 48, 40, 19, 96, 27, 100],
                backgroundColor: "rgba(60, 179, 113, 0.2)",
                borderColor: "rgb(60, 179, 113)",
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Activities Performance",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
