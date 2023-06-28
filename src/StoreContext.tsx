import { createContext, useState } from 'react'

enum THEME {
  STORAGE_ITEM = 'theme',
  DARK = 'dark',
  LIGHT = 'light',
}

type IContext = {
  THEME: typeof THEME
  theme: string
  toggleTheme?: () => void
}

let initialTheme = window.localStorage.getItem(THEME.STORAGE_ITEM)
const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if ((initialTheme === null && preferDark) || initialTheme === THEME.DARK) {
  initialTheme = THEME.DARK
} else {
  initialTheme = THEME.LIGHT
}

const initialState = {
  theme: initialTheme,
  THEME,
}

const StoreContext = createContext<IContext>(initialState)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(initialState.theme)

  const toggleTheme = () => {
    if (theme === THEME.DARK) {
      setTheme(THEME.LIGHT)
      window.localStorage.setItem(THEME.STORAGE_ITEM, THEME.LIGHT)
    } else {
      setTheme(THEME.DARK)
      window.localStorage.setItem(THEME.STORAGE_ITEM, THEME.DARK)
    }
  }

  const state = {
    theme,
    toggleTheme,
    THEME,
  }

  return <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
}

export default StoreContext
