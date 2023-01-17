import React, { useState } from 'react'
import { createContextCustom, useLocalStorage } from 'hooks'
import { ThemeType, IThemeContext, ChildrenProps } from 'types'

export interface Theme {
  background: string
	border: string
	placeholders: string
  card: string
  fontColor: string
}

enum BackgroundColors {
  LIGHTGRAY = 'bg-gray-100',
  GRAY = 'bg-gray-300',
	DARKGRAY = 'bg-gray-900',
  DARKZINC = 'bg-zinc-700',
  DARKERZINC = 'bg-zinc-800',
	MEDIUMSLATE = 'bg-slate-400',
}

enum TextColors {
  LIGHTGREY = 'text-gray-100',
  DARKGREY = 'text-gray-900',
}

enum BorderColors {
  LIGHTGREY = 'border-gray-100',
  DARKGREY = 'border-gray-900',
}

const THEMES: Record<ThemeType, Theme> = {
  light: {
    background: BackgroundColors.LIGHTGRAY,
		border: BorderColors.DARKGREY,
		placeholders: BackgroundColors.MEDIUMSLATE,
    card: BackgroundColors.GRAY,
    fontColor: TextColors.DARKGREY,
  },
  dark: {
    background: BackgroundColors.DARKERZINC,
		border: BorderColors.LIGHTGREY,
		placeholders: BackgroundColors.DARKGRAY,
    card: BackgroundColors.DARKZINC,
    fontColor: TextColors.LIGHTGREY,
  },
}

export const [useThemeContext, ContextProvider] = createContextCustom<IThemeContext>()

const [setItem, getItem] = useLocalStorage()

const getSavedTheme = (): ThemeType => {
  const defaultTheme: ThemeType = 'light'
  const savedThemeName: ThemeType | null = getItem<ThemeType>('theme')

  if (savedThemeName === null) {
    return defaultTheme
  }

  return savedThemeName
}

export const ThemeProvider = ({ children }: ChildrenProps) => {
  const savedTheme = getSavedTheme()

  const [currentTheme, setCurrentTheme] = useState<ThemeType>(savedTheme)

  setItem('theme', currentTheme)

  const toggleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')

  const providerValue: IThemeContext = {
    theme: THEMES[currentTheme],
    themeName: currentTheme,
    toggleTheme,
  }

  return <ContextProvider value={providerValue}>{children}</ContextProvider>
}
