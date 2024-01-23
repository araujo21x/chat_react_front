import { useEffect, useState } from 'react';
import errorRequest from '../../../../../services/utils/errorRequest';
import { IMessage } from '../../../../../shared/interfaces/generic/IMessage';
import { IRoom } from '../../../../../shared/interfaces/generic/IRoom';
import roomService from '../../../../../services/room/RoomService';
import roomMapper from '../../../../../services/room/mappers/RoomMapper';
import { IRoomShowResponse } from '../../../../../shared/interfaces/room/mappers/IRoomMappers';
import { socket } from '../../../PrivateRoute/usePrivateRoute';
import teste0101 from './teste';

export type IUseUserMsg = {
	messages: IMessage[];
	handlerMessages: (msg: string) => void;
};

export default function useUserMsg(room: IRoom | null): IUseUserMsg {
	const [messages, SetMessages] = useState<IMessage[]>([]);
	teste0101(room);
	useEffect(() => {
		async function loadMessages() {
			try {
				const response = await roomService.show((room as IRoom).id);
				const data = roomMapper.toDomainShow(
					response.data as IRoomShowResponse
				);
				SetMessages(data.messages);
			} catch (err) {
				errorRequest(err);
			}
		}

		if (room) loadMessages();
	}, [room]);

	useEffect(() => {
		socket.on('msgArrived', (data) => {
			const teste01 = teste0101();
			if (teste01.id === data.message.room.id) {
				SetMessages((prevStatus) => {
					return [...prevStatus, data.message];
				});
			}
		});
	}, []);

	function handlerMessages(msg: string) {}

	return { messages, handlerMessages };
}
