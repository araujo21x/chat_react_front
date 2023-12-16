import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import Router from './Router';
import ToastContainer from './components/generics/Toast/ToastContainer';
import { AuthProvider } from './context/AuthContext';

export default function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<ThemeProvider theme={defaultTheme}>
					<GlobalStyles />
					<ToastContainer />
					<Router />
				</ThemeProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}
