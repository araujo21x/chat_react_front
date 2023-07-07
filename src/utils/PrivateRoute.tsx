import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute() {
	const { auth } = useAuth();
	return auth?.token ? <Outlet /> : <Navigate to="/" />;
}
