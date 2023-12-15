import useErrors from '../../../../hook/useErrors';
import ZodGenericValidation from '../../../../lib/zod/ZodSchemaGeneric';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import errorRequest from '../../../../services/utils/errorRequest';
import { toast } from '../../../../utils/toast';
import noAuthService from '../../../../services/NoAuthService';
import forgotPasswordMappers from '../../../../services/mappers/ForgotPasswordMappers';
import { IResponseMsgDefault } from '../../../../shared/interfaces/IDefaultMsg';
import { IForgotPasswordResponse } from '../../../../shared/interfaces/mappers/INoAuthUserMappers';

export default function useLogin() {
	const [email, setEmail] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { getMessageZodErro, getErrorByField, errors } = useErrors();
	const isFormValid = email && errors.length === 0;
	const navigate = useNavigate();

	function handlerEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
		setEmail(event.target.value);
		const validation = ZodGenericValidation.email;

		getMessageZodErro({
			field: 'email',
			validation,
			value: event.target.value,
		});
	}

	async function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
		try {
			setIsLoading(true);
			event.preventDefault();

			const response = await noAuthService.forgotPassword(email);
			const data: IResponseMsgDefault = forgotPasswordMappers.toDomain(
				response.data as IForgotPasswordResponse
			);
			toast({ text: data.message, type: 'success' });

			setIsLoading(false);
			navigate('/');
		} catch (err) {
			errorRequest(err);
			setIsLoading(false);
		}
	}

	return {
		email,
		handlerEmailChange,
		handlerSubmit,
		isFormValid,
		getErrorByField,
		isLoading,
	};
}
