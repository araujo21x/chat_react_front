import BodyMsg from './components/bodyMsg';
import BottomMsg from './components/bottomMsg';
import HeaderMsg from './components/headerMsg';
import { Container, ContainerNotFound } from './styles';
import useUserMsg from './useUserMsg';

export default function UserMsg() {
	const { messages, handlerMessages, room } = useUserMsg();

	return room ? (
		<Container>
			<HeaderMsg room={room} />
			<BodyMsg messages={messages} my={room.myUser} />
			<BottomMsg handlerMessages={handlerMessages} />
		</Container>
	) : (
		<ContainerNotFound>
			<h1>Selecione um chat para ver as conversas</h1>
		</ContainerNotFound>
	);
}
