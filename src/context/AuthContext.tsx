import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import { myAxiosInstance } from '../services/utils/api';
import { useNavigate } from 'react-router-dom';
import { toast } from '../utils/toast';
import loginService from '../services/LoginService';
import errorRequest from '../services/utils/errorRequest';

export interface IAuthContext {
	token: string | null;
	editToken: (token: string) => void;
	singIn: (email: string, password: string) => Promise<void>;
	logout: () => void;
}

interface IAuthContextProps {
	children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthContextProps) {
	const [token, setToken] = useState<string | null>(() => {
		const tokenTeste = localStorage.getItem('token');

		return tokenTeste;
	});

	const navigate = useNavigate();

	useEffect(() => {
		const newToken = localStorage.getItem('token');

		if (newToken) {
			setToken(newToken);
			myAxiosInstance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
		}
	}, []);

	function editToken(newToken: string): void {
		setToken(newToken);
	}

	function logout(): void {
		localStorage.removeItem('token');
		setToken(null);
		myAxiosInstance.defaults.headers.common.Authorization = undefined;
		navigate('/');
	}

	async function singIn(email: string, password: string): Promise<void> {
		try {
			const response = await loginService.post({ email, password });
			toast({ text: 'Login feito com sucesso!', type: 'success' });
			setToken(response.token);
			navigate('/toTalk');
		} catch (err) {
			errorRequest(err);
		}
	}

	return (
		<AuthContext.Provider value={{ token, editToken, logout, singIn }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth(): IAuthContext {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}
