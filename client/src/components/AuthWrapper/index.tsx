import { FC, useCallback, useState } from "react";
import { BaseComponentProps } from "../../types";
import { Navigate } from "react-router-dom";
import { useAuthenticatedUser } from "../../hooks/useAuthenticatedUser";

const AuthWrapper: FC<BaseComponentProps> = ({ children }) => {
  const [hasCompletedQuery, setHasCompletedQuery] = useState<boolean>(false);
  const onFinallyCallback = useCallback(() => setHasCompletedQuery(true), []);

  const { user, loading } = useAuthenticatedUser(onFinallyCallback);

  if (loading) return <p>loading . . .</p>;
  if (hasCompletedQuery && !user) return <Navigate to="/" />;

  return <>{children}</>;
};

export default AuthWrapper;
