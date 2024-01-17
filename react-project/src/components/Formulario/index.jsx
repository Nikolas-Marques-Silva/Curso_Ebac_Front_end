import { useState } from "react";

export default () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);

    let [nome, setNome] = useState(0);

    const changeNome = (e) => {
        setNome(EstadoAnterior => e.target.value);
    }

    const renderResult = () => {
        let media = (materiaA + materiaB + materiaC) / 3;
        if (media >= 6) {
            return <p>O aluno {nome} foi aprovado</p>
        } else {
            return <p>O aluno {nome} foi reprovado</p>
        }
    }

    return (
        <form>
            <input type="text" name="" id="" placeholder="Seu nome" onChange={changeNome} />
            <input type="number" placeholder="Nota matéria A" name="" id="" onChange={e => setMateriaA(parseInt(e.target.value))}/>
            <input type="number" placeholder="Nota matéria B" name="" id="" onChange={e => setMateriaB(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota matéria C" name="" id="" onChange={e => setMateriaC(parseInt(e.target.value))} />
            {renderResult()}
        </form>
    );
}