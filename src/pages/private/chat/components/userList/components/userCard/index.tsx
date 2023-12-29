import {
	Container,
	ContainerImg,
	Img,
	MainText,
	MainStatus,
	Status,
	ContainerMain,
} from './styles';

export default function UserCard() {
	return (
		<Container>
			<ContainerImg>
				<Img />
			</ContainerImg>
			<ContainerMain>
				<MainText>Nome de teste</MainText>
				<MainStatus>
					<Status />
				</MainStatus>
			</ContainerMain>
		</Container>
	);
}
