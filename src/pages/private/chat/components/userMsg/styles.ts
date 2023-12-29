import { styled } from 'styled-components';

export const Container = styled.div`
	flex-grow: 1;
	border-radius: 0 20px 20px 0;
	border-left: 2px solid ${({ theme }) => theme.colors.primary.light};
`;
