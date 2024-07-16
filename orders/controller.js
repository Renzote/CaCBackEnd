const express = require('express');
const router = express.Router();

const orderService = require('./service');

// Rutas para los pedidos
router.get("/", async (req, res) => {
     try {
          const orders = await orderService.getOrders();
          if (!orders) {
               res.send("No se encontraron pedidos");
          }
          res.send(orders);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al obtener los pedidos" });
     }
});


router.get("/:id", async (req, res) => {
     const { id } = req.params;
     try {
          const order = await orderService.getOrderById(id);
          if (!order) {
               res.send("No se encontro el pedido");
          }
          res.send(order);
     } catch (error) {
          res.status(500).json({ error: "Error al obtener el pedido" });
     }
});


router.post("/", async (req, res) => {
     try {
          const order = await orderService.createOrder(req.body);
          if (!order) {
               res.send("No se pudo crear el pedido");
          }
          res.send(order);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al crear el pedido" });
     }
});

router.put("/:id", async (req, res) => {
     try {
          const order = await orderService.updateOrder(req.params?.id, req.body);
          if (!order) {
               res.send("No se pudo modificar la orden");
          }
          res.send(order);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al modificar la orden" });
     }
});


router.delete("/:id", async (req, res) => {
     try {
          const order = await orderService.deleteOrder(req.params?.id);
          res.send("Pedido eliminado");
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al eliminar el cliente" });
     }
});


module.exports = router;




/* 
router.get("/", async (req, res) => {
  try {
    const client = await clientService.getClient();
    if (!client) {
      res.send("No se encontro al cliente");
    }
    res.send(client);
  } catch (error) {
     
    res.status(500).json({ error: "Error al obtener el cliente" });
    console.log(error);
  }
});
*/