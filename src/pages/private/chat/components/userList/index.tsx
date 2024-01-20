import { IRoom } from '../../../../../shared/interfaces/generic/IRoom';
import UserCard from './components/userCard';
import { Container, List } from './styles';
interface IUserListProps {
	rooms: IRoom[];
	selectedUserId: number | null;
	handlerSelectUserId: (id: number | null) => void;
}

export default function UserList({
	rooms,
	selectedUserId,
	handlerSelectUserId,
}: IUserListProps) {
	return (
		<Container>
			<List>
				{rooms.map((room) => {
					return (
						<UserCard
							key={room.id}
							room={room}
							selectedUserId={selectedUserId}
							handlerSelectUserId={handlerSelectUserId}
						/>
					);
				})}
			</List>
		</Container>
	);
}
