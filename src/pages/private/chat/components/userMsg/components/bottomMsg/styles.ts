import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 5.5%;
	width: 100%;
	border-radius: 0 0 20px 0;
	padding: 0.7rem;
	gap: 1%;
	align-items: center;
`;

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 3%;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Form = styled.form`
	height: 100%;
	width: 91%;

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
