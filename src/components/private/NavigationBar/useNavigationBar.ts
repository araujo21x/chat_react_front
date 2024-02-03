import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faGear,
	faMessage,
	faRightFromBracket,
	faStar,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import getPathname from '../../../utils/getPathname';
import { useAuth } from '../../../context/AuthContext';

type IItemMenu = {
	id: string;
	name: string;
	icon: IconProp;
	isSelected: boolean;
	goTo: () => void;
};

type IContainerMenu = {
	upside: IItemMenu[];
	bottom: IItemMenu[];
};

export type INavigationBar = {
	containerMenu: IContainerMenu;
	close: boolean;
	handleClose: () => void;
	goToPage: (page: string) => void;
};

export default function useNavigationBar(): INavigationBar {
	const [close, setClose] = useState<boolean>(false);
	const [currentItem, setCurrentItem] = useState<string>(
		getPathname(useLocation().pathname)[1]
	);

	const navigate = useNavigate();
	const { logout } = useAuth();
	function goToPage(page: string) {
		if (currentItem === page) return;
		setCurrentItem(page);
		navigate(page);
	}

	const containerMenu: IContainerMenu = {
		upside: [
			{
				id: 'upside_1',
				name: 'Mensagens',
				icon: faMessage,
				isSelected: currentItem === 'chat',
				goTo: () => goToPage('chat'),
			},
			{
				id: 'upside_2',
				name: 'Contatos',
				icon: faUsers,
				isSelected: currentItem === 'contacts',
				goTo: () => goToPage('contacts'),
			},
		],
		bottom: [
			{
				id: 'bottom_2',
				name: 'Logout',
				icon: faRightFromBracket,
				isSelected: false,
				goTo: () => logout(),
			},
		],
	};

	function handleClose() {
		setClose((prevState: boolean) => (prevState ? false : true));
	}

	return { containerMenu, close, handleClose, goToPage };
}
