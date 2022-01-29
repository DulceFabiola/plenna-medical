import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import UserProvider from "./context/User/UserProvider";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Auth from "./routes/Auth";
import Private from "./routes/Private";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
const Router = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="login" element={<Auth component={Login} />} />
              <Route path="signup" element={<Auth component={Register} />} />
              <Route path="profile" element={<Private component={Profile} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};

export default Router;
