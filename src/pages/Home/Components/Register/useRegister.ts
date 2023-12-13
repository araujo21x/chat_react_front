import { useState } from 'react';
import useErrors from '../../../../hook/useErrors';
import ZodGenericValidation from '../../../../lib/zod/ZodSchemaGeneric';
import errorRequest from '../../../../services/utils/errorRequest';
import noAuthService from '../../../../services/NoAuthService';
import createUserMappers from '../../../../services/mappers/CreateUserMappers';
import { ICreateUserResponse } from '../../../../shared/interfaces/mappers/INoAuthUserMappers';
import { IResponseMsgDefault } from '../../../../shared/interfaces/IDefaultMsg';
import { toast } from '../../../../utils/toast';

export default function useRegister() {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [image, setImage] = useState<File | null>(null);
	const [imgPreview, setImgPreview] = useState<string | null>(null);
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

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setImage(event.target.files[0]);
			setImgPreview(URL.createObjectURL(event.target.files[0]));
		}
	};

	async function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
		try {
			setIsLoading(true);
			event.preventDefault();

			const formData: FormData = new FormData();
			if (image) formData.append('file', image);
			formData.append('name', name);
			formData.append('email', email);
			formData.append('password', password);

			const response = await noAuthService.createUser(formData);
			const data: IResponseMsgDefault = createUserMappers.toDomain(
				response.data as ICreateUserResponse
			);

			toast({ text: data.message, type: 'success' });
			setIsLoading(false);
			window.location.reload();
		} catch (err) {
			errorRequest(err);
			setIsLoading(false);
		}
	}

	return {
		name,
		handlerNameChange,
		email,
		handlerEmailChange,
		password,
		handlerPasswordChange,
		handleImageChange,
		imgPreview,
		handlerSubmit,
		isFormValid,
		getErrorByField,
		isLoading,
	};
}
