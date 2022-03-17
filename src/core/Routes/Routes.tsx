import ProtectedRoute from "core/ProtectedRoute";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lazy from "shared/Lazy";
import { ROUTESCONTANTS } from "./routes.contants";

const LazyRegisterYourDomain = <Lazy element={React.lazy(() => import('modules/RegisterYourDomain'))} />;
const LazyLogin = <Lazy element={React.lazy(() => import('modules/Login'))} />;
const LazyForgotPassword = <Lazy element={React.lazy(() => import('modules/ForgotPassword'))} />;
const LazyMyPatients = <Lazy element={React.lazy(() => import('modules/MyPatients'))} />;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={LazyRegisterYourDomain} />
      <Route path={ROUTESCONTANTS.LOGIN} element={LazyLogin} />
      <Route path={ROUTESCONTANTS.FORGOT_PASSWORD} element={LazyForgotPassword} />
      <Route path={ROUTESCONTANTS.DEFAULT} element={<ProtectedRoute />}>
        <Route path={ROUTESCONTANTS.MY_PATIENTS} element={LazyMyPatients} />
      </Route>
      
    </Routes>
  </BrowserRouter>
);

export default Router;