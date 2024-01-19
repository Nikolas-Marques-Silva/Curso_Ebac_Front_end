import { useState } from "react";

import Pelfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <input
        onBlur={(e) => setNomeUsuario(e.target.value)}
        type="text"
        name=""
        id=""
      />

      {nomeUsuario.length > 4 && (
        <>
          <Pelfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {formularioEstaVisivel && <Formulario />}
      <button hidden={true} onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>
        toggle Formulário
      </button>
    </>
  );
}

export default App;
