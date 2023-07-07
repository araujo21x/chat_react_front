import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/chat';
import PrivateRoute from './utils/PrivateRoute';

export default function Router() {
	return (
		<Routes>
			<Route Component={PrivateRoute}>
				<Route path="/chat" Component={Chat} />
			</Route>

			<Route path="/" Component={Home} />
		</Routes>
	);
}
