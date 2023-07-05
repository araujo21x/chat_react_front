import axios, { AxiosError } from 'axios';
import { toast } from '../../utils/toast';

interface IDataError {
	errors?: string;
}

export default function errorRequest(err: unknown | AxiosError) {
	if (axios.isAxiosError(err)) {
		const errorApi = err.response?.data as IDataError;

		if (!errorApi.errors) {
			toast({ text: 'Erro insperado no servidor', type: 'danger' });
		} else {
			toast({ text: errorApi.errors, type: 'danger' });
		}
	} else {
		toast({
			text: 'Erro insperado no servidor.',
			type: 'danger',
		});
	}
}
