import '../styles/globals.css'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import { useStore } from 'reducers/store'
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-style: normal;
    font-size: 14px;
    line-height: 1.5;
  }

  html,
  body,
  h1, h2, h3, h4, h5{
    font-family: 'Nunito Sans', sans-serif !important;
	color: ${({ theme }) => theme.colors.black};
  }

  * {
    box-sizing: border-box;
  }
`

const theme = {
	colors: {
		primary: '#393948',
		accent: '#4AADA7',
		grey: '#ACADB6',
		white: '#FFFFFF',
		danger: '#FF4218',
		success: '#4AAD84',
		purple: '#67388F',
		black: '#393948',
		box: '#F6F6F6',
		orange: '#FFC700',
		lightGrey: '#525268',
	},
}

// axios.defaults.baseURL = 'http://localhost:8000/posts'
axios.defaults.baseURL = 'https://life-memories-mern.herokuapp.com/posts'

function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default MyApp
