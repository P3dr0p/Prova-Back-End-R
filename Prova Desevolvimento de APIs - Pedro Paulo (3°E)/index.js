const express = require('express')
const exphbs = require('express-handlebars')
const mysql2 = require('mysql2')
const PORT = 3333
//Importar o módulo conn para as operações com o banco

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para arquivos estáticos

app.get('/', (request, response)=>{
  return response.render('home')
})

app.post("/livro/insertlivro", (request, response) => {
  const { titulo, categoria, descricao, preco, quantidade } = request.body

  const sql = `INSERT INTO books(title, numero_paginas) VALUES('${title}', ${numero_paginas});`

  connection.query(sql, (error) => {
      if(error) {
          console.log(error);
      }

      return response.redirect("/");
  });
});

app.get("/livro", (request, response) => {
  const sql = `SELECT * FROM books`
  connection.query(sql, (error) => {
      if(error) {
          console.log(error);
      }

      const livro = data

      return response.render('books', {books});
  });
});

app.get("/livro/:id", (request, response) => {
  const { id } = request.params

  const sql = `SELECT * FROM books WHERE = ${id};`

  connection.query(sql, (error, data) => {
      if(error) {
          console.log(error);
      }

      const livro = data;

      return response.render("livro", {livro});
  });
});

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})

