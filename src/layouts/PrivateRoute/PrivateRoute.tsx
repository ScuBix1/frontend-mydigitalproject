import { useAuth } from '@/context/auth/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  console.log(isAuthenticated);

  if (!isAuthenticated && !isLoading) {
    return <Navigate to='/signin' replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
