import { ReactNode } from 'react';
import { Container, Img } from './styles';
import userIcon from '../../../assets/images/user-icon.png';

interface IFormGroupProps {
	children: ReactNode;
	name: string;
	error?: string;
	img: string | null;
}
export default function FormGroupImg({
	children,
	img,
	error,
}: IFormGroupProps) {
	return (
		<Container>
			<Img src={img ?? userIcon} alt="Preview" />

			{children}
			{error && <small>{error}</small>}
		</Container>
	);
}
