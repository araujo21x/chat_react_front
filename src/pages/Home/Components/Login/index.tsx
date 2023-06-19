import FormGroup from '../../../../components/FormGroup';
import Loader from '../../../../components/Loader';
import { Container, Form, Input, Button } from './styles';
import useLogin from './useLogin';

export default function Login() {
	const {
		email,
		handlerEmailChange,
		password,
		handlerPasswordChange,
		isFormValid,
		handlerSubmit,
		getErrorByField,
		isLoading,
	} = useLogin();

	return (
		<Container>
			<Loader isLoading={isLoading} />
			<Form onSubmit={handlerSubmit}>
				<FormGroup name="Email" error={getErrorByField('email')}>
					<Input
						value={email}
						error={getErrorByField('email')}
						onChange={handlerEmailChange}
					/>
				</FormGroup>

				<FormGroup name="Senha" error={getErrorByField('password')}>
					<Input
						value={password}
						error={getErrorByField('password')}
						onChange={handlerPasswordChange}
					/>
				</FormGroup>

				<Button type="submit" disabled={!isFormValid}>
					Login
				</Button>
			</Form>
			<Button type="submit">Recuperar senha</Button>
		</Container>
	);
}
