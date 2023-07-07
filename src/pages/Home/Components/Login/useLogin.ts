import { useEffect, useState } from 'react';
import useErrors from '../../../../hook/useErrors';
import ZodGenericValidation from '../../../../lib/zod/ZodSchemaGeneric';
import { useAuth } from '../../../../context/AuthContext';

export default function useLogin() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { getMessageZodErro, getErrorByField, errors } = useErrors();
	const isFormValid = email && password && errors.length === 0;
	const { singIn } = useAuth();

	function handlerEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
		setEmail(event.target.value);
		const validation = ZodGenericValidation.email;
		getMessageZodErro({
			field: 'email',
			validation,
			value: event.target.value,
		});
	}

	function handlerPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
		setPassword(event.target.value);
		const validation = ZodGenericValidation.password;
		getMessageZodErro({
			field: 'password',
			validation,
			value: event.target.value,
		});
	}

	async function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
		setIsLoading(true);
		event.preventDefault();

		await singIn(email, password);

		setIsLoading(false);
	}

	return {
		email,
		handlerEmailChange,
		password,
		handlerPasswordChange,
		handlerSubmit,
		isFormValid,
		getErrorByField,
		isLoading,
	};
}
