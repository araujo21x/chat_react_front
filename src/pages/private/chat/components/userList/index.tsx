import { IRoom } from '../../../../../shared/interfaces/generic/IRoom';
import UserCard from './components/userCard';
import { Container, List } from './styles';

interface IUserListProps {
	rooms: IRoom[];
	selectedRoom: IRoom | null;
	handlerSelectRoom: (id: IRoom | null) => void;
}

export default function UserList({
	rooms,
	selectedRoom,
	handlerSelectRoom,
}: IUserListProps) {
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
