import { IResponseMsgDefault } from '../../shared/interfaces/IDefaultMsg';
import { ICreateUserResponse } from '../../shared/interfaces/mappers/INoAuthUserMappers';

class CreateUserMappers {
	toDomain(persistent: ICreateUserResponse): IResponseMsgDefault {
		return {
			message: persistent.message,
		};
	}
}

export default new CreateUserMappers();
