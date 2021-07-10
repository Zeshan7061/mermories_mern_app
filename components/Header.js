import styled, { css } from 'styled-components'

const HeaderStyle = styled.div`
	border-radius: 5px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	padding: 20px;
	/* background-color: ${({ theme }) => theme.colors.primary}; */
`

const Header = ({ primary, color = 'white', bg = 'black' }) => {
	return (
		<HeaderStyle>
			<h1>Header</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat impedit
				consectetur qui quam molestias, cum magni voluptatem vel non repudiandae.
			</p>
		</HeaderStyle>
	)
}

export default Header
