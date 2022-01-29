import React, { useContext, useEffect, useState } from "react";

import UserContext from "../context/User/UserContext";

export default function PublicRoute({ component: Component, ...props }) {
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

  return <Component />;
}
