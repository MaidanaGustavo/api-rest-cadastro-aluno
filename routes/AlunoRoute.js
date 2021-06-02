const {Router} = require('express');
const AlunoController = require('../app/controllers/AlunoController');
const AlunoRoute = Router();


AlunoRoute.get('/alunos',AlunoController.show);
AlunoRoute.get('/alunos/:id',AlunoController.findById);
AlunoRoute.post('/alunos',AlunoController.create);
AlunoRoute.put('/alunos/:id',AlunoController.update);
AlunoRoute.delete('/alunos/:id',AlunoController.delete);

module.exports = AlunoRoute;

