import { styled } from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ContentContainer = styled.div`
	width: 30rem;
	height: 40rem;
	background: rgba(255, 255, 255, 0.35);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(13.5px);
	-webkit-backdrop-filter: blur(13.5px);
	border: 1px solid rgba(255, 255, 255, 0.18);
	border-radius: 30px;

	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.5rem 2.5rem;
	gap: 5%;

	z-index: 1;
`;

export const Wave = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: flex-end;

	img {
		width: 100vw;
		height: auto;
	}
`;
