import { ThemeProvider } from 'styled-components'
import Projects from './containers/projects'
import Sidebar from './containers/sidebar'
import Sobre from './containers/sobre'
import EstilosGlobais, { Container } from './styles'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(false)

  function changeTheme() {
    setIsUsingDarkTheme(!isUsingDarkTheme)
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? DarkTheme : LightTheme}>
      <EstilosGlobais />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <Sobre />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
