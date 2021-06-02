const AlunosRepositories = require('../repositories/AlunosRepositories');

class AlunoController {

  async show(req,res){
    const row = await AlunosRepositories.index();
    if(!row) return res.status(400).json({erro : 'Nenhum aluno cadastrado.'});

    return res.status(200).json(row);
    
  }

  async findById(req,res){
    const {id} = req.params;
    const row = await AlunosRepositories.find(id);
    if(!row) return res.status(404).json({error: 'Aluno nao encontrado!'});

    return res.status(200).json(row);
  }

  async findByRga(req,res){
    const {rga} = req.params;
    const row = await AlunosRepositories.findByRga(rga);
    if (!row) return res.status(404).json({error: 'Aluno nao encontrado!'});

    return res.status(200).json(row);
  }

  async create(req,res){
    const {rga,nome,curso,situacao} = req.body;
    const alunoAlreadyExists = await AlunosRepositories.findByRga(rga);
    if(alunoAlreadyExists) return res.status(400).json({error : 'Aluno já existe!'});

    if(!rga || !nome || !curso || !situacao) return res.status(404).json({error : 'Está faltando dados obrigatórios!'})
    
    const row = await AlunosRepositories.create({rga,nome,curso,situacao});
    //if(!row) return res.status(500).json({error : ' Erro ao cadastrar aluno! '});
    console.log(row);
    return res.status(201).json(row);

  }

  async update(req,res){
    const {rga,nome,curso,situacao} = req.body;
    const {id} = req.params;

    const alunoAlreadyExists = await AlunosRepositories.find(id);
    if(!alunoAlreadyExists) return res.status(400).json({error: 'Aluno não existe!'});
   

    const row = await AlunosRepositories.update({rga,nome,curso,situacao},id);

    if(!row) return res.status(500).json({error : ' Erro ao alterar aluno! '});

    return res.status(200).json(row);


  }

  async delete(req,res){
    const {id}  = req.params;
    const alunoAlreadyExists = await AlunosRepositories.find(id);
    if(!alunoAlreadyExists) return res.status(400).json({error: 'Aluno não existe!'});

    await AlunosRepositories.delete(id);

    return res.sendStatus(204);
  }
}


module.exports = new AlunoController();