import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
  --color-dark: #101522;
}

*{
  margin: 0;
  padding: 0;
	outline: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', -apple-system, system-ui, sans-serif;
	-webkit-font-smoothing: antialiased;
}

a{
  text-decoration: none;
}

button {
  border: 0;
  background: none;
	cursor: pointer;
}

ul{
  list-style: none;
  padding-left: 0;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media screen and (max-width: 991px) {
    padding: 0 32px;
  }
`;
