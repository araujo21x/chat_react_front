import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export type ITypeTemplate = 'forgot' | 'reset';
export type IUseRecoveryPassword = {
	typeTemplate: ITypeTemplate;
};

export default function useRecoveryPassword(): IUseRecoveryPassword {
	const [searchParams] = useSearchParams();
	console.log(searchParams.get('type'));
	const [typeTemplate] = useState<ITypeTemplate>(
		searchParams.get('type') as ITypeTemplate
	);

	return { typeTemplate };
}
