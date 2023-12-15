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

export default function useReset() {
	const [password, setPassword] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { getMessageZodErro, getErrorByField, errors } = useErrors();
	const isFormValid = password && errors.length === 0;
	const navigate = useNavigate();

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
		try {
			setIsLoading(true);
			event.preventDefault();

			// const response = await noAuthService.resetPassword({ password });
			// const data: IResponseMsgDefault = resetPasswordMappers.toDomain(
			// 	response.data as IForgotPasswordResponse
			// );
			toast({ text: 'sucesso', type: 'success' });

			setIsLoading(false);
			navigate('/');
		} catch (err) {
			errorRequest(err);
			setIsLoading(false);
		}
	}

	return {
		password,
		handlerPasswordChange,
		handlerSubmit,
		isFormValid,
		getErrorByField,
		isLoading,
	};
}
