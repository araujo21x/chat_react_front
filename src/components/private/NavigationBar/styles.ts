import { styled, css } from 'styled-components';

interface INavigationBarProps {
	close: boolean;
}

export const Container = styled.nav<INavigationBarProps>`
	height: 100%;
	width: ${({ close }) => (close ? '5rem' : '12.7rem')};
	background-color: ${({ theme }) => theme.colors.primary.dark};
	border-radius: 20px 0 0 20px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 15%;
`;

export const Logo = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

export const Toggle = styled.div<INavigationBarProps>`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2rem;
	width: 2rem;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.primary.dark};
	border-radius: 50%;
	margin-left: ${({ close }) => (close ? '3rem' : '10.7rem')};
`;

export const LogoImg = styled.div`
	height: 2.7rem;
	width: 2.7rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.primary.dark};
	border-radius: 10px;
`;

export const LogoText = styled.div`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.background};
	font-size: 1.7rem;
`;

export const MenuBar = styled.div`
	height: 85%;
`;

export const Menu = styled.div`
	height: 100%;
`;

export const MenuLinks = styled.ul<INavigationBarProps>`
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	li {
		display: flex;
		align-items: center;

		height: 3rem;
		margin-top: 1rem;
		list-style: none;
		border-radius: 6px;

		a {
			display: flex;
			align-items: center;
			${({ close }) =>
				close
					? css`
							justify-content: center;
					  `
					: css``}
			/* justify-content: center; // true */
			width: 100%;
			height: 100%;
			font-size: 1.3rem;
			text-decoration: none;
			color: ${({ theme }) => theme.colors.background};
			&:hover {
				color: ${({ theme }) => theme.colors.primary.dark};
			}
		}

		&:hover {
			background-color: ${({ theme }) => theme.colors.background};
		}
	}
`;

export const Upside = styled.div``;

export const Bottom = styled.div``;

export const IconMenu = styled.div`
	min-width: 3.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
