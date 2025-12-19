import { useState, useEffect } from "react";

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth") === "true";
    setIsAuth(authStatus);
  }, []);

  return isAuth;
}
