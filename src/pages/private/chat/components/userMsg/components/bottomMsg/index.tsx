import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Form, IconContainer, Input } from './styles';
import {
	faMicrophone,
	faPaperPlane,
	faPaperclip,
} from '@fortawesome/free-solid-svg-icons';

export default function BottomMsg() {
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
