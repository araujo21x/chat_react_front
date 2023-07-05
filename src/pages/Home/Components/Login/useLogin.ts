import { useContext, useEffect, useState } from 'react';
import useErrors from '../../../../hook/useErrors';
import ZodGenericValidation from '../../../../lib/zod/ZodSchemaGeneric';
import loginService from '../../../../services/LoginService';
import { toast } from '../../../../utils/toast';
import { AuthContext } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { myAxiosInstance } from '../../../../services/utils/api';

export default function useLogin() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { getMessageZodErro, getErrorByField, errors } = useErrors();
	const isFormValid = email && password && errors.length === 0;
	const { editToken } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {}, []);

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

		const response = await loginService.post({ email, password });
		if (!response) {
			setIsLoading(false);
			return;
		}

		localStorage.setItem('token', JSON.stringify(response.token));
		myAxiosInstance.defaults.headers.common.Authorization = `Bearer ${response.token}`;
		editToken(response.token);

		toast({ text: 'Login feito com sucesso!', type: 'success' });
		setIsLoading(false);
		navigate('chat');
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
