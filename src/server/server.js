import jsonServer from 'json-server';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const server = jsonServer.create();
const router = jsonServer.router('./src/server/db.json');
const middlewares = jsonServer.defaults();
const port = 3000;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(middlewares);

server.post('/login', (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const usuario = router.db.get('users').find(u => u.email === email && u.password === password).value();

    if (usuario) {
        const token = jwt.sign({ id: usuario.id, email: usuario.email }, 'secret', { expiresIn: '1h' });
        res.status(200).json({ mensagem: 'Login válido', token });
    } else {
        res.status(401).json({ mensagem: 'Email ou senha inválidos' });
    }
});

server.use(router);

server.listen(port, () => {
    console.log(`Servidor JSON Server está rodando na porta ${port}`);
});