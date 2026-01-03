import { Teams } from "../../../Shared/Icons";
import { OnDelivery } from "./OnDelivery";
import { ReturnOrder } from "./ReturnOrder";
import { Delivered } from "./Delivered";
import { CancelDelivery } from "./CancelDelivery";

export const Overview = () => {
  return (
    <div className="app_init_dashboard">
      <ul>
        <li>
          <OnDelivery />
        </li>
        <li>
          <Delivered />
        </li>
        <li>
          <ReturnOrder />
        </li>
        <li>
          <CancelDelivery />
        </li>
      </ul>
    </div>
  );
};
