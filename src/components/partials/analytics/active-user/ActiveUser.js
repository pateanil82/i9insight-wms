import React from "react";
import { Icon, TooltipComponent } from "../../../Component";
import { ActiveUserBarChart } from "../../charts/analytics/AnalyticsCharts";

const ActiveUser = () => {
  return (
    <React.Fragment>
      <div className="analytic-au">
        <div className="analytic-au-ck" style={{height:'250px'}}>
          <ActiveUserBarChart />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ActiveUser;
