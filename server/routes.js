const {Router} = require('express');
const router = Router();

const AlunoRoute = require('../routes/AlunoRoute');

router.use(AlunoRoute);

module.exports  = router;