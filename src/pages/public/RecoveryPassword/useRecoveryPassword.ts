import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export type ITypeTemplate = 'forgot' | 'reset';
export type IUseRecoveryPassword = {
	typeTemplate: ITypeTemplate;
	token: string | null;
};

export default function useRecoveryPassword(): IUseRecoveryPassword {
	const [searchParams] = useSearchParams();
	const [token] = useState<string | null>(searchParams.get('token'));
	const [typeTemplate] = useState<ITypeTemplate>(
		searchParams.get('type') as ITypeTemplate
	);

	return { typeTemplate, token };
}
