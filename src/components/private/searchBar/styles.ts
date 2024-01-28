import { styled } from 'styled-components';

export const Container = styled.nav`
	height: 3rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const Form = styled.form`
	height: 50%;
	width: 35%;

	:focus {
		outline: none;
		border: none;
		box-shadow: none;
		border: 2px solid ${({ theme }) => theme.colors.primary.dark};
	}
`;

export const Input = styled.input`
	height: 100%;
	width: 100%;
	border: 2px solid ${({ theme }) => theme.colors.primary.dark};
	border-radius: 20px;
	padding: 0.7rem;
	font-size: 1.1rem;
`;

export const IconContainer = styled.div`
	color: ${({ theme }) => theme.colors.primary.dark};
`;
