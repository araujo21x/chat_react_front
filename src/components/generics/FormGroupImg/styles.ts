import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;

	small {
		font-size: 0.9rem;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.danger.dark};
	}

	input {
		background-color: transparent;
		border: none;
		color: transparent;
		box-shadow: none;
		max-width: 7.7rem;
	}
`;

export const Img = styled.img`
	/* width: auto; */
	height: 8rem;
	border-radius: 50%;
	border: 1px solid ${({ theme }) => theme.colors.primary.maxDark};
	width: 8rem;
`;
