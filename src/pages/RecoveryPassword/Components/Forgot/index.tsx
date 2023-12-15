import FormGroup from '../../../../components/FormGroup';
import Loader from '../../../../components/Loader';
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
				</SectionButtons>
			</Form>
		</Container>
	);
}
