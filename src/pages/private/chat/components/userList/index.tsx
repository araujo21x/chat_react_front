import { IRoom } from '../../../../../shared/interfaces/generic/IRoom';
import UserCard from './components/userCard';
import { Container, List } from './styles';
interface IUserListProps {
	rooms: IRoom[];
}

export default function UserList({ rooms }: IUserListProps) {
	return (
		<Container>
			<List>
				{rooms.map((room) => {
					return <UserCard key={room.id} room={room} />;
				})}
			</List>
		</Container>
	);
}
