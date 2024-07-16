const pool = require('../db');


//Productos
const getProducts = async () =>{
     return await pool.query('SELECT * FROM productos');
};

const getProductById = async (idproductos) => {
     return await pool.query(`SELECT * FROM productos WHERE  idproductos = ${idproductos}`);
}

const createProduct = async (payload) => {
     console.log('Creating product...');
     // TODO cambiar los nombres de las tablas y columnas a ingles y minusculas
     return await pool.query('INSERT INTO productos (nombre, color, talle, costo, categorias_idCategorias) VALUES (?, ?, ?, ?, ?)', [payload.name, payload.color , payload.size, payload.price, payload.category]);
     
}
 
const updateProduct = async (id, payload) => {
     console.log('Updaing product...');
     return await pool.query(`UPDATE productos SET nombre = '${payload.name}', color = '${payload.color}', talle = '${payload.size}', costo = '${payload.price}', categorias_idCategorias = '${payload.category}' WHERE idProductos = ${id}`);
}

const deleteProduct =  async (idProductos) => {
     console.log(('Deleting client...'));
     return await pool.query(`DELETE FROM productos WHERE idProductos = ${idProductos}`);
};



module.exports = {
     getProducts,
     getProductById,
     createProduct,
     updateProduct,
     deleteProduct
}
