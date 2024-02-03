import { Route, Routes } from 'react-router-dom';
import Home from './pages/public/Home';
import Chat from './pages/private/chat';
import PrivateRoute from './pages/private/PrivateRoute/PrivateRoute';
import RecoveryPassword from './pages/public/RecoveryPassword';
import Contacts from './pages/private/contacts';

export default function Router() {
	return (
		<Routes>
			<Route Component={PrivateRoute}>
				<Route path="/chat" Component={Chat} />
				<Route path="/contacts" Component={Contacts} />
			</Route>

			<Route path="/" Component={Home} />
			<Route path="/recoveryPassword" Component={RecoveryPassword} />
		</Routes>
	);
}
