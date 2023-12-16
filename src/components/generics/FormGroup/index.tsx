import { ReactNode } from 'react';
import { Container } from './styles';
interface IFormGroupProps {
	children: ReactNode;
	name: string;
	error?: string;
}
export default function FormGroup({ children, name, error }: IFormGroupProps) {
	return (
		<Container>
			<strong>{name}</strong>
			<div>{children}</div>
			{error && <small>{error}</small>}
		</Container>
	);
}
