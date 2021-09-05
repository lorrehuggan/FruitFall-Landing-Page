import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { flex } from '../styles/mixins';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  color: #242424;
  overflow-x: hidden;
  
  
}
h1,h2,h3,h4,p {margin: 0}
`;

const theme = {
  colors: {
    primary: '#ff9f1c',
    secondary: '#ffbf69',
    highlight: '#cbf3f0',
    accent: '#2ec4b6',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
