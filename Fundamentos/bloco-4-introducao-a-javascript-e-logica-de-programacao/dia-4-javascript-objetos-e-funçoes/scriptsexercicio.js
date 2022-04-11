let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  let infoRico = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  console.log('Bem vinda, ' + info.personagem) //Primeira questão
  console.log(info) //Segunda questão

  for (let key in info){
      console.log(key) //Terceira questão
  }

  for (let key in info){
    console.log(info[key]) //Quarta questão
}

  for(let index in info){
      console.log(info[index] + " e " + infoRico[index]) //Quinta questão
  } 

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  }; 

  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo) //Sexta questão

  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

  ) //Setimo exercicio  

  console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos") //Oitavo exercicio

