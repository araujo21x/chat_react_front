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
	min-height: 5rem;
	max-height: 12rem;
	padding: 1.2rem 2rem;
	background: ${({ theme }) => theme.colors.primary.dark};
	border-radius: 4px;
	box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	justify-content: center;
	${({ type }) => containerVariants[type] || containerVariants.default}

	strong {
		width: 90%;
		height: 100%;
		color: ${({ theme }) => theme.colors.background};
		font-size: 1.1rem;
		overflow-wrap: break-word;
	}

	img {
		margin-right: 0.5rem;
	}

	& + & {
		margin-top: 0.7rem;
	}
`;
