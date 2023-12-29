import UserList from './components/userList';
import UserMsg from './components/userMsg';
import { Container } from './styles';

export default function Chat() {
	return (
		<Container>
			<UserList />
			<UserMsg />
		</Container>
	);
}
