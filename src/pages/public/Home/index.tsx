import Login from './Components/Login';
import Register from './Components/Register';
import Toggle from './Components/Toggle';
import useHome from './useHome';
import waveLogin from '../../../assets/background/waveLogin.svg';
import { Container, ContentContainer, Wave } from './styles';

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
				<img src={waveLogin} alt="Onda imagem no fundo" />
			</Wave>
		</Container>
	);
}
