import UserCard from './components/userCard';
import { Container, List } from './styles';

export default function UserList() {
	return (
		<Container>
			<List>
				<UserCard />
				<UserCard />
				<UserCard />
			</List>
		</Container>
	);
}
