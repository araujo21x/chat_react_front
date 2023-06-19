import { useState } from 'react';
import useErrors from '../../../../hook/useErrors';
import ZodGenericValidation from '../../../../lib/zod/ZodSchemaGeneric';

export default function useRegister() {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { getMessageZodErro, getErrorByField, errors } = useErrors();
	const isFormValid = email && password && name && errors.length === 0;

	function handlerNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		setName(event.target.value);
		const validation = ZodGenericValidation.string('nome');
		getMessageZodErro({ field: 'name', validation, value: event.target.value });
	}

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

	function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
		setIsLoading(true);
		event.preventDefault();
		setIsLoading(false);
	}

	return {
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
	};
}
