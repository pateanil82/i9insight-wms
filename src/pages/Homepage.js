import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import SaleRevenue from "../components/partials/default/sale-revenue/SaleRevenue";
import ActiveSubscription from "../components/partials/default/active-subscription/ActiveSubscription";
import AvgSubscription from "../components/partials/default/avg-subscription/AvgSubscription";
import SalesOverview from "../components/partials/default/sales-overview/SalesOverview";
import TransactionTable from "../components/partials/default/transaction/Transaction";
import RecentActivity from "../components/partials/default/recent-activity/Activity";
import NewsUsers from "../components/partials/default/new-users/User";
import Support from "../components/partials/default/support-request/Support";
import Notifications from "../components/partials/default/notification/Notification";
import { DropdownToggle, DropdownMenu, Card, UncontrolledDropdown, DropdownItem } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  PreviewCard,
  PreviewAltCard,
  BlockBetween,
  PieChartExample,
  LineChartExample,
  BarChartExample,
} from "../components/Component";
import TransListBasic from "./pre-built/trans-list/TransListBasic";
import { DoubleBar, StackedBarChart } from "../components/partials/charts/default/Charts";
import { PieController } from "chart.js";
import { saleRevenue } from "../components/partials/charts/default/Data";
import { barChartData, barChartStacked, doughnutChartData, solidLineChart } from "./components/charts/ChartData";
import OrderOverview from "../components/partials/crypto/order-overview/OrderOverview";
import UserActivity from "../components/partials/crypto/user-activity/UserActivity";
import TrafficDougnut from "../components/partials/analytics/traffic-dougnut/TrafficDoughnut";
import ActiveUser from "../components/partials/analytics/active-user/ActiveUser";

const Homepage = () => {
  return (
    <>
      <Head title="Homepage"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Welcome to I9-Insights!
              </BlockTitle>
              {/* <BlockDes className="text-soft">
                <p>Welcome to DashLite Dashboard Template</p>
              </BlockDes> */}
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col md="6" xxl="6">
              <PreviewCard className="h-100">
                <h6 className="title">Warehouse Capacity utilization</h6>
                {/* <p>How do your users visited in the time.</p> */}
                <ActiveUser />
              </PreviewCard>
            </Col>
            <Col md="6" xxl="6">
              <PreviewCard className="h-100">
                <h6 className="title">Shelf life wise stock </h6>
                <p> Data of last 15 days is shown in given graph.</p>
                <UserActivity />
              </PreviewCard>
            </Col>
            <Col md="12" xxl="6">
              <PreviewCard className="h-100">
                <h6 className="title">Top-10 High Outward</h6>
                <p>In last days buy and sells overview.</p>
                <OrderOverview />
              </PreviewCard>
            </Col>
            <Col md="12" xxl="6">
              <PreviewCard className="h-100" style={{ minHeight: "370px" }}>
                <div style={{ height: "250px" }}>
                  <h6 className="title">Outward/ Inward Trend</h6>
                  <p>A chart highlight relation between two values.</p>
                  <LineChartExample legend={true} data={solidLineChart} />
                </div>
              </PreviewCard>
            </Col>
          </Row>
        </Block>
      </Content>
    </>
  );
};
export default Homepage;
