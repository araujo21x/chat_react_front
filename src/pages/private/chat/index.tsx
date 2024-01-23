import UserList from './components/userList';
import UserMsg from './components/userMsg';
import { Container } from './styles';
import useChat from './useChat';

export default function Chat() {
	const { rooms, selectedRoom, handlerSelectRoom } = useChat();

	return (
		<Container>
			<UserList
				rooms={rooms}
				selectedRoom={selectedRoom}
				handlerSelectRoom={handlerSelectRoom}
			/>

			<UserMsg room={selectedRoom} />
		</Container>
	);
}
