import { useState, useEffect } from "react";

export default () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);

    const [nome, setNome] = useState(0);

    useEffect(() => {
        console.log("Montado");

        return () => {
            console.log("Desmontado");
        }
    }, []);

    useEffect(() => {
        console.log("materiaA: ", materiaA);
        console.log("materiaB: ", materiaB);
        console.log("materiaC: ", materiaC);
    }, [materiaA, materiaB, materiaC]);

    useEffect(() => {
        console.log("nome: ", nome);
    }, [nome]);

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