import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../features/auth/hooks/useUser";

export default function ProtectedRoute() {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
