import { styled } from 'styled-components';

export const Container = styled.div`
	cursor: pointer;
	width: 100%;
	height: 7%;
	border-radius: 10px;
	position: relative;
	border: 0;
`;

export const ContainerText = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	height: 100%;
`;

export const Text = styled.strong<{ checked: boolean }>`
	z-index: ${({ checked }) => (checked ? 2 : 0)};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 100%;

	font-size: 1.3rem;
	color: ${({ theme, checked }) =>
		checked ? theme.colors.background : theme.colors.text.main};
`;

export const StyledLabel = styled.label<{ checked: boolean }>`
	text-indent: -9999px;
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 10px;
	position: relative;

	&:after {
		content: '';
		position: absolute;
		left: ${({ checked }) => (checked ? '0' : '50%')};
		width: 50%;
		height: 100%;
		background: ${({ theme }) => theme.colors.primary.dark};
		border-radius: 10px;
		transition: 0.3s;
	}
`;
