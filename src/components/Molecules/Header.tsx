import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledTitle, MenuToggle, Overlay, Menu, Navigation, ThemeSwitch, StyledPrimLink } from 'components'
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
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
	justify-content: space-between;
	left: 0;
	padding: 0px 16px;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 50;
	transition: background-color .5s ease;

	& .header-title {
		grid-column: span 2 / span 2;
	}

	& .header-button {
		display: flex;		
		grid-column: span 2 / span 2;
		justify-content: flex-end;
	}

	@media only screen and (min-width: 768px) {
		& {
			padding: 8px 32px;
		}
	}

	@media only screen and (min-width: 1024px) {
		& {
			grid-template-columns: repeat(12, 1fr);
			height: fit-content;
			padding: 8px 32px;
		}

		& button {
			display: none;
		}

		& .header-title {
			grid-column: span 3 / span 3;
			width: fit-content;
		}
	}
`

export const Header = () => {
	const { theme } = useThemeContext()
	const { isVisible, setIsVisible } = useMenuContext()

	return (
		<>
			<StyledHeader background={isVisible ? theme.header : theme.translucent}>
				<Link to={'/'} className='header-title' onClick={() => setIsVisible(false)}>
					<StyledTitle>Techie blog</StyledTitle>
				</Link>
				<Navigation />
				<div className='header-button'>
					<MenuToggle />
				</div>
			</StyledHeader>
			<Overlay>
				<Menu />
			</Overlay>
		</>
	)
}
