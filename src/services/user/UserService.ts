import { AxiosResponse } from 'axios';
import myAxiosInstance from '../../lib/axios';
import userMapper from './mappers/UserMapper';
import { IUserIndexRequest } from '../../shared/interfaces/user/IUserInterfaces';

class UserService {
	public index(data: IUserIndexRequest): Promise<AxiosResponse> {
		const params = userMapper.toPersistenceIndex(data);
		return myAxiosInstance.get('/v1/user/user', { params });
	}
}

export default new UserService();
