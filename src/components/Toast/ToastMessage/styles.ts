import { css, styled } from 'styled-components';

interface IContainerProps {
	type: 'default' | 'danger' | 'success';
}

const containerVariants = {
	default: css`
		background: ${({ theme }) => theme.colors.primary.dark};
	`,
	danger: css`
		background: ${({ theme }) => theme.colors.danger.main};
	`,
	success: css`
		background: ${({ theme }) => theme.colors.success.main};
	`,
};

export const Container = styled.div<IContainerProps>`
	width: 20rem;
	height: 3.5rem;
	max-height: 7.5rem;
	padding: 1rem 2rem;
	background: ${({ theme }) => theme.colors.primary.dark};
	border-radius: 4px;
	box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	justify-content: center;
	${({ type }) => containerVariants[type] || containerVariants.default}

	strong {
		color: ${({ theme }) => theme.colors.background};
		font-size: 1.1rem;
	}

	img {
		margin-right: 0.5rem;
	}

	& + & {
		margin-top: 0.7rem;
	}
`;
