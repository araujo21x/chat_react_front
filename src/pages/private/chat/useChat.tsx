import { useEffect, useState } from 'react';
import { IRoom } from '../../../shared/interfaces/generic/IRoom';
import errorRequest from '../../../services/utils/errorRequest';
import roomService from '../../../services/room/RoomService';
import roomMapper from '../../../services/room/mappers/RoomMapper';
import { IRoomIndexResponse } from '../../../shared/interfaces/room/mappers/IRoomMappers';

export type IUseChat = {
	rooms: IRoom[];
	selectedUserId: number | null;
	handlerSelectUserId: (id: number | null) => void;
};

export default function useChat(): IUseChat {
	const [rooms, setRooms] = useState<IRoom[]>([]);
	const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

	function handlerSelectUserId(id: number | null) {
		setSelectedUserId((prevState: number | null) => (prevState = id));
	}

	useEffect(() => {
		async function loadRoom() {
			try {
				const response = await roomService.index({ paginate: 'not' });
				const data = roomMapper.toDomain(response.data as IRoomIndexResponse);
				setRooms(data.rooms);
			} catch (err) {
				errorRequest(err);
			}
		}

		loadRoom();
	}, []);

	return { rooms, selectedUserId, handlerSelectUserId };
}
