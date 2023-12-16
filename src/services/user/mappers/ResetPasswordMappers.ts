import { IResponseMsgDefault } from '../../../shared/interfaces/IDefaultMsg';
import { IResetPasswordBody } from '../../../shared/interfaces/user/INoAuthUserInterface';
import {
	IResetPasswordRequest,
	IResetPasswordResponse,
} from '../../../shared/interfaces/user/mappers/INoAuthUserMappers';

class ResetPasswordMappers {
	toPersistence(domain: IResetPasswordBody): IResetPasswordRequest {
		return {
			password: domain.password,
			code: domain.token,
		};
	}

	toDomain(persistent: IResetPasswordResponse): IResponseMsgDefault {
		return {
			message: persistent.message,
		};
	}
}

export default new ResetPasswordMappers();
