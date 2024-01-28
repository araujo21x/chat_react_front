import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-grow: 1;
	padding: 2rem;
	flex-direction: column;
	align-items: center;
	border-radius: 0 20px 20px 0;
	gap: 1rem;
`;

export const UserListContainer = styled.div`
	display: grid;
	height: 100%;
	width: 100%;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	grid-auto-flow: Row;
	overflow-y: auto;
`;
