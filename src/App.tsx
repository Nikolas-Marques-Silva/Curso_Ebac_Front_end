import Projects from './containers/projects'
import Sidebar from './containers/sidebar'
import Sobre from './containers/sobre'
import EstilosGlobais, { Container } from './styles'

function App() {
  return (
    <>
      <EstilosGlobais />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
