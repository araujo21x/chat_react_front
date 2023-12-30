import BodyMsg from './components/bodyMsg';
import BottomMsg from './components/bottomMsg';
import HeaderMsg from './components/headerMsg';
import { Container } from './styles';

export default function UserMsg() {
	return (
		<Container>
			<HeaderMsg />
			<BodyMsg />
			<BottomMsg />
		</Container>
	);
}
