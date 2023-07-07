import { Container } from './styles';
import xCircleIcon from '../../../assets/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/icons/check-circle.svg';
import { useEffect } from 'react';
import IToast from '../../../shared/interfaces/IToast';

interface IToastMessage {
	message: IToast;
	onRemoveMessage: (id: number) => void;
}

export default function ToastMessage({
	onRemoveMessage,
	message,
}: IToastMessage) {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			onRemoveMessage(message.id as number);
		}, message.duration || 5000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [message, onRemoveMessage]);

	function handlerRemoveToast() {
		onRemoveMessage(message.id as number);
	}

	return (
		<Container type={message.type} onClick={handlerRemoveToast}>
			{message.type === 'danger' && <img src={xCircleIcon} alt="error" />}
			{message.type === 'success' && (
				<img src={checkCircleIcon} alt="success" />
			)}
			<strong>{message.text}</strong>
		</Container>
	);
}
