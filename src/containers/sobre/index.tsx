import Title from '../../components/title'
import Paragraph from '../../components/paragraph'
import { GithubSection } from './styles'

const Sobre = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre mim</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nulla
        at, earum consequatur neque architecto. Deserunt dignissimos aspernatur
        temporibus? Nulla nesciunt qui excepturi. Eius illo, et ea voluptatum
        praesentium quod?
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=nikolas-marques-silva&show_icons=true&theme=dracula" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nikolas-marques-silva&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </section>
  )
}

export default Sobre
