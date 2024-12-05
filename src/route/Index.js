import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Homepage from "../pages/Homepage";

import InvoicePrint from "../pages/pre-built/invoice/InvoicePrint";

import Error404Classic from "../pages/error/404-classic";
import Error404Modern from "../pages/error/404-modern";
import Error504Modern from "../pages/error/504-modern";
import Error504Classic from "../pages/error/504-classic";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Success from "../pages/auth/Success";

import Layout from "../layout/Index";
import LayoutNoSidebar from "../layout/Index-nosidebar";
import AppProvider from "../context/appContext";
import Warehouse from "../pages/warehouse";
import WarehouseProvider from "../pages/warehouse/WarehouseContext";
import WarehouseCapacity from "../pages/warehouse/WarehouseCapacity";
import WarehouseTable from "../pages/warehouse/WarehouseTable";

import Inward from "../pages/transactions/Inward";
import Outward from "../pages/transactions/Outward";

const Router = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isAuthenticated = !!localStorage.getItem("accessToken");

  return (
    <>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}`}
          element={
            isAuthenticated ? (
              <AppProvider>
                <Layout />
              </AppProvider>
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route index element={<Homepage />}></Route>
          <Route element={<WarehouseProvider />}>
            <Route path="warehouse" element={<Warehouse />}></Route>
            <Route path="warehouse/capacity" element={<WarehouseCapacity />}></Route>
            <Route path="warehouse/capacity/data" element={<WarehouseTable />}></Route>
          </Route>
          <Route path="/transactions" element={<Navigate to="/transactions/inward" />} />
          <Route path="/transactions/inward" element={<Inward />} />
          <Route path="/transactions/pick-list" element={<Outward />} />
          <Route path="/report" element={<></>} />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}`} element={<LayoutNoSidebar />}>
          <Route path="auth-success" element={<Success />}></Route>
          <Route path="reset" element={<ForgotPassword />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />}></Route>

          <Route path="errors">
            <Route path="404-modern" element={<Error404Modern />}></Route>
            <Route path="404-classic" element={<Error404Classic />}></Route>
            <Route path="504-modern" element={<Error504Modern />}></Route>
            <Route path="504-classic" element={<Error504Classic />}></Route>
          </Route>
          <Route path="*" element={<Error404Modern />}></Route>

          <Route path="invoice-print/:invoiceId" element={<InvoicePrint />}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default Router;
