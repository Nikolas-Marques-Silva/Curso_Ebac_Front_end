import styled, { createGlobalStyle } from 'styled-components'

const EstilosGlobais = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    padding-top: 80px;
  }
`

export default EstilosGlobais

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;

  img {
    max-width: 100%;
  }
`
