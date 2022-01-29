import React, { useContext, useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import UserContext from "../context/User/UserContext";

export default function AuthRoute({ component: Component, ...props }) {
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingToken } = userCtx;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyStatus = async () => {
      await verifyingToken();
      return setLoading(false);
    };
    verifyStatus();
  }, [authStatus]);

  return <>{authStatus ? <Navigate replace to="/courses" /> : <Component />}</>;
}
