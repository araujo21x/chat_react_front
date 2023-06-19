import { useState } from 'react';
import { ZodError, z } from 'zod';

interface IUseError {
	field: string;
	message: string;
}

interface IZodErro {
	field: string;
	validation: z.ZodTypeAny;
	value: any;
}

export default function useErrors() {
	const [errors, setErrors] = useState<IUseError[]>([]);

	function setError({ field, message }: IUseError) {
		const errorAlreadyExist = errors.find((error) => error.field === field);
		if (errorAlreadyExist) return;
		setErrors((prevState) => [...prevState, { field, message }]);
	}

	function removeError(fieldName: string) {
		setErrors((prevState) =>
			prevState.filter((error) => error.field !== fieldName)
		);
	}

	function getErrorByField(fieldName: string) {
		return errors.find((error) => error.field === fieldName)?.message;
	}

	function getMessageZodErro(data: IZodErro) {
		try {
			data.validation.parse(data.value);
			removeError(data.field);
		} catch (err: unknown) {
			if (err instanceof ZodError) {
				setError({ field: data.field, message: err.issues[0].message });
			}
		}
	}

	return {
		setError,
		removeError,
		getErrorByField,
		errors,
		getMessageZodErro,
	};
}
