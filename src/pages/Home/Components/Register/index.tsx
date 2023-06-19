import { Button, Container, Input, Form } from './styles';
import FormGroup from '../../../../components/FormGroup';
import useRegister from './useRegister';
import Loader from '../../../../components/Loader';

export default function Register() {
	const {
		name,
		handlerNameChange,
		email,
		handlerEmailChange,
		password,
		handlerPasswordChange,
		handlerSubmit,
		isFormValid,
		getErrorByField,
		isLoading,
	} = useRegister();

	return (
		<Container>
			<Loader isLoading={isLoading} />
			<Form onSubmit={handlerSubmit}>
				<FormGroup name="Nome" error={getErrorByField('name')}>
					<Input
						value={name}
						error={getErrorByField('name')}
						onChange={handlerNameChange}
					/>
				</FormGroup>

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
					Registrar
				</Button>
			</Form>
		</Container>
	);
}
