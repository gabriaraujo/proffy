// get: Buscar ou listar informação
// post: Criar alguma nova informação
// put: Atualizar uma informação existente
// delete: Deletar uma informação existente

// Corpo (Resquest Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero   atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// localhost:3333/users
app.listen(3333);