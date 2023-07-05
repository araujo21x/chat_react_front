import { myAxiosInstance } from './utils/api';

interface ILoginBody {
	email: string;
	password: string;
}

interface ILoginResponse {
	token: string;
	user: {};
}

class LoginService {
	public post(data: ILoginBody): Promise<ILoginResponse> {
		return myAxiosInstance.post('/v1/sessions/standard', data);
	}
}

export default new LoginService();
