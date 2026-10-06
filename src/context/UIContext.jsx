import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

// Site-wide overlay state that several unrelated components need to open:
// the header, the hero and the 404 page all open the same search palette.
const UIContext = createContext(null)

export function UIProvider({ children }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchSeed, setSearchSeed] = useState('')

  const openSearch = useCallback((seed = '') => {
    setSearchSeed(typeof seed === 'string' ? seed : '')
    setSearchOpen(true)
  }, [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  const value = useMemo(
    () => ({ searchOpen, searchSeed, openSearch, closeSearch }),
    [searchOpen, searchSeed, openSearch, closeSearch]
  )
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used inside <UIProvider>')
  return ctx
}
