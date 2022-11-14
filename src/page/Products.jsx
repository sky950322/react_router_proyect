import { Link, Outlet } from "react-router-dom";

import React from "react";

export default function Products() {
  return (
    <>
      <div className="wrap">
        <div className="search_bar">
          <input type="search" placeholder="Search Products" />
        </div>
        <div className="buttons_products">
          <nav className="products-buttons">
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
}
