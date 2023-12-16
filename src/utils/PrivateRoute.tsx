import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute() {
	const { auth } = useAuth();
	if (!auth?.token) return <Navigate to="/" />;

	return (
		<div>
			<Outlet />
		</div>
	);
}
