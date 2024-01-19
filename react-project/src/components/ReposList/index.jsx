import { useState, useEffect } from "react";

export default () => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/nikolas-marques-silva/repos")
      .then((response) => response.json())
      .then((responseJson) =>
        setTimeout(() => {
          setRepos(responseJson);
          setEstaCarregando(false);
        }, 1000)
      );
  }, []);

  return (
    <>
      {estaCarregando && <h1>Carregando...</h1>}
      <ul>
        {repos.map(({ id, name, html_url, language }) => (
          <>
            <li key={id}>
              <b>Nome:</b> {name} <br />
              <b>Linguagem:</b> {language} <br />
              <a target="_blank" href={html_url}>
                Visite o repositório
              </a>{" "}
              <br />
              <hr />
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
