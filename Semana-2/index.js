const express = require('express');
const app = express();
const port = 3000;
var login = false;
let users = [
  { id: 1, username: "Guardian", password: "senhafeliz1234" },
  { id: 2, username: "Joao", password: "123" }
];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("teste no /");
});

app.get('/remember', (req, res) => {
  res.send("Guardian,\nvocê não deve anotar sua senha aqui! ");
  console.log("teste no /remember");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname+'/login_page.html');
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  username.toString().trim();
  password.toString().trim();
  console.log(`Tentativa de login com usuário: ${username} e senha: ${password}`);
  const user = users.find(u => u.username === username && u.password === password);
   if (user) {
    res.redirect("/secreto");
  } else {
    res.redirect("/login");
  }  
});
  app.get("/secreto", (req, res) => {
  res.send("Parabéns! Você encontrou a área secreta.");
});
// CREATE (POST) -> adicionar novo usuário
app.post("/users", (req, res) => {
  const { username, password } = req.body;
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res.status(201).json(newUser);
});

// READ (GET) -> listar todos usuários
app.get("/users", (req, res) => {
  res.json(users);
});

// READ (GET by id) -> buscar usuário específico
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
});

// UPDATE (PUT) -> editar usuário
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { username, password } = req.body;
  const user = users.find(u => u.id === id);

  if (user) {
    user.username = username || user.username;
    user.password = password || user.password;
    res.json(user);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
});

// DELETE -> remover usuário
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.send("Usuário removido com sucesso");
});
