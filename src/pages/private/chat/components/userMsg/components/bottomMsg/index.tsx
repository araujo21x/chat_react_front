import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Form, IconContainer, Input } from './styles';
import {
	faMicrophone,
	faPaperPlane,
	faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import useBodyMsg from './useBodyMsg';

interface IBottomMsg {
	handlerMessages: (msg: string) => void;
}

export default function BottomMsg({ handlerMessages }: IBottomMsg) {
	const { msg, handlerMsgChange, handlerSubmit } = useBodyMsg(handlerMessages);

	return (
		<Container>
			<IconContainer>
				<FontAwesomeIcon icon={faPaperclip} />
			</IconContainer>

			<Form>
				<Input
					type="text"
					value={msg}
					onChange={handlerMsgChange}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault();
							handlerSubmit();
						}
					}}
				/>
			</Form>

			<IconContainer>
				{true && (
					<div onClick={() => handlerSubmit()}>
						<FontAwesomeIcon icon={faPaperPlane} />
					</div>
				)}
				{false && <FontAwesomeIcon icon={faMicrophone} />}
			</IconContainer>
		</Container>
	);
}
