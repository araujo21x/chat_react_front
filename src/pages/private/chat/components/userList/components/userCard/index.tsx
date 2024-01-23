import TypeRoom from '../../../../../../../shared/interfaces/enum/TypeRoom';
import { IRoom } from '../../../../../../../shared/interfaces/generic/IRoom';

import {
	Container,
	ContainerImg,
	Img,
	MainText,
	MainStatus,
	Status,
	ContainerMain,
} from './styles';

interface IUserCardProps {
	room: IRoom;
	selectedRoom: IRoom | null;
	handlerSelectRoom: (id: IRoom | null) => void;
}

export default function UserCard({
	room,
	selectedRoom,
	handlerSelectRoom,
}: IUserCardProps) {
	return (
		<Container
			onClick={() => handlerSelectRoom(room)}
			isSelected={selectedRoom ? selectedRoom.id === room.id : false}
		>
			<ContainerImg>
				<Img src={room.image ? room.image : room.addresseeUser?.image} />
			</ContainerImg>
			<ContainerMain>
				<MainText>
					<p>{room.name ? room.name : room.addresseeUser?.name}</p>
				</MainText>
				{room.type === TypeRoom.PRIVATE && (
					<MainStatus>
						<Status
							online={
								room.addresseeUser?.online ? room.addresseeUser?.online : false
							}
						/>
					</MainStatus>
				)}
			</ContainerMain>
		</Container>
	);
}
