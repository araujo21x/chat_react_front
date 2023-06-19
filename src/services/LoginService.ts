import axios, { AxiosInstance } from 'axios';
import BaseURL from './utils/BaseURL';
import errorRequest from './utils/errorRequest';

interface ILoginBody {
	email: string;
	password: string;
}

interface ILoginResponse {
	token: string;
	user: {};
}

class LoginService {
	private instance: AxiosInstance = axios.create({ baseURL: BaseURL });

	public async post(data: ILoginBody): Promise<ILoginResponse | undefined> {
		try {
			const response = await this.instance.post('/v1/sessions/standard', data);

			return response.data as ILoginResponse;
		} catch (err: unknown) {
			errorRequest(err);
		}
	}
}

export default new LoginService();
