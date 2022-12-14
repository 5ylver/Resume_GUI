import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [fontName, setFontName] = useState({
    size: '5xl',
    family: 'abril',
  })
  const [fontAboutMe, setFontAboutMe] = useState({
    size: 'lg',
    family: 'poppins',
  })
  const [showgit, setShowgit] = useState(true)
  const [showlinkedin, setShowlinkedin] = useState(true)
  const [showWebsite, setWebsite] = useState(true)

  return (
    <DataContext.Provider
      value={{
        fontAboutMe,
        setFontAboutMe,
        fontName,
        setFontName,
        showgit,
        setShowgit,
        showlinkedin,
        setShowlinkedin,
        showWebsite,
        setWebsite,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.object,
}

export default DataContext
