import { Avatar } from '../../components/avatar'
import Paragraph from '../../components/paragraph'
import Title from '../../components/title'
import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Níkolas Marques</Title>
        <Paragraph type="secondary" fontSize={16}>
          nikolas-marques-silva
        </Paragraph>
        <Description type="primary" fontSize={12}>
          Desenvolvedor Front-end
        </Description>
        <ThemeButton>Trocar tema</ThemeButton>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
