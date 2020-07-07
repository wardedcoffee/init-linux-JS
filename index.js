// Criar um programa calcula media
// das notas entre alunos e envia mensagem do calculo da media

const aluno01 = 'Mayk'
const notaAluno01 = 1.8

const aluno02 = 'Diego'
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


// se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A média foi de ${media}. Parabéns`)
} else {
    console.log(`A média é menor que 5`)
}

