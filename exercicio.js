/**
 * Creates a new instance of the Pessoa class.
 *
 * @param {string} nome - The first name of the person.
 * @param {string} sobrenome - The last name of the person.
 * @param {number} idade - The age of the person.
 * @return {undefined} This function does not return a value.
 */
function Pessoa (nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    /**
     * Returns the full name of the object.
     *
     * @return {string} The full name of the object.
     */
    this.nomeCompleto = function (){
        return `${this.nome} ${this.sobrenome}`
    }
}

/**
 * Creates a new instance of the Motorista class.
 *
 * @param {string} nome - The name of the motorista.
 * @param {string} sobrenome - The last name of the motorista.
 * @param {number} idade - The age of the motorista.
 * @param {string} veiculo - The type of vehicle the motorista owns.
 * @param {string} placa - The license plate of the motorista's vehicle.
 * @param {boolean} temHabilitacao - Indicates whether the motorista has a driver's license.
 * @return {Motorista} The newly created instance of the Motorista class.
 */
function Motorista (nome, sobrenome, idade, veiculo, placa, temHabilitacao) {
    Pessoa.call(this, nome, sobrenome, idade)
    this.veiculo = veiculo
    this.placa = placa
    this.temHabilitacao = temHabilitacao
}

/**
 * Creates a new instance of the Pedestre class.
 *
 * @param {string} nome - The first name of the pedestrian.
 * @param {string} sobrenome - The last name of the pedestrian.
 * @param {number} idade - The age of the pedestrian.
 * @param {string} veiculo - The type of vehicle the pedestrian has.
 * @param {string} placa - The license plate number of the vehicle.
 * @param {boolean} temHabilitacao - Indicates if the pedestrian has a driver's license.
 * @return {void} 
 */
function Pedestre (nome, sobrenome, idade, veiculo, placa, temHabilitacao) {
    Pessoa.call(this, nome, sobrenome, idade) //Conforme o exercício, não posso usar "Motorista.call(this, nome, sobrenome, idade)" 
    this.veiculo = veiculo
    this.placa = placa
    this.temHabilitacao = temHabilitacao
}

const pessoa1 = new Pessoa('João', 'Silva', 25)
const motorista1 = new Motorista('João', 'Silva', 25, 'Carro', 'ABC-1234', true)
const pedestre1 = new Pedestre('João', 'Silva', 25, null, null, false)

console.log(pessoa1, motorista1, pedestre1)