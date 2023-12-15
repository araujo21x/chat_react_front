import Forgot from './Components/Forgot';
import { Container, ContentContainer, Wave } from './styles';
import waveLogin from '../../assets/background/waveLogin.svg';
import useRecoveryPassword from './useRecoveryPassword';
import Reset from './Components/Reset';

export default function RecoveryPassword() {
	const { typeTemplate } = useRecoveryPassword();
	const Template = typeTemplate === 'forgot' ? Forgot : Reset;

	return (
		<Container>
			<ContentContainer>
				<Template />
			</ContentContainer>

			<Wave>
				<img src={waveLogin} alt="Onda imagem no fundo" />
			</Wave>
		</Container>
	);
}
