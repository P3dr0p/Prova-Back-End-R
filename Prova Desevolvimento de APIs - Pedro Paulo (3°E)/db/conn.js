const mysql = require('mysql2')

//Configuração e conexão com banco
const conn = mysql.createPool({
  connectionLimit: 10,
  host: '',
  port: '', // É opcional.
  user: 'aluno_medio',
  password: '@lunoSenai23.',
  database: '',
})

// É necessário exporta esse modulo