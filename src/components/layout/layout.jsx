//buat nampilin tab keranjang di halaman detail

import React from "react";
import { Outlet } from "react-router-dom";
import HeaderProduct from "../headerProduct/headerProduct";
import CartTab from "../cartTab/cartTab";
import { useSelector } from "react-redux";

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  return (
    <div className="container-layout">
      <main className={`main-content-layout ${statusTabCart ? "shift-left" : ""}`}>
        <HeaderProduct />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
