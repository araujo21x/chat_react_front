/* eslint-disable react-hooks/rules-of-hooks */
import axios, { AxiosError } from 'axios';
import { toast } from '../../utils/toast';

interface IDataError {
	errors?: string;
}

export default function errorRequest(err: unknown | AxiosError) {
	const IS_UNAUTHORIZED = false;
	console.log(err);
	if (!axios.isAxiosError(err)) {
		toast({ text: 'Erro interno na conexão com o servidor!', type: 'danger' });
		return IS_UNAUTHORIZED;
	}

	if (err.code === 'ERR_NETWORK') {
		toast({ text: 'Erro insperado no servidor!', type: 'danger' });
		return IS_UNAUTHORIZED;
	}

	const errorApi = err.response?.data as IDataError;
	if (!errorApi.errors) {
		toast({ text: 'Erro insperado no servidor!', type: 'danger' });
		return IS_UNAUTHORIZED;
	}

	toast({ text: errorApi.errors, type: 'danger' });

	return err.response?.status === 401 ? true : IS_UNAUTHORIZED;
}
