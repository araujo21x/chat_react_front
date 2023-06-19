import { useState } from 'react';

export type IHomeTemplate = 'login' | 'register';
export type IUseHome = {
	homeTemplate: IHomeTemplate;
	handleToggleHomeTemplate: () => void;
};

export default function useHome(): IUseHome {
	const [homeTemplate, setHomeTemplate] = useState<IHomeTemplate>('login');

	function handleToggleHomeTemplate() {
		setHomeTemplate((prevState: IHomeTemplate) =>
			prevState === 'login' ? 'register' : 'login'
		);
	}

	return { homeTemplate, handleToggleHomeTemplate };
}
