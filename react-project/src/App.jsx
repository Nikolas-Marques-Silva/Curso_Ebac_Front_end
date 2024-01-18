import { useState } from "react"

import Pelfil from "./components/Perfil"
import Formulario from "./components/Formulario"

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

 return (
    <>
      <Pelfil name="Níkolas" avatar="https://github.com/nikolas-marques-silva.png" />
      {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>toggle Formulário</button>
    </>
  )
}

export default App
