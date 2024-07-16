const express = require('express');
const router = express.Router();

const clientService = require('./service.js');

// Rutas para clientes
router.get("/", async (req, res) => {
     try {
          const clients = await clientService.getClients();
          if (!clients) {
               res.send("No se encontraron clientes");
          }
          res.send(clients);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al obtener los clientes" });
     }
});


router.get("/:id", async (req, res) => {
     const { id } = req.params;
     try {
          const client = await clientService.getClientById(id);
          if (!client) {
               res.send("No se encontro al cliente");
          }
          res.send(client);
     } catch (error) {
          res.status(500).json({ error: "Error al obtener el cliente" });
     }
});


router.post("/", async (req, res) => {
     try {
          const client = await clientService.createClient(req.body);
          if (!client) {
               res.send("No se pudo crear el cliente");
          }
          res.send(client);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al crear el cliente" });
     }
});

router.put("/:id", async (req, res) => {
     try {
          const client = await clientService.updateClient(req.params?.id, req.body);
          if (!client) {
               res.send("No se pudo crear el cliente");
          }
          res.send(client);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al crear el cliente" });
     }
});


router.delete("/:id", async (req, res) => {
     try {
          const client = await clientService.deleteClient(req.params?.id);
          res.send("Cliente eliminado");
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