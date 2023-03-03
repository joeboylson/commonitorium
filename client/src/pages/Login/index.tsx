import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [hasCompletedQuery, setHasCompletedQuery] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [authenticationUrl, setAuthenticationUrl] = useState<any>();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/authenticate/auth-url")
      .then(({ data }) => {
        const _redirectUrl = data === "" ? undefined : data;
        setAuthenticationUrl(_redirectUrl);
      })
      .finally(() => {
        setLoading(false);
        setHasCompletedQuery(true);
      });
  }, []);

  if (loading || !hasCompletedQuery) {
    return <p>loading . . .</p>;
  }

  return <a href={authenticationUrl}>Login</a>;
};

export default Login;
