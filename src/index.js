const express = require('express');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello from NodeJS usind Docker Deployment' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is listining on port ${port}`));
