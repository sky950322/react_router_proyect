import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
// import About from "./components/About";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./page/NoMatch";
import Products from "./page/Products";
import FeaturedProducts from "./page/FeaturedProducts";
import NewProducts from "./page/NewProducts";
import Users from "./page/Users";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Admin from "./page/Admin";
import { Profile } from "./page/Profile";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./page/Login";
import { RequireAuth } from "./components/RequireAuth";
import { DataProvider } from "./context/DataContext";
import TodoList from "./page/todo/TodoList";
const LazyAbout = React.lazy(() => import("./page/About"));

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="todo" element={<TodoList />} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
