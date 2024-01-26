import { P } from './styles'

export type Props = {
  children: string
  type?: 'primary' | 'secondary'
}

const Paragraph = ({ children, type = 'primary' }: Props) => {
  return <P type={type}>{children}</P>
}

export default Paragraph
