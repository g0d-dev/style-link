import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import MainLayout from "./components/layout/MainLayout";
import DetailModal from "./components/modal/DetailModal";

function Router() {
  return (
    <>
      <Routes>
        {/* 헤더가 필요없는 페이지 */}
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailModal />} />

        {/* 헤더가 필요한 페이지 */}
        <Route element={<MainLayout />}>
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
