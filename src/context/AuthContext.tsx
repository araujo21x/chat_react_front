import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from '../utils/toast';
import loginService from '../services/session/SessionService';
import errorRequest from '../services/utils/errorRequest';
import myAxiosInstance from '../lib/axios';
import { IAuth, IUserAuth } from '../shared/interfaces/session/IAuthInterfaces';
import loginMappers from '../services/session/mappers/LoginMappers';
import { IAuthResponse } from '../shared/interfaces/session/mappers/IAuthMappers';

export interface IAuthContext {
	auth: IAuth | null;
	editAuth: (data: IAuth) => void;
	singIn: (email: string, password: string) => Promise<void>;
	logout: () => void;
}

interface IAuthContextProps {
	children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthContextProps) {
	const [auth, setAuth] = useState<IAuth | null>(() => {
		const token = localStorage.getItem('token');
		const user = localStorage.getItem('user');
		if (!token || !user) return null;

		return { token, user: JSON.parse(user) as IUserAuth };
	});

	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		const user = localStorage.getItem('user');

		if (token && user) {
			setAuth({ token, user: JSON.parse(user) as IUserAuth });
			myAxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
		}
	}, []);

	function editAuth(data: IAuth): void {
		setAuth(data);
	}

	function logout(): void {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setAuth(null);
		myAxiosInstance.defaults.headers.common.Authorization = undefined;
		navigate('/');
	}

	async function singIn(email: string, password: string): Promise<void> {
		try {
			const response = await loginService.post({ email, password });
			const data: IAuth = loginMappers.toDomain(response.data as IAuthResponse);

			toast({ text: 'Login feito com sucesso!', type: 'success' });
			setAuth(data);

			localStorage.setItem('token', data.token);
			localStorage.setItem('user', JSON.stringify(data.user));

			navigate('/chat');
		} catch (err) {
			const isUnauthorized = errorRequest(err);
			if (isUnauthorized) logout();
		}
	}

	return (
		<AuthContext.Provider value={{ auth, editAuth, logout, singIn }}>
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
