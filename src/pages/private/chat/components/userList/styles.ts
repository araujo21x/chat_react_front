import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 24rem;
	height: 100%;
	padding: 1rem 1.3rem;
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
	width: 100%;
	min-height: 100%;

	overflow: auto;
	padding: 0.2rem;
`;
