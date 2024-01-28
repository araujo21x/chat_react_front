import { IMessage } from '../../../../../../../shared/interfaces/generic/IMessage';
import { IUser } from '../../../../../../../shared/interfaces/generic/IUser';
import {
	BallonContainer,
	Container,
	ContainerMsg,
	Ballon,
	File,
	IMG,
} from './styles';
import useBodyMsg from './useBodyMsg';

interface IBodyMsg {
	messages: IMessage[];
	my: IUser;
}

export default function BodyMsg({ messages, my }: IBodyMsg) {
	const { containerRef } = useBodyMsg(messages);

	return (
		<Container>
			<ContainerMsg ref={containerRef}>
				{messages.map((msg: IMessage) => (
					<BallonContainer key={msg.id} my={my.id === msg.sender.id}>
						<Ballon my={my.id === msg.sender.id}>
							{msg.image && (
								<File>
									<IMG src={msg.image} />
								</File>
							)}
							{msg.content && <p>{msg.content}</p>}
						</Ballon>
					</BallonContainer>
				))}
			</ContainerMsg>
		</Container>
	);
}
