import { useRoom } from '../../../../../context/RoomContext';
import { IRoom } from '../../../../../shared/interfaces/generic/IRoom';
import UserCard from './components/userCard';
import { Container, List } from './styles';

interface IUserListProps {
	rooms: IRoom[];
}

export default function UserList({ rooms }: IUserListProps) {
	const { selectedRoom, handlerSelectRoom } = useRoom();

	return (
		<Container>
			<List>
				{rooms.map((room) => {
					return (
						<UserCard
							key={room.id}
							room={room}
							selectedRoom={selectedRoom}
							handlerSelectRoom={handlerSelectRoom}
						/>
					);
				})}
			</List>
		</Container>
	);
}
