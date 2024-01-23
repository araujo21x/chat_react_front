import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { Container, ContainerData } from './styles';
import NavigationBar from '../../../components/private/NavigationBar/NavigationBar';
import { usePrivateRoute } from './usePrivateRoute';
import { RoomProvider } from '../../../context/RoomContext';

export default function PrivateRoute() {
	usePrivateRoute();
	const { auth } = useAuth();
	if (!auth?.token) return <Navigate to="/" />;

	return (
		<RoomProvider>
			<Container>
				<ContainerData>
					<NavigationBar />
					<Outlet />
				</ContainerData>
			</Container>
		</RoomProvider>
	);
}
