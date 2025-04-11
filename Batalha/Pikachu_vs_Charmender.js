//Variáveis das energias iniciais dos pokémon
let energiaCharmander = 80;
let energiaPikachu = 80;

//Variável das rodadas
let rodada = 1;

//Vá para a batalha! Aqui está o loop do combate mortal, onde será declarado o vencedor quem não estiver com a vida zerada
while(energiaCharmander > 0  && energiaPikachu > 0){

    //Criação da variável de dano para ambos os pokémon
    let danoPikachu = Math.floor(Math.random() * 25);
    let danoCharmander = Math.floor(Math.random() * 25);

    //Modificar a energia para que seja ela menos o dano recebido
    energiaCharmander = energiaCharmander - danoPikachu;
    energiaPikachu = energiaPikachu - danoCharmander;

    //Imprimir no console o número da rodada atual
    console.log(`Rodada ${rodada}`);

    //Imprimir no console o ataque dos pokémon
    console.log(`⚡️ Pikachu utilizou choque do trovão e deu ${danoPikachu} de dano e ficou com ${energiaPikachu} de energia!`);
    console.log(`🔥 Charmander utilizou lança chamas e deu ${danoCharmander} de dano e ficou com ${energiaCharmander} de energia!`);
    console.log(`---------------------------------------------`);

    //Adicionar 1 rodada
    rodada++
};

//Condicional que dirá quem foi o vencedor
if(energiaCharmander <= 0){
    console.log(`🏆⚡️ O vencedor foi o pikachu!!!!`);
}
else(console.log(`🏆🔥 O vencedor foi o charmander!!!!`));