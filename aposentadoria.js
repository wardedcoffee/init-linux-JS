const nome = "Renato";
const sexo = "M";
const idade = 96;
const contribuicao = 10;


const tempoH = (sexo == "M" && contribuicao >= 35 && idade >= 95)

const tempoM = (sexo == "F" && contribuicao >= 30 && idade >= 85)

// var idadeContribH = (idade >= 95)

// var idadeContribM = (idade >= 85)


//se a pessoa estiver aposentada: Silvana, você pode se aposentar!
if(tempoH || tempoM) {
    console.log(`${nome} você pode se aposentar!`)
} else {
    console.log(`${nome} você ainda não pode se aposentar!`)
}
//se a pessoa não estiver aposentada: Silvana, você ainda não pode se aposentar!
