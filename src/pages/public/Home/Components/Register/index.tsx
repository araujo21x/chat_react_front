import { Button, Container, Input, Form } from './styles';
import FormGroup from '../../../../../components/generics/FormGroup';
import FormGroupImg from '../../../../../components/generics/FormGroupImg';
import useRegister from './useRegister';
import Loader from '../../../../../components/generics/Loader';

export default function Register() {
	const {
		name,
		handlerNameChange,
		email,
		handlerEmailChange,
		password,
		handlerPasswordChange,
		imgPreview,
		handleImageChange,
		handlerSubmit,
		isFormValid,
		getErrorByField,
		isLoading,
	} = useRegister();

	return (
		<Container>
			<Loader isLoading={isLoading} />

			<Form onSubmit={handlerSubmit}>
				<FormGroupImg name="Arquivo" img={imgPreview}>
					<Input type="file" onChange={handleImageChange} />
				</FormGroupImg>

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
						type="password"
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
