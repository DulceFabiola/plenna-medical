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
import Profile from "./components/User/Profile";
import PatientDetails from "./components/Patients/PatientDetails";
import Patient from "./pages/OurPatients";
import PatientProvider from "./context/Patient/PatientProvider";
import Consults from "./pages/Consults";
import ConsultProvider from "./context/Consult/ConsultProvider";
import ConsultDetails from "./pages/ConsultDetails";
import Checkout from "./pages/Checkout";
const Router = () => {
  return (
    <>
      <ConsultProvider>
        <PatientProvider>
          <UserProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="*" element={<PageNotFound />} />
                  {/* Rutas de Usuario*/}
                  <Route path="login" element={<Auth component={Login} />} />
                  <Route
                    path="signup"
                    element={<Auth component={Register} />}
                  />
                  <Route
                    path="profile"
                    element={<Private component={Profile} />}
                  />
                  {/* Rutas de paciente */}
                  <Route
                    path="patients"
                    element={<Private component={Patient} />}
                  />
                  <Route path="patients/:id" element={<PatientDetails />} />

                  {/* Rutas de consulta */}
                  <Route path="consult/:id" element={<Consults />} />
                  <Route
                    path="consultDetails/:id"
                    element={<ConsultDetails />}
                  />
                  <Route path="checkout" element={<Checkout />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </PatientProvider>
      </ConsultProvider>
    </>
  );
};

export default Router;
