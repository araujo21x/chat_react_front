import { Container } from './styles';
import xCircleIcon from '../../../assets/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/icons/check-circle.svg';

interface IToastMessage {
	text: string;
	type: 'default' | 'danger' | 'success';
}

export default function ToastMessage({ text, type }: IToastMessage) {
	return (
		<Container type={type}>
			{type === 'danger' && <img src={xCircleIcon} alt="error" />}
			{type === 'success' && <img src={checkCircleIcon} alt="success" />}
			<strong>{text}</strong>
		</Container>
	);
}
