import Paragraph from '../paragraph'
import Title from '../title'
import { Card, LinkButton } from './styles'

const Project = () => {
  return (
    <Card>
      <Title>Título do projeto</Title>
      <Paragraph type="secondary">Descrição do projeto</Paragraph>
      <LinkButton>Ver projeto</LinkButton>
    </Card>
  )
}

export default Project
