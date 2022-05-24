const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

//GET - Buscar informações // req.query
//POST - Criar informações //req.body
//PUT - Alterar informações // req.body
//DELETE - Deletar informações // req.params
//OPTIONS - Dizer informações que o servidor pode responder

const listaPessoas = [
    {
        id: 1,
        nome: "Gustavo"
    },

    {
        id: 2,
        nome: "Leonardo"
    },

    {
        id: 3,
        nome: "Otavio"
    },
    
    {
        id: 4,
        nome: "Henrique"
    },
];

const listaUsers = [];


app.get('/api/pessoas', (req,res) => {
    res.send(listaPessoas);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Você está no home')
})

app.post('/api/pessoas/', (req, res) => {
    console.log(req.body)
    const pessoa = req.body;
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    res.json(pessoa);
})

app.put('/api/pessoas/:id', (req,res) => {
    const id = req.params.id;
    const pessoa = req.body;
    const index = listaPessoas.findIndex(p => p.id == id);
    pessoa.id = id;
    listaPessoas[index] = pessoa;
    res.json(pessoa);
})

app.get('/api/pessoas/:id', (req,res) => {
    const id = req.params.id;
    const pessoa = listaPessoas.find(p => p.id == id);
    res.json(pessoa);
})


app.delete('/api/pessoas/:id', (req,res) => {
    const id = req.params.id;
    const pessoa = req.body;
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas.splice(index, 1);
    res.json(pessoa)
})

app.get('/api/users', (req,res) => {
    res.send(listaUsers);
})

app.post('/api/users/', (req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = listaUsers.length + 1;
    listaUsers.push(user);
    res.json(user);
})

app.put('/api/users/:id', (req,res) => {
    const id = req.params.id;
    const users = req.body;
    const index = listaUsers.findIndex(p => p.id == id);
    users.id = id;
    listaUsers[index] = users;
    res.json(users);
})

app.get('/api/users/:id', (req,res) => {
    const id = req.params.id;
    const users = listaUsers.find(p => p.id == id);
    res.json(users);
})


app.delete('/api/users/:id', (req,res) => {
    const id = req.params.id;
    const user = req.body;
    const index = listaUsers.findIndex(p => p.id == id);
    listaUsers.splice(index, 1);
    res.json(user)
})

app.listen(port, () => console.log("Servidor rodando local na porta 3000"));
