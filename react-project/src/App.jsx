

function App() {
  const nome = 'João'

  function returnName() {
    return nome
  }

  const pessoa = {
    nome: 'João',
    idade: 20
  }

  const estaDeDia = true

  return (
    <>
      <h1>Olá, {nome}</h1>
      <h2>{returnName()}</h2>
      <h3>{pessoa.nome}</h3>
      <h4>{estaDeDia && 'Bom dia'}</h4>
    </>
  )
}

export default App
