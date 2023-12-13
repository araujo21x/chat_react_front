import { ReactNode } from 'react';
import { Container, Img } from './styles';
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
			<Img src={img ?? ''} alt="Preview" />

			{children}
			{error && <small>{error}</small>}
		</Container>
	);
}
