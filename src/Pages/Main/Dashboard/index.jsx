import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { paths } from "../../../Constant";
import { locationInfo } from "../../../Constant";
import { Rupees, PayReview, Invoice } from "../../../Shared/Icons";
import { TopBar } from "../../../Components/Main/TopBar";
import { WelcomeProfile } from "../../../Components/Main/Dashboard/WelcomeProfile";
import { Overview } from "../../../Components/Main/Dashboard/Overview";
import { Revenue } from "../../../Components/Main/Dashboard/Revenue";
import { Earning } from "../../../Components/Main/Dashboard/Earning";
import { AppMainLayoutCover, AppDashboardCover } from "../style";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DashboardPage = () => {
  const data = {
    labels: [
      "Total Balance",
      "Payment in Review",
      "Prepare Invoice",
      "Refund Invoice",
    ],
    datasets: [
      {
        data: [850000, 250000, 105000, 74000],
        backgroundColor: ["#4f46e5", "#4CAF50", "#FF9F40", "#36A2EB"],
        borderWidth: 0,
        cutout: "40%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            family: "'AvenirNext', sans-serif",
            size: 13,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.label}: ₹${context.raw.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <AppMainLayoutCover>
      <TopBar location={locationInfo} />
      <AppDashboardCover>
        <WelcomeProfile />
        <div className="app_overview_main_cover">
          <Overview />
          <div className="app_parcel_overview">
            <ul>
              <li>
                <Rupees />
                <div className="app_parcel_info">
                  <p>Total Balance</p>
                  <h6>Rs. 12,50,000/-</h6>
                </div>
              </li>
              <li>
                <PayReview />
                <div className="app_parcel_info">
                  <p>Payment in Review</p>
                  <h6>Rs. 2,50,000/-</h6>
                </div>
              </li>
              <li>
                <Invoice />
                <div className="app_parcel_info">
                  <p>Prepare Invoice</p>
                  <h6>Rs. 75,000/-</h6>
                </div>
              </li>
              <li>
                <Invoice />
                <div className="app_parcel_info">
                  <p>Refund Invoice</p>
                  <h6>Rs. 34,000/-</h6>
                </div>
              </li>
            </ul>
          </div>
          <div className="app_doughnut_chart">
            <Doughnut data={data} options={options} />
          </div>
        </div>
        <div className="app_overview_graph">
          <Revenue />
          <Earning />
        </div>
        <div className="app_more_btns">
          <Link to={paths.ANALYSIS}>More Informations</Link>
        </div>
      </AppDashboardCover>
    </AppMainLayoutCover>
  );
};
