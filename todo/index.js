const express = require('express');
const app = express();

app.use(express.json());

app.get('/echo', (req, res) => {
  res.send(req.query);
});

app.listen(3000, () => {
  console.log('Started todo service at 3000...');
});
