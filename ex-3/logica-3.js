// Se quer seguir para área de Front-End ou seguir para a área de Back-End.
//  Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
// Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.
//Você deve exibir na tela uma mensagem específica para cada escolha.
// Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, 
// enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, 
// continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

function areas() {
    let area = prompt('digite 1 para Back-end e 2 para Front-end?');
    console.log(area);
    let aprender = 0;
    if (area == 1) {
        console.log('Back-End');
        aprender = prompt('digite 1 Se quer aprender C# e digite 2 para Java?');
        console.log(aprender);

    } else if (area == 2) {
        console.log('Front-End');
        aprender = prompt('digite 1 Se quer aprender Vue e digite 2 para React?');
        console.log(aprender);
    }
    let especializacao = prompt(' digitando 1 para seguir se especializando na área escolhida ou 2 para se tornar Fullstack.');
    let encerrar = false;
    while (!encerrar) {
        let continuar = prompt('tem mais alguma linguagem que gostaria de aprender? digite 1 para Sim e 2 para Não');
        if (continuar == 2) {
            encerrar = true;
            break;
        }
        let linguagens = [];
        linguagens.push(prompt('Qual seria a Linguagem ?'));
    }
    
    
}
areas();
















