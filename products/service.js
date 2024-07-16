const repository = require ('./repository');

//Productos
const getProducts = async () =>{
     console.log('Getting product...');
     const queryResult = await repository.getProducts();
     return queryResult [0];
}

const getProductById = async (idproductos) => {
     console.log('Getting product');
     const [result] = await repository.getProductById(idproductos)
     console.log(result);
     return result;
}

const createProduct = async (payload) => {
     console.log('Creating product...');
     const [result] = await repository.createProduct(payload);
     console.log(result);
     return {id: result.insertId, ...payload};
}

const updateProduct = async (id, payload) => {
     console.log('Updaing product...');
     await repository.updateProduct(id, payload);
     return {id, ...payload};
     
}

const deleteProduct = async (idProductos) => {
     console.log(('Deleting Product...'));
     return await repository.deleteProduct(idProductos)
}


module.exports = {
     getProducts,
     getProductById,
     createProduct,
     updateProduct,
     deleteProduct
}
