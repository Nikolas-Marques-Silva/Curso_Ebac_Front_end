import Project from '../../components/Project'
import Title from '../../components/title'
import { List } from './styles'

const Projects = () => {
  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <List>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
      </List>
    </section>
  )
}

export default Projects
