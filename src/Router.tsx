import { Route, Routes } from 'react-router-dom';
import Home from './pages/public/Home';
import Chat from './pages/chat';
import PrivateRoute from './pages/private/PrivateRoute/PrivateRoute';
import RecoveryPassword from './pages/public/RecoveryPassword';

export default function Router() {
	return (
		<Routes>
			<Route Component={PrivateRoute}>
				<Route path="/chat" Component={Chat} />
			</Route>

			<Route path="/" Component={Home} />
			<Route path="/recoveryPassword" Component={RecoveryPassword} />
		</Routes>
	);
}
