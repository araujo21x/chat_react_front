import UserList from './components/userList';
import UserMsg from './components/userMsg';
import { Container } from './styles';
import useChat from './useChat';

export default function Chat() {
	const { rooms, selectedUserId, handlerSelectUserId } = useChat();

	return (
		<Container>
			<UserList
				rooms={rooms}
				selectedUserId={selectedUserId}
				handlerSelectUserId={handlerSelectUserId}
			/>
			<UserMsg />
		</Container>
	);
}
