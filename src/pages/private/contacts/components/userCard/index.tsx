import { IUser } from '../../../../../shared/interfaces/generic/IUser';

import {
	Container,
	ContainerImg,
	Img,
	MainText,
	ContainerMain,
} from './styles';
import useContacts from './useUserCard';

interface IUserCardProps {
	user: IUser;
}

export default function UserCard({ user }: IUserCardProps) {
	const { openChat } = useContacts();

	return (
		<Container onClick={() => openChat(user)}>
			<ContainerImg>
				<Img src={user.image} />
			</ContainerImg>

			<ContainerMain>
				<MainText>
					<p>{user.name}</p>
				</MainText>
			</ContainerMain>
		</Container>
	);
}
