function cadastro (nome, idade, linguagem) {
    if (nome) {
        console.log(`Olá ${nome}, voce tem ${idade} anos e já está aprendendo ${linguagem}`);
    } else {
        console.log('');
    }
}

// cadastro('Joao', 19, 'JavaScript');

//ex opcional 
function respostas (linguagem, numero) {
    console.log(`Voce gosta de estudar ${linguagem} ? responda com numero 1 para Sim e 2 para Não`);
    if (numero === 1) {
        console.log(`Muito bom! Continue estudando e você terá muito sucesso.`);
    } if (numero === 2) {
        console.log(`Ahh que pena... Já tentou aprender outras linguagens?`);
    } 
}   

respostas("java", 1);

