let disciplina = {
    nome: "Web mobile",
    professor: {
        nome: "Pedro Cacique",
        email:"pedro.cacique@mackenzie.com.br"
    },
    local: {
        predio:33,
        sala:102
    }
}

let disciplina2 = {
    nome: "Fund. Matemática",
        professor: {
            nome: "Angela",
            email: "angela@mackenzie.com.br"
        },
        local: {
            predio:25,
            sala:303
        }
}

const disciplinas = [disciplina]
disciplinas.push(disciplina2)

for (i = 0; i <disciplinas.length; i++){
    mostra(disciplinas[i])
}

console.log(disciplina)
function mostra(disciplina){
    let conteudo = document.getElementById("conteudo")
    /*conteudo.innerHTML = "<h1>" + disciplina.nome + "</h1>"*/
     let str = `<div><h1>${disciplina.nome}</h1></div>`
     str += `<p>Professor${disciplina.professor.nome} (<em>${disciplina.professor.email} </em>)</p>`
     str += `<p>Local: prédio ${disciplina.local.predio}, sala ${disciplina.local.sala}</p>`
     str += "</div>"
     conteudo.innerHTML += str
}