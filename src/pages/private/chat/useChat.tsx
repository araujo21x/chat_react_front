import { useEffect, useState } from 'react';
import { IRoom } from '../../../shared/interfaces/generic/IRoom';
import errorRequest from '../../../services/utils/errorRequest';
import roomService from '../../../services/room/RoomService';
import roomMapper from '../../../services/room/mappers/RoomMapper';
import { IRoomIndexResponse } from '../../../shared/interfaces/room/mappers/IRoomMappers';

export type IUseChat = {
	rooms: IRoom[];
	selectedRoom: IRoom | null;
	handlerSelectRoom: (id: IRoom | null) => void;
};

export default function useChat(): IUseChat {
	const [rooms, setRooms] = useState<IRoom[]>([]);
	const [selectedRoom, setSelectedRoom] = useState<IRoom | null>(null);

	function handlerSelectRoom(room: IRoom | null) {
		setSelectedRoom((prevState: IRoom | null) => (prevState = room));
	}

	useEffect(() => {
		async function loadRoom() {
			try {
				const response = await roomService.index({ paginate: 'not' });
				const data = roomMapper.toDomainIndex(
					response.data as IRoomIndexResponse
				);
				setRooms(data.rooms);
			} catch (err) {
				errorRequest(err);
			}
		}

		loadRoom();
	}, []);

	return { rooms, selectedRoom, handlerSelectRoom };
}
