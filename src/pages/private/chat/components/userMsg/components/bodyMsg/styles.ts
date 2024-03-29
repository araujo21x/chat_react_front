import { styled } from 'styled-components';

export const Container = styled.div`
	height: 85vh;
	padding: 1rem;
`;

export const ContainerMsg = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 100%;
	width: 100%;
	overflow-y: auto;
`;

interface IBallonProps {
	my: boolean;
}

export const BallonContainer = styled.div<IBallonProps>`
	display: flex;
	width: 100%;
	justify-content: ${({ my }) => (my ? 'end' : 'start')};
	justify-content: ${({ my }) => (my ? 'end' : 'start')};
`;

export const Ballon = styled.div<IBallonProps>`
	max-width: 38vw;
	padding: 1rem;
	border-radius: ${({ my }) => (my ? '25px 25px 0 25px' : '25px 25px 25px 0')};
	border: 1px solid ${({ theme }) => theme.colors.primary.main};
	background-color: ${({ theme }) => theme.colors.primary.light};

	p {
		word-wrap: break-word;
	}
`;

export const File = styled.div`
	width: 100%;
	height: auto;
	border-radius: 5px;
`;

export const IMG = styled.img`
	width: 100%;
	height: auto;
`;
