import axios, { AxiosError } from 'axios';

interface IDataError {
	errors: string;
}

export default function (err: unknown | AxiosError) {
	if (axios.isAxiosError(err)) {
		const errorApi = err.response?.data as IDataError;
		if (!errorApi.errors) {
			alert(`Error insperado no servidor`);
		} else {
			alert(`Error: ${errorApi.errors}`);
		}
	} else {
		alert(`Error insperado no servidor`);
	}
}
