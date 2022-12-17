/* eslint-disable no-undef */
import express from 'express';
import path from 'path';

const app = express();

const router = express.Router();

app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
  // res.send('HomePage');
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/typing', (req, res) => {
  console.log('typing....');
  res.sendFile(path.join(__dirname, 'src', 'html', 'typing.html'));
});

app.get('/reader', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'html', 'reader.html'));
});

app.get('/panel', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'html', 'panel.html'));
});

app.get('/hindi', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'html', 'hindi.html'));
});

app.get('/grid', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'html', 'grid.html'));
});

app.get('/record', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'html', 'record.html'));
});

app.use('/', express.static(path.join(__dirname, 'src')));
app.use('/', router);
app.listen(3000, () => {
  console.log(' listening port 3000');
});
