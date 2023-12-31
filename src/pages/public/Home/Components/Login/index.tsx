import FormGroup from '../../../../../components/generics/FormGroup';
import Loader from '../../../../../components/generics/Loader';
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
		handlerClickRecoveryPassword,
	} = useLogin();

	return (
		<Container>
			<Loader isLoading={isLoading} />
			<Form onSubmit={handlerSubmit}>
				<FormGroup name="Email" error={getErrorByField('email')}>
					<Input
						value={email}
						type="email"
						error={getErrorByField('email')}
						onChange={handlerEmailChange}
					/>
				</FormGroup>

				<FormGroup name="Senha" error={getErrorByField('password')}>
					<Input
						value={password}
						type="password"
						error={getErrorByField('password')}
						onChange={handlerPasswordChange}
					/>
				</FormGroup>

				<Button type="submit" disabled={!isFormValid}>
					Login
				</Button>
			</Form>

			<Button type="submit" onClick={handlerClickRecoveryPassword}>
				Recuperar senha
			</Button>
		</Container>
	);
}
