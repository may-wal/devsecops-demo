const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from DevSecOps demo!');
});

// Example vulnerable endpoint (for DAST)
app.post('/echo', (req, res) => {
  // intentionally echoing user input to illustrate potential XSS
  const text = req.body.text || '';
  res.send(`<html><body><h1>${text}</h1></body></html>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on ${port}`));
