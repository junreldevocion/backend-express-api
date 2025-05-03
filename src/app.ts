import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import { createDatabaseTables } from './config/db';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());

createDatabaseTables();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server is running on port' + port);
});
