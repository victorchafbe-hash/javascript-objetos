let pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

const novaPessoa = {
  nome: "Pedro",
};

// A reatribuição funciona porque a variável foi declarada com 'let'
pessoa = novaPessoa;

console.log(pessoa);
