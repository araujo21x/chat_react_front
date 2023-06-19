import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 1rem;
    color:  ${({ theme }) => theme.colors.text.dark};
    -webkit-font-smoothing: antialiased;
  }
  
  strong {
    color:${({ theme }) => theme.colors.text.main};
  } 

  button{
    cursor: pointer;
  }
`;
