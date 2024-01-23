import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Form, IconContainer, Input } from './styles';
import {
	faMicrophone,
	faPaperPlane,
	faPaperclip,
} from '@fortawesome/free-solid-svg-icons';

interface IBottomMsg {
	handlerMessages: (msg: string) => void;
}

export default function BottomMsg({ handlerMessages }: IBottomMsg) {
	return (
		<Container>
			<IconContainer>
				<FontAwesomeIcon icon={faPaperclip} />
			</IconContainer>

			<Form>
				<Input type="text" />
			</Form>

			<IconContainer>
				{true && <FontAwesomeIcon icon={faPaperPlane} />}
				{false && <FontAwesomeIcon icon={faMicrophone} />}
			</IconContainer>
		</Container>
	);
}
