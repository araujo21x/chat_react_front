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
import useReset from './useReset';
interface IResetPassword {
	token: string | null;
}
export default function Reset({ token }: IResetPassword) {
	const {
		password,
		handlerPasswordChange,
		handlerSubmit,
		isFormValid,
		getErrorByField,
		isLoading,
		handlerToHome,
	} = useReset({ token });

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

					<Button onClick={handlerToHome}>Voltar</Button>
				</SectionButtons>
			</Form>
		</Container>
	);
}
