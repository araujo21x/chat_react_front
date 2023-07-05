import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute() {
	const { token } = useAuth();

	return token ? <Outlet /> : <Navigate to="/" />;
}
