
Uma API Rest simples de cadastro de alunos. 
Entidade Aluno : 
id(integer) : chave primária.
rga (text): registro do aluno.
nome (text): nome do aluno.
curso (text) : curso que está fazendo.
situacao (text) : Se está ativo ou inativo. 
registrado_em (timestamp): Data que foi cadastrado

## Rotas : 

# GET : /alunos : 
Lista todos os alunos cadastrados.

# GET : /alunos/:id :
Lista um aluno pelo seu id.

# POST : /alunos :
Cadastra um aluno, com os seguintes dados: 

{
	 "rga": "",
   "nome": "",
   "curso": " ",
   "situacao": ""
}

# PUT : /alunos/:id : 
Altera um aluno, com mesmo parametros acima.

# DELETE : /alunos/:id : 
Delete um aluno, através do id.


Há um arquivo de exemplo de requests.

## Para rodar o projeto : 

* Primeiro de tudo rode o seguinte comando no seu terminal: 

 - node install

 * Para iniciar o servidor :
  - npm start 

  A api por padrão iniciará na porta : 3030.

  