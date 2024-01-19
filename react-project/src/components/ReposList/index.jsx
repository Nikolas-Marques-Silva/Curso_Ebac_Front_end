import { useState, useEffect } from "react";

import styles from "./ReposList.module.css";

export default ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    setEstaCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((response) => response.json())
      .then((responseJson) =>
        setTimeout(() => {
          setRepos(responseJson);
          setEstaCarregando(false);
        }, 1000)
      );
  }, [nomeUsuario]);

  return (
    <div className="container">
      {estaCarregando ?
      (<h1>Carregando...</h1>)
    : (
      <ul className={styles.list}>
        {repos.map(({ id, name, html_url, language }) => (
          <>
            <li key={id} className={styles.listItem}>
              <div className={styles.listItemName}>
                <b>Nome:</b> {name}
              </div>
              <div className={styles.listItemLanguage}>
                <b>Linguagem:</b> {language}
              </div>
              <a className={styles.listItemLink} target="_blank" href={html_url}>
                Visite o repositório
              </a>{" "}
            </li>
          </>
        ))}
      </ul>
    )}
    </ div>
  );
};
