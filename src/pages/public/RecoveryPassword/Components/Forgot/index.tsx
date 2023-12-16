import FormGroup from '../../../../../components/generics/FormGroup';
import Loader from '../../../../../components/generics/Loader';
import {
	Container,
	Form,
	Input,
	Button,
	SectionInputs,
	SectionButtons,
} from './styles';
import useForgot from './useForgot';

export default function Forgot() {
	const {
		email,
		handlerEmailChange,
		handlerSubmit,
		isFormValid,
		getErrorByField,
		isLoading,
		handlerToHome,
	} = useForgot();

	return (
		<Container>
			<Loader isLoading={isLoading} />
			<h2>Recuperar senha</h2>

			<Form onSubmit={handlerSubmit}>
				<SectionInputs>
					<FormGroup name="Email" error={getErrorByField('email')}>
						<Input
							value={email}
							type="email"
							error={getErrorByField('email')}
							onChange={handlerEmailChange}
						/>
					</FormGroup>
				</SectionInputs>

				<SectionButtons>
					<Button type="submit" disabled={!isFormValid}>
						Recuperar Senha
					</Button>

					<Button onClick={handlerToHome}>Voltar</Button>
				</SectionButtons>
			</Form>
		</Container>
	);
}
