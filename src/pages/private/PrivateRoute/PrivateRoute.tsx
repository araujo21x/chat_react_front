import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { Container, ContainerData } from './styles';
import NavigationBar from '../../../components/private/NavigationBar/NavigationBar';

export default function PrivateRoute() {
	const { auth } = useAuth();
	if (!auth?.token) return <Navigate to="/" />;

	return (
		<Container>
			<ContainerData>
				<NavigationBar />
				<Outlet />
			</ContainerData>
		</Container>
	);
}
