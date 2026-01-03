import { Line } from "react-chartjs-2";
import { Parcel } from "../../../Shared/Icons";

const currentMonthOnDelivery = [
  185, 142, 245, 220, 225, 230, 228, 190, 200, 272, 278, 310, 260, 230, 220,
  200, 285, 350, 298, 305, 250, 240,
];

export const Delivered = () => {
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
          gradient.addColorStop(0, "#42870a");
          gradient.addColorStop(1, "#f1ffe6");
          return gradient;
        },
        borderColor: "#42870a",
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
    <div className="app_child_inside app_student">
      <div className="app_child_left">
        <div className="app_title_child">
          <Parcel />
          <p>Delivered</p>
        </div>
        <div className="app_icon_child">
          <h6>
            624 <span>(Dec 2025)</span>
          </h6>
        </div>
      </div>
      <div className="app_child_right">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
