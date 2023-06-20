import { useState } from 'react';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
	const [messages] = useState([
		{ id: Math.random(), text: 'Default', type: 'default' },
		{ id: Math.random(), text: 'Error', type: 'danger' },
		{ id: Math.random(), text: 'Success', type: 'success' },
	]);

	return (
		<Container>
			{messages.map((message) => (
				<ToastMessage
					key={message.id}
					text={message.text}
					type={message.type as 'default' | 'danger' | 'success'}
				/>
			))}
		</Container>
	);
}
