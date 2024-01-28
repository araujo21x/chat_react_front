import { useEffect, useState } from 'react';
import errorRequest from '../../../../../services/utils/errorRequest';
import { IMessage } from '../../../../../shared/interfaces/generic/IMessage';
import { IRoom } from '../../../../../shared/interfaces/generic/IRoom';
import roomService from '../../../../../services/room/RoomService';
import roomMapper from '../../../../../services/room/mappers/RoomMapper';
import { IRoomShowResponse } from '../../../../../shared/interfaces/room/mappers/IRoomMappers';
import { socket } from '../../../PrivateRoute/usePrivateRoute';
import { useRoom } from '../../../../../context/RoomContext';
import errorEventSocket, {
	IDataErrorSocket,
} from '../../../../../services/utils/errorEventSocket';

export type IUseUserMsg = {
	messages: IMessage[];
	handlerMessages: (msg: string) => void;
	room: IRoom | null;
};

export default function useUserMsg(): IUseUserMsg {
	const [messages, SetMessages] = useState<IMessage[]>([]);
	const { selectedRoom: room, getSelectRoom } = useRoom();
	const [newMessages, SetNewMessages] = useState<string[]>([]);

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
		function onMsgArrived(data: { message: IMessage }) {
			const myCurrenlyRoom = getSelectRoom().storage;
			if ((myCurrenlyRoom as IRoom).id === data.message.room.id) {
				SetMessages((prevStatus) => {
					const exist = prevStatus.find((msg) => msg.id === data.message.id);
					if (exist) return [...prevStatus];
					return [...prevStatus, data.message];
				});
			}
		}

		function onMsgReceived(data: { message: IMessage }) {
			const myCurrenlyRoom = getSelectRoom().storage;
			if ((myCurrenlyRoom as IRoom).id === data.message.room.id) {
				SetMessages((prevStatus) => {
					const exist = prevStatus.find((msg) => msg.id === data.message.id);
					if (exist) return [...prevStatus];
					return [...prevStatus, data.message];
				});
			}
		}

		socket.on('errorSocket', (data: IDataErrorSocket) => {
			errorEventSocket(data);
		});

		socket.on('msgArrived', onMsgArrived);
		socket.on('msgReceived', onMsgReceived);
	}, []);

	function handlerMessages(msg: string) {
		const value = {
			content: msg,
			roomId: room?.id,
			addresseeId: room?.addresseeUser?.id,
		};

		socket.emit('sendMsg', value);
	}

	return { messages, handlerMessages, room };
}
