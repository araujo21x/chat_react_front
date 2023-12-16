import { AxiosResponse } from 'axios';
import myAxiosInstance from '../../lib/axios';
import forgotPasswordMappers from './mappers/ForgotPasswordMappers';
import resetPasswordMappers from './mappers/ResetPasswordMappers';
import { IResetPasswordBody } from '../../shared/interfaces/user/INoAuthUserInterface';

class NoAuthService {
	public createUser(data: FormData): Promise<AxiosResponse> {
		return myAxiosInstance.post('/v1/noAuth/user', data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	}

	public forgotPassword(data: string): Promise<AxiosResponse> {
		return myAxiosInstance.post(
			'/v1/noAuth/password/forgot',
			forgotPasswordMappers.toPersistence(data)
		);
	}

	public resetPassword(data: IResetPasswordBody): Promise<AxiosResponse> {
		return myAxiosInstance.post(
			'/v1/noAuth/password/reset',
			resetPasswordMappers.toPersistence(data)
		);
	}
}

export default new NoAuthService();
