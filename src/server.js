import express from 'express';
import morgan from 'morgan';

import { conn } from './config/conn';
const app = express();

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', express.static('static'));

app.get('/', async (req, res) => {
  const [result] = await conn.query('select * from board order by id DESC');
  console.log(result.length);
  return res.render('index', { result });
});

app.get('/api/posts', async (req, res) => {
  const [result] = await conn.query('select * from board order by id DESC');
  res.json(result);
});

app.post('/', (req, res) => {
  const { message, nickname } = req.body;
  const query = `
    insert into board (message, nickname)
      values (?, ?)
  `;
  conn.query(query, [message, nickname]);
  res.redirect('/');
});

app.get('/table', async (req, res) => {
  await conn.query(`
    create table board (
      id int not null auto_increment primary key,
      message varchar(1000) not null,
      nickname varchar(16) not null
    )`);
  console.log('테이블 생성 완료');
  return;
});

export default app;
