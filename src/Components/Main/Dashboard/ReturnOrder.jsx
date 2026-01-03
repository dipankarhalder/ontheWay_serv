import { Line } from "react-chartjs-2";
import { ReturnDelivery } from "../../../Shared/Icons";

const currentMonthOnDelivery = [
  200, 272, 278, 285, 350, 298, 305, 220, 225, 230, 228, 185, 240, 230, 220,
  200, 142, 245, 190, 310, 260, 250,
];

export const ReturnOrder = () => {
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
          gradient.addColorStop(0, "#db8311ff");
          gradient.addColorStop(1, "#fff3e5");
          return gradient;
        },
        borderColor: "#db8311ff",
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
    <div className="app_child_inside app_expense">
      <div className="app_child_left">
        <div className="app_title_child">
          <ReturnDelivery />
          <p>Cancel Delivery</p>
        </div>
        <div className="app_icon_child">
          <h6>
            56 <span>(Dec 2025)</span>
          </h6>
        </div>
      </div>
      <div className="app_child_right">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
