const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://cedrictravanca:cedricoo@cluster12.alrrcmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster12',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const routeur = express.Router()

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/books', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'book créé !'
  });
});

app.get('/api/books', (req, res) => {
    res.send('exemples de texte pour mes livres get')
    res.status(200).json(books);
});

app.delete('/api/books/:id', (req, res) => {
    Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'objet supprimé'}))
    .catch(error => res.status(400).json({ error }));
});



app.use('/',routeur);
module.exports = app;
