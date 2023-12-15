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
import useReset from './useReset';

export default function Reset() {
	const {
		password,
		handlerPasswordChange,
		handlerSubmit,
		isFormValid,
		getErrorByField,
		isLoading,
	} = useReset();

	return (
		<Container>
			<Loader isLoading={isLoading} />
			<h2>Trocar senha</h2>

			<Form onSubmit={handlerSubmit}>
				<SectionInputs>
					<FormGroup name="Senha" error={getErrorByField('password')}>
						<Input
							value={password}
							type="password"
							error={getErrorByField('password')}
							onChange={handlerPasswordChange}
						/>
					</FormGroup>
				</SectionInputs>

				<SectionButtons>
					<Button type="submit" disabled={!isFormValid}>
						Trocar a senha
					</Button>
				</SectionButtons>
			</Form>
		</Container>
	);
}
