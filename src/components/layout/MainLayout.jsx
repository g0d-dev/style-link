import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";

function MainLayout() {
  return (
    <div>
      <HeaderLayout />
      <Outlet />
    </div>
  );
}

export default MainLayout;
