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
	width: 100%;
	max-height: 100%s;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 0.7em;
	overflow-y: auto;

	> * {
		grid-column: span 1;
		width: 100%;
	}
`;
