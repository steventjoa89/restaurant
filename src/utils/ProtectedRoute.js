import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// https://dev.to/collins87mbathi/reactjs-protected-route-m3j 
// https://medium.com/@pratya.yeekhaday/reactjs-protect-route-v6-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%96%E0%B8%B6%E0%B8%87-path-ee11c61d1377
// https://medium.com/@chiragmehta900/creating-protected-routes-in-react-js-with-react-router-v6-28f3a3ac53d
const ProtectedRoute = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
