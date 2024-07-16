const express = require('express');
const clientController = require('./clients/controller');
const productController = require('./products/controller');
const orderController = require('./orders/controller');
const categoryController = require('./category/controller');

const app = express();
const port = 3000;
const db = require('./db');

app.use(express.json());
app.use('/client', clientController);
app.use('/product', productController);
app.use('/order', orderController);
app.use('/category', categoryController);


app.get('/health', (req, res) => {
  res.send('OK!');
});

app.get('/health/db', async (req, res) => {
  try {
    const result = await db.query("SELECT 1 AS result");

      if (!result) {
        res.send("Error al consultar la base de datos");
      }
      res.send(`Resultado de la consulta: ${result[0][0].result}`)
  
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al conectarse a la base de datos" })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
