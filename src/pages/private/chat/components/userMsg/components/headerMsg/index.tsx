import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Container,
	ImgContainer,
	Img,
	MainContainer,
	Center,
	Title,
	Options,
} from './styles';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export default function HeaderMsg() {
	return (
		<Container>
			<ImgContainer>
				<Img />
			</ImgContainer>
			<MainContainer>
				<Center>
					<Title>Nome de teste</Title>
				</Center>
				<Options>
					<FontAwesomeIcon icon={faGear} size="xl" />
				</Options>
			</MainContainer>
		</Container>
	);
}
