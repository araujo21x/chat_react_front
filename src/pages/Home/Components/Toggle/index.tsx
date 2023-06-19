import { IHomeTemplate } from '../../useHome';
import { Container, ContainerText, StyledLabel, Text } from './styles';

interface IToggleHomeProps {
	homeTemplate: IHomeTemplate;
	onToggle: () => void;
}

export default function Toggle({ homeTemplate, onToggle }: IToggleHomeProps) {
	const switchValue = homeTemplate === 'login';

	function handleOnChange() {
		onToggle();
	}

	return (
		<Container>
			<ContainerText>
				<Text checked={switchValue}>Login</Text>
				<Text checked={!switchValue}>Cadastro</Text>
			</ContainerText>

			<StyledLabel checked={switchValue}>
				<input
					checked={switchValue}
					type="checkbox"
					onChange={handleOnChange}
				/>
			</StyledLabel>
		</Container>
	);
}
