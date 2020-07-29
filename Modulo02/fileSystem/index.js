import { promises as fs } from "fs";

// UTILIZANDO PROMISES COM ASYNC/AWAIT
init();
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

// UTILIZANDO PROMISES
/*
fs.writeFile('teste.txt', 'blabla').then(() => {
    fs.appendFile('teste.txt', '\nteste append file').then(() => {
        fs.readFile('teste.txt', 'utf-8').then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err)
        });
    }).catch(err => {
        console.log(err)
    });
}).catch(err => {
    console.log(err)
});
*/

// UTILIZANDO COM CALLBACKS
/*
fs.writeFile('teste.txt', 'Sou o Leandro', function (err) {
    if(err){
        console.log(err)
    } else {
        fs.appendFile('texte.txt', '\nteste append file', function (err) {
            if (err) {
                console.log(err);
            } else {
                fs.readFile('teste.txt', 'utf-8', (err, data) => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log(data)
                    };
                });
            };
        });
    };
});
*/


// UTILIZANDO DE FORMA SINCRONA (NÃO RECOMENDADO)
/*
try {
    console.log('1');
    fs.writeFileSync('teste.txt', 'bla bla bla');
    console.log('2');
    const data = fs.readFileSync('teste.txt', 'utf-8');
    console.log(data);
    console.log('3');
} catch(err) {
    console.log(err);
};
*/

