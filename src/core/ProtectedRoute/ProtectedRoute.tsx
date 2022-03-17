import GLOBALCONSTANTS from "global.constants";
import React from "react";
import { Navigate, Outlet, Route, RouteProps } from "react-router-dom";

export function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem(GLOBALCONSTANTS.USER_KEY);
  
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="login" />
  );
}
