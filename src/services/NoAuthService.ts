import { AxiosResponse } from 'axios';
import myAxiosInstance from '../lib/axios';

class NoAuthService {
	public createUser(data: FormData): Promise<AxiosResponse> {
		return myAxiosInstance.post('/v1/noAuth/user', data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	}
}

export default new NoAuthService();
