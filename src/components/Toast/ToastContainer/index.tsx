/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback, useEffect, useState } from 'react';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';
import IToast from '../../../utils/types/event/IToast';
import { toastEventManager } from '../../../utils/toast';

export default function ToastContainer() {
	const [messages, setMessages] = useState<IToast[]>([]);

	useEffect(() => {
		function handlerAddToast(payload: IToast) {
			setMessages((prevState: IToast[]) => [
				...prevState,
				{ id: Math.random(), ...payload },
			]);
		}

		toastEventManager.on('addtoast', handlerAddToast);

		return () => {
			toastEventManager.removeListener('addtoast', handlerAddToast);
		};
	}, []);

	const handlerRemoveMessage = useCallback((id: number) => {
		setMessages((prevState: IToast[]) =>
			prevState.filter((message: IToast) => message.id !== id)
		);
	}, []);

	return (
		<Container>
			{messages.map((message) => (
				<ToastMessage
					key={message.id}
					onRemoveMessage={handlerRemoveMessage}
					message={message}
				/>
			))}
		</Container>
	);
}
