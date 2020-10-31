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
  padding: 0;
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

export const Button = styled.button`
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};

  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
