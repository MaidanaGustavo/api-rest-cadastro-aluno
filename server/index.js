const sqlite = require('sqlite-sync')
sqlite.connect('alunos.db')
const express =  require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
let id = 1;
let  datetime = new Date()


app.get('/alunos',function(req,res) {
  res.setHeader('Content-Type', 'application/json')
  const nome = req.query.nome
  const limite = req.query.limite
  const pagina = req.query.pagina
  if(nome == undefined  || limite == undefined || pagina == undefined){
    res.status(400)
    res.json({erro:"Parametros invalidos"})
    console.log('erro')
  }else{
    const retorno = (sqlite.run(`select * from aluno where nome = '${nome}' limit ${limite} offset ${pagina} `))
    res.status(200)
    res.json({retorno})
}
} )


app.post('/alunos/', function(req,res){
  res.setHeader('Content-Type', 'application/json')
  const rga = req.body.rga
  const nome = req.body.nome
  const curso = req.body.curso
  if(curso == undefined || rga == undefined || nome == undefined){
    res.status(400)
    res.json({erro:"Parametros Invalidos!"})
  }else{
    res.status(201)
    sqlite.insert("aluno",{id:id,rga: `'${rga}'`,nome:`${nome}`,curso:`'${curso}'`,situacao:'ativa',registrado_em:datetime.getDate()+'-'+datetime.getMonth()+'-'+datetime.getFullYear() })
    const ins = sqlite.run(`select * from aluno where id = '${id}' `)
    res.json({ins})
    id++;


  }
})

app.put('/alunos',function(req,res){
  res.setHeader('Content-Type', 'application/json')
  res.status(405)
  res.json({mensagem:"EndPoints inexistente!"})
})

app.delete('/alunos',function(req,res){
   res.setHeader('Content-Type', 'application/json')
  res.status(405)
  res.json({mensagem:"EndPoint inexistente!"})
})

app.get('/alunos/:id',function(req,res){
  res.setHeader('Content-Type', 'application/json')
  const id =  req.params.id
  const busca  = sqlite.run(`select * from aluno where id = '${id}'  `)

  if(busca != '') {
    res.status(200)
    res.json({busca})
  }else{
    res.status(404)
    res.json({mensagem:"Usuario nao encontrado!"})
  }
  
})

app.put('/alunos/:id',function(req,res){
  const id =  req.params.id
  const busca  = sqlite.run(`select * from aluno where id = '${id}' `)

  if(busca != '') {
    const modificar= sqlite.update("aluno",{nome:`${req.body.nome}`,rga:`${req.body.rga}`,curso:`${req.body.curso}`,situacao:`${req.body.situacao}`,registrado_em:`${req.body.registrado_em}`},{id:`${id}`})
    const buscaAtualizada  = sqlite.run(`select * from aluno where id = '${id}' `)
    res.json({buscaAtualizada})
  }else{
    res.status(404)
    res.json({mensagem:"Usuario nao encontrado!"})
  }
})

app.delete('/alunos/:id',function(req,res){
  res.setHeader('Content-Type', 'application/json')
  const id =  req.params.id
  const busca  = sqlite.run(`select * from aluno where id = '${id}' `)

  if(busca != '') {
    res.status(200)
    sqlite.run(`DELETE from aluno WHERE id LIKE '${id}'`)
    res.json(busca)
  }else{
    res.status(404)
    res.json({mensagem:"Usuario nao encontrado!"})
  }
})

app.delete('/alunos/:id',function(req,res){
  res.setHeader('Content-Type', 'application/json')
 res.status(405)
 res.json({mensagem:"EndPoint inexistente!"})
})
sqlite.close
app.listen('8080')
