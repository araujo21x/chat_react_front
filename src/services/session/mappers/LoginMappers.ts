import {
	IAuth,
	ILoginBody,
} from '../../../shared/interfaces/session/IAuthInterfaces';
import {
	IAuthRequest,
	IAuthResponse,
} from '../../../shared/interfaces/session/mappers/IAuthMappers';

class LoginMapper {
	toPersistence(domain: ILoginBody): IAuthRequest {
		return {
			email: domain.email,
			password: domain.password,
		};
	}

	toDomain(persistent: IAuthResponse): IAuth {
		return {
			token: persistent.token,
			user: {
				id: persistent.user.id,
				image: persistent.user.image,
				name: persistent.user.name,
				email: persistent.user.email,
				status: persistent.user.status,
				type: persistent.user.type,
				createdAt: persistent.user.createdAt,
				updatedAt: persistent.user.updatedAt,
			},
		};
	}
}

export default new LoginMapper();
