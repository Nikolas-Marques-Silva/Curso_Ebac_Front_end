import { useEffect, useState } from 'react'

import styles from './Formulario.module.css'

export default () => {

    const [resultado, setResultado] = useState('')
    const [imc, setImc] = useState(0)
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    const calculaIMC = () => {
        const peso = Number(document.querySelector('#peso').value)
        const altura = Number(document.querySelector('#altura').value)
        const imc = (peso / (altura * altura)).toFixed(2)
        setImc(imc)
        setPeso(peso)
        setAltura(altura)
        if (imc !== NaN) {
            if (imc < 18.5) {
                setResultado(`Seu IMC é ${imc} e você está abaixo do peso`)
            } else if (imc < 24.9) {
                setResultado(`Seu IMC é ${imc} e você está no peso normal`)
            } else if (imc < 29.9) {
                setResultado(`Seu IMC é ${imc} e você está com sobrepeso`)
            } else if (imc < 34.9) {
                setResultado(`Seu IMC é ${imc} e você está com obesidade grau I`)
            } else if (imc < 39.9) {
                setResultado(`Seu IMC é ${imc} e você está com obesidade grau II`)	
            } else if (imc >= 40) {
                setResultado(`Seu IMC é ${imc} e você está com obesidade grau III`)
            }
        }
    }

    useEffect(() => {
        calculaIMC()
        console.log(imc)
    }, [imc])


    return (
        <form className={styles.form}>
            <div>
                <label className={styles.labelPeso}>Peso</label>
                <input className={styles.input} type="number" id="peso" placeholder="Kg" />
            </div>

            <div>
                <label className={styles.labelAltura}>Altura</label>
                <input className={styles.input} type="number" id="altura" placeholder="m" />
            </div>

            <button className={styles.button} onClick={e => {
                e.preventDefault()
                calculaIMC()
             }} type="submit">Calcular IMC</button>

            <p className={styles.resultado} >{resultado}</p>
        </form>
    )
}