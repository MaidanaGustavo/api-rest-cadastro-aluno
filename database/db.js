const sqlite = require('sqlite-sync');
const path  = require('path');
sqlite.connect(path.resolve(__dirname,'alunos.db'));

async function query(queryString){
  const row  = await sqlite.run(queryString);
  return row;
}
module.exports = {query};