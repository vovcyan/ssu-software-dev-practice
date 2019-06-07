const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./db');
const app = express();

const data = Array.from(db); // Because we cannot modify data inside module.export

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/v1/list', (req, res) => {
  res.json(data);
});

app.post('/v1/list', (req, res) => {
  const rawData = req.body;

  if (rawData && rawData.id) {
    data.push(rawData);
    res.status(200).json({ success: true, data});
    return;
  }

  res.status(400).json({ success: false});
});

app.put('/v1/list', (req, res) => {
  const rawData = req.body;

  if (rawData && rawData.id) {
    const itemIndex = data.findIndex((e) => e.id === rawData.id);

    if (typeof itemIndex === 'undefined') {
      return;
    }

    data.splice(itemIndex, 1, rawData);
    res.status(200).json({ success: true, data});
    return;
  }

  res.status(404).json({ success: false});
});

app.delete('/v1/list/:id', (req, res) => {
  const id = Number(req.params.id);

  if (typeof id !== 'undefined') {
    const itemIndex = data.findIndex((e) => e.id === id);

    if (typeof itemIndex === 'undefined') {
      return;
    }

    data.splice(itemIndex, 1);
    res.status(200).json({ success: true, data});
    return;
  }

  res.status(404).json({ success: false});
});

app.listen(8080, () => {
  console.log("Server has been started");
});
