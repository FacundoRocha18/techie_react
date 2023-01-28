import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledTitle, MenuToggle, Overlay, Menu, Navigation, CToggle, StyledPrimLink } from 'components'
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from 'contexts/ThemeContext'
import { Theme } from 'types'
import { IStyledComponent } from 'components/components.types'

export const StyledHeader = styled('header') <IStyledComponent>`
	align-items: center;
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);
	background-color: var(${props => props.background});
	border: 0;
	border-bottom: 1px solid rgb(236 72 153);
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	height: 48px;
	left: 0;
	padding-left: 16px;
	padding-right: 16px;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 50;
	transition: background-color .5s ease;
`

export const Header = () => {
	const { theme }: { theme: Theme } = useThemeContext()
	const { isVisible, setIsVisible } = useMenuContext()

	return (
		<>
			<StyledHeader background={isVisible ? theme.header : theme.translucent}>
				<StyledTitle className='header-title'>
					<Link to={'/'} onClick={() => setIsVisible(!isVisible)}>Techie blog</Link>
				</StyledTitle>
				<Navigation />
				<MenuToggle />
			</StyledHeader>
			<Overlay>
				<Menu />
			</Overlay>
		</>
	)
}
