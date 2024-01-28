import { IUser } from '../../../shared/interfaces/generic/IUser';
import {
	IUserIndex,
	IUserIndexRequest,
	IUserIndexResponse,
} from '../../../shared/interfaces/user/IUserInterfaces';

class UserMapper {
	toPersistenceIndex(domain: IUserIndexRequest): IUserIndexRequest {
		const params: IUserIndexRequest = {};

		if (domain.name && domain.name !== '') params.name = domain.name;
		if (domain.paginate) params.paginate = domain.paginate;
		if (domain.limit) params.limit = domain.limit;
		if (domain.page) params.page = domain.page;

		return params;
	}

	toDomainIndex(persistent: IUserIndexResponse): IUserIndex {
		return {
			count: persistent.countUsers,
			users: persistent.users.map((user): IUser => {
				return {
					id: user.id,
					image: user.image,
					imageKey: user.imageKey,
					name: user.name,
					email: user.email,
					status: user.status,
					type: user.type,
					createdAt: user.createdAt,
					updatedAt: user.updatedAt,
				};
			}),
		};
	}
}

export default new UserMapper();
