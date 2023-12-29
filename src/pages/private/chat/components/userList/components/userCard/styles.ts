import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	width: 100%;
	min-height: 4.5rem;
	max-height: 4.5rem;
	border-bottom: 1.3px solid ${({ theme }) => theme.colors.primary.light};
	border-radius: 5px;
`;

export const ContainerImg = styled.div`
	width: 22%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Img = styled.img`
	width: 3.5rem;
	height: 3.5rem;
	background-color: black;
	border-radius: 50%;
`;

export const ContainerMain = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 76%;
	height: 100%;
	margin-left: 1%;
`;

export const MainText = styled.p`
	display: flex;
	align-items: center;
	width: 82%;
	max-width: 82%;
	height: 100%;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const MainStatus = styled.div``;

export const Status = styled.div`
	width: 0.8rem;
	height: 0.8rem;
	background-color: green;
	border-radius: 50%;
`;
