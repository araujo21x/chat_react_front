import { useState } from 'react';

export type INavigationBar = {
	close: boolean;
	handleClose: () => void;
};
export default function useNavigationBar(): INavigationBar {
	const [close, setClose] = useState<boolean>(true);

	function handleClose() {
		setClose((prevState: boolean) => (prevState ? false : true));
	}

	return { close, handleClose };
}
