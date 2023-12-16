import useErrors from '../../../../../hook/useErrors';
import ZodGenericValidation from '../../../../../lib/zod/ZodSchemaGeneric';
import errorRequest from '../../../../../services/utils/errorRequest';
import resetPasswordMappers from '../../../../../services/user/mappers/ResetPasswordMappers';
import noAuthService from '../../../../../services/user/NoAuthUserService';
import { toast } from '../../../../../utils/toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponseMsgDefault } from '../../../../../shared/interfaces/IDefaultMsg';
import { IResetPasswordResponse } from '../../../../../shared/interfaces/user/mappers/INoAuthUserMappers';

interface UseResetTypes {
	token: string | null;
}

export default function useReset({ token: userToken }: UseResetTypes) {
	const [password, setPassword] = useState<string>('');
	const [token] = useState<string | null>(userToken);
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

	function handlerToHome() {
		navigate('/');
	}

	async function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
		try {
			setIsLoading(true);
			event.preventDefault();
			if (!token) {
				toast({
					text: 'Erro interno do front no código de recuperação',
					type: 'success',
				});
				return;
			}

			const response = await noAuthService.resetPassword({ password, token });
			const data: IResponseMsgDefault = resetPasswordMappers.toDomain(
				response.data as IResetPasswordResponse
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
		password,
		handlerPasswordChange,
		handlerSubmit,
		isFormValid,
		getErrorByField,
		isLoading,
		handlerToHome,
	};
}
