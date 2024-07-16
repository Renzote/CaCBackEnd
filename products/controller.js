const express = require('express');
const router = express.Router();

const productService = require('./service.js');

//Rutas para los productos
router.get("/", async (req, res) => {
     try {
          const products = await productService.getProducts();
          if (!products) {
               res.send("No se encontraron productos");
          }
          res.send(products);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al obtener los productos" });
     }
});


router.get("/:id", async (req, res) => {
     const { id } = req.params;
     try {
          const product = await productService.getProductById(id);
          if (!product) {
               res.send("No se encontro el producto");
          }
          res.send(product);
     } catch (error) {
          res.status(500).json({ error: "Error al obtener el producto" });
     }
});


router.post("/", async (req, res) => {
     try {
          const product = await productService.createProduct(req.body);
          if (!product) {
               res.send("No se pudo crear el producto");
          } 
          res.send(product);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al crear el producto" });
     }
});

router.put("/:id", async (req, res) => {
     try {
          const product = await productService.updateProduct(req.params?.id, req.body);
          if (!product) {
               res.send("No se pudo modificar el producto");
          }
          res.send(product);
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al modificar el producto" });
     }
});


router.delete("/:id", async (req, res) => {
     try{
          const product = await productService.deleteProduct(req.params?.id);
          res.send("Producto eliminado");
     } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al eliminar el producto"});
     }
});

 

module.exports = router;

