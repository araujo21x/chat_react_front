import { useNavigate } from 'react-router-dom';
import { IUser } from '../../../../../shared/interfaces/generic/IUser';
import errorRequest from '../../../../../services/utils/errorRequest';
import roomService from '../../../../../services/room/RoomService';
import { IRoomCreate } from '../../../../../shared/interfaces/room/IRoomInterfaces';
import roomMapper from '../../../../../services/room/mappers/RoomMapper';
import { IRoomCreateResponse } from '../../../../../shared/interfaces/room/mappers/IRoomMappers';

export default function useContacts() {
	const navigate = useNavigate();

	async function openChat(user?: IUser) {
		try {
			if (!user) return null;
			const response = await roomService.create(user.id);
			const data: IRoomCreate = roomMapper.toDomainCreate(
				response.data as IRoomCreateResponse
			);

			localStorage.setItem('selectedRoom', JSON.stringify(data.room));
			navigate('/chat');
			window.location.reload();
		} catch (err) {
			errorRequest(err);
		}
	}

	return { openChat };
}
