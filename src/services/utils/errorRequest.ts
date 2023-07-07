/* eslint-disable react-hooks/rules-of-hooks */
import axios, { AxiosError } from 'axios';
import { toast } from '../../utils/toast';
import { useAuth } from '../../context/AuthContext';

interface IDataError {
	errors?: string;
}

export default function errorRequest(err: unknown | AxiosError) {
	const { logout } = useAuth();
	if (axios.isAxiosError(err)) {
		const errorApi = err.response?.data as IDataError;

		if (!errorApi.errors) {
			toast({ text: 'Erro insperado no servidor', type: 'danger' });
		} else {
			toast({ text: errorApi.errors, type: 'danger' });

			if (err.response?.status === 401) {
				logout();
			}
		}
	} else {
		toast({
			text: 'Erro insperado no servidor.',
			type: 'danger',
		});
	}
}
