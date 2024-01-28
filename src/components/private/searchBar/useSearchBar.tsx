import { useState } from 'react';

export default function useSearchBar() {
	const [valueSearch, setValueSearch] = useState<string>('');

	function handlerValueSearchChange(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		setValueSearch(event.target.value);
	}

	return { valueSearch, handlerValueSearchChange };
}
