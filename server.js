/*
Handles loading the server from the local files. 
Authors: Summer, Caroline
Version: July 2025
*/
const express = require('express');
const cors = require('cors');
const ComplimentPicker = require('./ComplimentPicker');

const app = express();
app.use(cors());

app.get('/compliment/:category', (req, res) => {
  const category = req.params.category;
  const picker = new ComplimentPicker(category);
  res.json({ compliment: picker.getCompliment() });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});