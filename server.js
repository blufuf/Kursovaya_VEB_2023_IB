const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/check-email', (req, res) => {
  const email = req.body.email;

  // Проверка email
  if (validateEmail(email)) {
    console.log(email)
    console.log('Email введен корректно!');
    res.send('Email введен корректно!');
  } else {
    console.log('Пожалуйста, введите корректный email!');
    res.send('Пожалуйста, введите корректный email!');
  }
});


// Функция для проверки email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

app.get('/data', (req, res) => {
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Ошибка сервера' });
    }

    const [pilots, airplanes, cities, orders] = data.split('\n').map((line) => line.trim());

    res.json({ pilots, airplanes, cities, orders });
  });
});

app.use(express.static('public'));
app.use(express.static('Pages'));
app.use(express.static('static'));
app.use(express.static('img'));
app.use(express.static('styles'));
app.use(express.static('scripts'));

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});