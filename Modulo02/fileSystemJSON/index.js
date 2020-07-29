import { promises as fs } from "fs";

init();
writeReadJson();
async function init() {
    try {
        await fs.writeFile('teste.txt', 'bla bla bla')
        await fs.appendFile('teste.txt', '\nteste append file')
        const data = await fs.readFile('teste.txt', 'utf-8')
        console.log(data);                
    } catch(err) {
        console.log(err);
    }
}

async function writeReadJson() {
    try {
        // escrito com valores iniciais
        const arrayCarros = ["Gol", "Palio", "Uno"];
        const obj = {
            carros: arrayCarros
        };
        await fs.writeFile('teste.json', JSON.stringify(obj));

        // fez a leitura do conteudo atual
        const data = JSON.parse(await fs.readFile('teste.json'));

        // modificamos o conteudo
        data.carros.push("Sandero");
        console.log(data)

        // sobrescrevemos o arquivo com conteudo modificado
        await fs.writeFile('teste.json', JSON.stringify(data));
    } catch (err) {
        console.log(err)
    }
}