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
import { IRoom } from '../../../../../../../shared/interfaces/generic/IRoom';
import useHeaderMsg from './useHeaderMsg';
import DefaultImgUser from '../../../../../../../assets/images/user-icon.png';

interface IHeaderMsg {
	room: IRoom;
}

export default function HeaderMsg({ room }: IHeaderMsg) {
	const { getDataRoom } = useHeaderMsg();

	const data = getDataRoom(room);

	return (
		<Container>
			<ImgContainer>
				<Img src={data.img ? data.img : DefaultImgUser} />
			</ImgContainer>
			<MainContainer>
				<Center>
					<Title>{data.name}</Title>
				</Center>
				<Options>
					<FontAwesomeIcon icon={faGear} size="xl" />
				</Options>
			</MainContainer>
		</Container>
	);
}
