import { IResponseMsgDefault } from '../../../shared/interfaces/IDefaultMsg';
import {
	IForgotPasswordRequest,
	IForgotPasswordResponse,
} from '../../../shared/interfaces/user/mappers/INoAuthUserMappers';

class ForgotPasswordMappers {
	toPersistence(domain: string): IForgotPasswordRequest {
		return {
			email: domain,
		};
	}

	toDomain(persistent: IForgotPasswordResponse): IResponseMsgDefault {
		return {
			message: persistent.message,
		};
	}
}

export default new ForgotPasswordMappers();
