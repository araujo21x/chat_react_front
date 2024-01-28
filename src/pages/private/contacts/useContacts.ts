import { useEffect, useState } from 'react';
import { IUser } from '../../../shared/interfaces/generic/IUser';
import userService from '../../../services/user/UserService';
import userMapper from '../../../services/user/mappers/UserMapper';
import { IUserIndexResponse } from '../../../shared/interfaces/user/IUserInterfaces';
import errorRequest from '../../../services/utils/errorRequest';

export default function useContacts() {
	const [users, setUsers] = useState<IUser[]>([]);

	async function filterUsers(name?: string) {
		try {
			const response = await userService.index({ paginate: 'not', name });
			const data = userMapper.toDomainIndex(
				response.data as IUserIndexResponse
			);

			setUsers(data.users);
		} catch (err) {
			errorRequest(err);
		}
	}

	useEffect(() => {
		filterUsers();
	}, []);

	return { users, filterUsers };
}
