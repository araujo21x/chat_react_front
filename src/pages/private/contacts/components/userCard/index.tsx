import { IUser } from '../../../../../shared/interfaces/generic/IUser';

import {
	Container,
	ContainerImg,
	Img,
	MainText,
	ContainerMain,
} from './styles';

interface IUserCardProps {
	user: IUser;
}

export default function UserCard({ user }: IUserCardProps) {
	return (
		<Container>
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
