
Uma API Rest simples de cadastro de alunos. <br>
Entidade Aluno : <br>
id(integer) : chave primária.<br>
rga (text): registro do aluno.<br>
nome (text): nome do aluno.<br>
curso (text) : curso que está fazendo.<br>
situacao (text) : Se está ativo ou inativo. <br>
registrado_em (timestamp): Data que foi cadastrado<br>

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

## Requisitos : 
* Ter o node instalado na sua máquina, a partir da versão 14.17.0 LTS. 
## Para rodar o projeto : 

* Primeiro de tudo rode o seguinte comando no seu terminal: 

 - npm install

 * Para iniciar o servidor :
  - npm start 

  A api por padrão iniciará na porta : 3030.

