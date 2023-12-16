import { styled } from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.4rem;

	strong {
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.text.main};
	}

	small {
		font-size: 0.9rem;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.danger.dark};
	}
`;
