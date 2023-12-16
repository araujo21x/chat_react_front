import { AxiosResponse } from 'axios';
import myAxiosInstance from '../../lib/axios';
import { ILoginBody } from '../../shared/interfaces/session/IAuthInterfaces';
import loginMappers from './mappers/LoginMappers';

class SessionService {
	public post(data: ILoginBody): Promise<AxiosResponse> {
		return myAxiosInstance.post(
			'/v1/sessions/standard',
			loginMappers.toPersistence(data)
		);
	}
}

export default new SessionService();
