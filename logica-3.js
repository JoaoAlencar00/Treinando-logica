// Se quer seguir para área de Front-End ou seguir para a área de Back-End.
//  Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
// Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.
//Você deve exibir na tela uma mensagem específica para cada escolha.
// Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, 
// enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, 
// continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

function areas() {
    let area = prompt('digite 1 para Back-end e 2 para Front-end?');
    let textArea = ''; 
    let aprender = 0;
    let textAprender = ''; 
    let linguagens = [];
    
    if (area == 1) {
        textArea = 'Back-end';
        aprender = prompt('digite 1 Se quer aprender C# e digite 2 para Java?');
        textAprender = aprender == 1 ? 'C#' : 'Java';

    } else if (area == 2) {
        textArea = 'Front-end';
        aprender = prompt('digite 1 Se quer aprender Vue e digite 2 para React?');
        textAprender = aprender == 1 ? 'Vue' : 'React';
    } 

    let especializacao = prompt(' digitando 1 para seguir se especializando na área escolhida ou 2 para se tornar Fullstack.');
    
    let encerrar = false;
    while (!encerrar) {
        let continuar = prompt('tem mais alguma linguagem que gostaria de aprender? digite 1 para Sim e 2 para Não');
    
        if (continuar == 2) {
            encerrar = true;
            break;
        }
    
        linguagens.push(prompt('Qual seria a Linguagem ?'));
    }

    console.log(`Você começou querendo ser ${ textArea }.`);
    console.log(`Por isso decidiu aprender ${ textAprender }.`);
    console.log(`Com isso decidiu se ${ especializacao == 1 ? 'especializar' : 'se tornar Fullstack' }.`);
    console.log(`E começou a se interessar em:`);
    linguagens.forEach(linguagem => {
        console.log(linguagem); 
    })

}
areas();
















