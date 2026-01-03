import { Line } from "react-chartjs-2";
import { Parcel } from "../../../Shared/Icons";

const currentMonthOnDelivery = [
  250, 240, 240, 238, 285, 262, 280, 290, 240, 272, 278, 285, 320, 298, 305,
  310, 260, 250, 260, 240, 260, 300,
];

export const OnDelivery = () => {
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
          gradient.addColorStop(0, "#4F46E5");
          gradient.addColorStop(1, "rgba(223, 221, 255, 1)");
          return gradient;
        },
        borderColor: "#4F46E5",
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
    <div className="app_child_inside app_collection">
      <div className="app_child_left">
        <div className="app_title_child">
          <Parcel />
          <p>On Delivery</p>
        </div>
        <div className="app_icon_child">
          <h6>
            335 <span>(Dec 2025)</span>
          </h6>
        </div>
      </div>
      <div className="app_child_right">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
