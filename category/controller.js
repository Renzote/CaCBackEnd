const express = require('express');
const router = express.Router();

const categoryService = require('./service.js');

// Rutas para clientes
router.get("/", async (req, res) => {
     try {
          const category = await categoryService.getCategory();
          if (!category) {
               res.send("No se encontraron categorias");
          }
          res.send(category);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al obtener las categorias" });
     }
});


router.get("/:id", async (req, res) => {
     const { id } = req.params;
     try {
          const category = await categoryService.getCategoryById(id);
          if (!category) {
               res.send("No se encontro la categoria");
          }
          res.send(category);
     } catch (error) {
          res.status(500).json({ error: "Error al obtener la categoria" });
     }
});


router.post("/", async (req, res) => {
     try {
          const category = await categoryService.createCategory(req.body);
          if (!category) {
               res.send("No se pudo crear la categoria");
          }
          res.send(category);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al crear la categoria" });
     }
});

router.put("/:id", async (req, res) => {
     try {
          const category = await categoryService.updateCategory(req.params?.id, req.body);
          if (!category) {
               res.send("No se pudo crear la categoria");
          }
          res.send(category);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al crear la categoria" });
     }
});


router.delete("/:id", async (req, res) => {
     try {
          const category = await categoryService.deleteCategory(req.params?.id);
          res.send("Categoria eliminada");
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al eliminar la categoria" });
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