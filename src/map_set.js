const meuMap = new Map();
meuMap.set('Nome', 'Gian');
meuMap.set('Stack', 'html, css, Javascript');

console.log(meuMap);

const nome = meuMap.get('Nome');

console.log(nome);
console.log(meuMap.size);
console.log(meuMap.has('Nome'));


for (const [key, value] of meuMap) {
    console.log(key, value);
}

for (const entry of meuMap.entries()) {
    console.log(entry);
}

meuMap.delete('Nome');

console.log(meuMap);

meuMap.clear();

const cpfs = new Set();

cpfs.add('78132615000');
cpfs.add('28926888096');

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((cpf) => {
    console.log(cpf);
})

const array = ["Gian Souza", "Ana Souza", "Maria Souza", "Bruno silva", "Gian Souza"];
const set = new Set([...array]);
const arraySemItensDuplicados = [...set];

console.log(array);
console.log(set);
console.log(arraySemItensDuplicados);