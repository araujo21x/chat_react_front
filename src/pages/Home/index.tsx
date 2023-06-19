import Login from './Components/Login';
import Register from './Components/Register';
import Toggle from './Components/Toggle';
import { Container, ContentContainer, Wave } from './styles';
import useHome from './useHome';
import waveLogin from '../../assets/waveTeste.svg';

export default function Home() {
	const { homeTemplate, handleToggleHomeTemplate } = useHome();
	const Template = homeTemplate === 'login' ? Login : Register;

	return (
		<Container>
			<ContentContainer>
				<Toggle
					homeTemplate={homeTemplate}
					onToggle={handleToggleHomeTemplate}
				/>

				<Template />
			</ContentContainer>

			<Wave>
				<img src={waveLogin} />
			</Wave>
		</Container>
	);
}
