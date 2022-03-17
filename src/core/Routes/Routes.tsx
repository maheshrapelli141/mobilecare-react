import ProtectedRoute from "core/ProtectedRoute";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lazy from "shared/Lazy";

const LazyRegisterYourDomain = <Lazy element={React.lazy(() => import('modules/RegisterYourDomain'))} />;
const LazyLogin = <Lazy element={React.lazy(() => import('modules/Login'))} />;
const LazyForgotPassword = <Lazy element={React.lazy(() => import('modules/ForgotPassword'))} />;
const LazyMyPatients = <Lazy element={React.lazy(() => import('modules/MyPatients'))} />;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={LazyRegisterYourDomain} />
      <Route path="/login" element={LazyLogin} />
      <Route path="/forgot-password" element={LazyForgotPassword} />
      <Route path="/" element={<ProtectedRoute />}>
      <Route path="/my-patients" element={LazyMyPatients} />
      </Route>
      
    </Routes>
  </BrowserRouter>
);

export default Router;