import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lazy from "shared/Lazy";

const LazyRegisterYourDomain = <Lazy element={React.lazy(() => import('modules/RegisterYourDomain'))} />;
const LazyLogin = <Lazy element={React.lazy(() => import('modules/Login'))} />;
const LazyForgotPassword = <Lazy element={React.lazy(() => import('modules/ForgotPassword'))} />;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={LazyRegisterYourDomain} />
      <Route path="/login" element={LazyLogin} />
      <Route path="/forgot-password" element={LazyForgotPassword} />
    </Routes>
  </BrowserRouter>
);

export default Router;