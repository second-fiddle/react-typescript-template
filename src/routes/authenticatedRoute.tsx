import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts';

const AuthenticatedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthenticatedRoute;
