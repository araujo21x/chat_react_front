import axios, { AxiosError, AxiosInstance } from 'axios';
import BaseURL from './utils/BaseURL';
import ErrorRequest from './utils/errorRequest';

interface ILoginBody {
	email: string;
	password: string;
}

class LoginService {
	private instance: AxiosInstance = axios.create({ baseURL: BaseURL });

	public async post(data: ILoginBody, authToken?: string) {
		try {
			const answer = await this.instance.post('/v1/sessions/standard', data, {
				headers: { Authorization: authToken ? authToken : undefined },
			});

			return answer;
		} catch (err: unknown | AxiosError) {
			ErrorRequest(err);
		}
	}
}

export default new LoginService();
