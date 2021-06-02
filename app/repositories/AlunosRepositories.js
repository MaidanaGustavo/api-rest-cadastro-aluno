const db  = require('../../database/db.js');


class AlunosRepositories{

    async index(){
      const query = 'SELECT * FROM aluno';
      const row = await db.query(query);
      return row;
    }

    async find(id){
      const query = `SELECT * FROM aluno WHERE id = ${id}`;
      const row = await db.query(query);
      return row;
    }

    async findByRga(rga){
      const query  = `SELECT * from aluno WHERE rga = '${rga}'`;
      const row = await db.query(query);
      return row;
    }

    async create(aluno){
      const {rga,nome,curso,situacao} = aluno;
      const query =  `
        INSERT INTO aluno(rga,nome,curso,situacao)
        VALUES ('${rga}','${nome}','${curso}','${situacao}');
      `;
       await db.query(query);
       const select  =  `SELECT * FROM aluno where rga = '${rga}' `
       const row = db.query(select);
       return row;
    }

    async update(aluno,id){
      const {rga,nome,curso,situacao} = aluno;
      const query = `UPDATE aluno SET rga = '${rga}',
      nome = '${nome}',curso = '${curso}',situacao = '${situacao}'
      WHERE id = ${id}`;
      await db.query(query);
      const select = `SELECT * FROM aluno where id = ${id}`
      const row = await db.query(select);
      return row;
    }

    async delete(id){
      const query = `DELETE FROM aluno WHERE id = ${id}`;
      const select = `SELECT * FROM aluno where id = ${id}`;
      const row = await db.query(select);
      await db.query(query);
      return row;
    }
}

module.exports = new AlunosRepositories();