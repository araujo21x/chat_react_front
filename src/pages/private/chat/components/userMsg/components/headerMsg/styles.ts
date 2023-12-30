import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 6%;
	align-items: center;
	padding: 0.4rem 3.7rem;
	border-radius: 0 20px 0 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main};
`;

export const ImgContainer = styled.div`
	width: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Img = styled.img`
	background-color: black;
	height: 3.3rem;
	width: 3.3rem;
	border-radius: 50%;
`;

export const MainContainer = styled.div`
	flex-grow: 1;
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: space-between;
`;

export const Center = styled.div``;

export const Title = styled.h3``;

export const Options = styled.div`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.primary.dark};
`;
