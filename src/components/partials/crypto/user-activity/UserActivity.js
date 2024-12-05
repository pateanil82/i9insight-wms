import React, { useState } from "react";
import Icon from "../../../icon/Icon";
import { UncontrolledDropdown, CardTitle, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { StackedBarChart } from "../../charts/default/Charts";

const UserActivity = () => {
  return (
    <React.Fragment>
      <div className="user-activity-ck " style={{ height: "250px" }}>
        <StackedBarChart />
      </div>
    </React.Fragment>
  );
};
export default UserActivity;
