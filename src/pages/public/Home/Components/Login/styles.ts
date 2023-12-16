import { css, styled } from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 68%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 20%;
	h1 {
		color: ${({ theme }) => theme.colors.background};
	}
`;

export const Form = styled.form`
	width: 100%;
	height: 80%;
	display: flex;
	flex-direction: column;

	gap: 5%;
`;

interface IInput {
	error?: string;
}

export const Input = styled.input<IInput>`
	width: 100%;
	height: 1.9rem;
	border: none;
	border: 2px solid #fff;
	background: ${({ theme }) => theme.colors.background};
	-webkit-backdrop-filter: blur(13.5px);
	box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.37);
	border-radius: 4px;
	outline: none;
	padding: 0 16px;
	font-size: 1rem;
	transition: border-color 0.2s ease-in;

	&:focus {
		border-color: ${({ theme }) => theme.colors.primary.main};
		box-shadow: none;
	}

	${({ theme, error }) =>
		error &&
		css`
			color: ${theme.colors.danger.main};
			border-color: ${theme.colors.danger.main} !important;
		`}
`;

export const Button = styled.button`
	margin-top: 5%;
	height: 2.7rem;
	border: none;
	border-radius: 4px;
	transition: background 0.2s ease-in;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 00.04);

	font-weight: bold;
	font-size: 1.2rem;
	color: ${({ theme }) => theme.colors.background};
	background: ${({ theme }) => theme.colors.primary.dark};

	&:hover {
		background: ${({ theme }) => theme.colors.primary.maxDark};
		color: ${({ theme }) => theme.colors.background};
	}

	&[disabled] {
		background: ${({ theme }) => theme.colors.primary.light};
		color: #969696;
		cursor: default;
	}
`;
