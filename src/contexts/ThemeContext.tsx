import React, { useState } from 'react'
import { createContextCustom } from 'hooks'
import { Theme, ThemeType, IThemeContext, ChildrenProps} from 'types'

enum Colors {
  LIGHTGREY = 'bg-gray-100',
  DARKGREY = 'bg-gray-800',
}

enum TextColors {
  LIGHTGREY = 'text-gray-100',
  DARKGREY = 'text-gray-900',
}

const THEMES: Record<ThemeType, Theme> = {
  light: {
    background: Colors.LIGHTGREY,
    fontColor: TextColors.DARKGREY,
  },
  dark: {
    background: Colors.DARKGREY,
    fontColor: TextColors.LIGHTGREY,
  },
}

export const [useThemeContext, ContextProvider] = createContextCustom<IThemeContext>()

export const ThemeProvider = ({ children }: ChildrenProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light')

  const toggleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')

  const providerValue: IThemeContext = {
    theme: THEMES[currentTheme],
    themeName: currentTheme,
    toggleTheme,
  }

  return <ContextProvider value={providerValue}>{children}</ContextProvider>
}
