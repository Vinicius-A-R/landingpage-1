import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
