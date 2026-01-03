import { Line } from "react-chartjs-2";
import { Teams } from "../../../Shared/Icons";

const currentMonthOnDelivery = [
  142, 185, 285, 298, 305, 240, 245, 250, 200, 228, 230, 230, 200, 220, 220,
  225, 260, 272, 278, 310, 350,
];

export const CancelDelivery = () => {
  const data = {
    labels: currentMonthOnDelivery.map((_, i) => i + 1),
    datasets: [
      {
        data: currentMonthOnDelivery,
        fill: true,
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "#0a7890");
          gradient.addColorStop(1, "#daf8ff");
          return gradient;
        },
        borderColor: "#0a7890",
        borderWidth: 1,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: (items) => `Day ${items[0].label}`,
          label: (item) => `On Delivery: ${item.raw}`,
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="app_child_inside app_non_teacher">
      <div className="app_child_left">
        <div className="app_title_child">
          <Teams />
          <p>User &amp; Rider</p>
        </div>
        <div className="app_icon_child">
          <h6>
            804 <span>(Dec 2025)</span>
          </h6>
        </div>
      </div>
      <div className="app_child_right">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
