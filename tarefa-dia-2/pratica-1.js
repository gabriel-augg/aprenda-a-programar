/* Prática 1: Preparando uma mensagem de uma agência de turismo
Abra o arquivo pratica-1.js com o VSCODE ou o editor de código de sua preferência.
Agora no arquivo pratica-1.js, declare 5 variáveis que vão armazenar os seguintes valores:
seu nome
seu email
sua profissão
sua idade
o lugar que você sonha um dia conhecer (pode ser um país, cidade ou um local mesmo)
Dê um nome apropriado para cada variável. Ou seja, o nome da variável deve sugerir o valor que ela armazena (ex: se você vai armazenar sua idade, então o nome da variável ideal pode ser idade, não acha?). Isso é primordial em programação, pois é muito importante que a gente escreva um código que as outras pessoas consigam entender, não só o computador.
Clique em salvar no seu editor de código
Agora vamos executar (ou rodar) o código que você escreveu com o programa Node! Para rodar o código, execute o comando node pratica-1.js no terminal (importante: o terminal deve estar na pasta onde está o arquivo pratica-1.js para conseguir executá-lo com o comando node)
Não exibiu nada? Então funcionou! É porque você não utilizou o console.log() (ainda, vamos utilizar daqui a pouco).
Agora execute os comandos git (git status -> git add . -> git commit -m 'mensagem de commit' -> git log -> git push) para subir essa atualização no seu repositório remoto do GitHub
Agora atribua a cada uma das variáveis o valor de cada uma delas, ou seja, o seu email, sua profissão, sua idade e o lugar que você sonha um dia conhecer. Lembre-se que cada valor precisa ser do tipo mais apropriado. Ou seja, idade deve ser um number ou uma string? E nome, string, né? Assim em diante.
Clique em salvar no seu editor de código e execute o código com node pratica-1.js no terminal.
Agora execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.
Agora exiba na tela cada um dos valores que você atribuiu às variáveis com o comando console.log(). Ou seja, você precisará usar esse comando 4 vezes seguidas para exibir cada uma das 4 variáveis. Consegue utilizá-lo apenas uma vez? Fica como desafio.
Clique em salvar no seu editor de código e execute o código com node pratica-1.js no terminal.
Teste, explore, exiba mais coisas com console.log() se quiser. O importante é "fuçar" e ir entendendo a lógica de cada comando.
Novamente, execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.
(Desafio - Opcional) Agora você deve ajustar o uso do console.log() para que os valores de cada uma das variáveis se encaixe nessa frase que deve ser exibida na tela: Olá, <valor da variável que tem o seu nome>! Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para <valor da variável que armazena o lugar que você sonha conhecer>. Confirma pra gente alguns dados? A sua idade é <valor da variável que armazena sua idade>, você é <valor da variável que armazena sua profissão> e o seu email é <valor da variável que armazena seu email>? Ficamos no aguardo. Muito obrigado e boa viagem! :D */





let nome = "Gabriel Augusto"
let email = "Gabriel.auggg@gmail.com"
let profissao = "Suporte em TI"
let idade = 17
let viagem = "Canadá"
console.log(nome)
console.log(email)
console.log(profissao)
console.log(idade)
console.log(viagem)





console.log(`Olá, ${nome}! Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para o ${viagem}. Confirma pra gente alguns dados? A sua idade é ${idade}, você trabalha com ${profissao} e o seu email é ${email}? Ficamos no aguardo. Muito obrigado e boa viagem! :D`)