import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/chat';
import PrivateRoute from './utils/PrivateRoute';
import Chat2 from './pages/chat2';

export default function Router() {
	return (
		<Routes>
			<Route Component={PrivateRoute}>
				<Route path="/chat" Component={Chat} />
				<Route path="/chat2" Component={Chat2} />
			</Route>

			<Route path="/" Component={Home} />
		</Routes>
	);
}
