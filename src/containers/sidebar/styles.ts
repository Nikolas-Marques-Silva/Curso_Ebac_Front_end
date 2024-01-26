import styled from 'styled-components'
import { P } from '../../components/paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ThemeButton = styled.button`
  border-radius: 12px;
  font-size: 10;
  color: ${(props) => props.theme.bgColor};
  padding: 8px;
  font-weight: bold;
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  left: 0;
  top: 80px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
