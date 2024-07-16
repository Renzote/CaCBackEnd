const repository = require ('./repository.js');

//clientes
const getOrders = async () =>{
     console.log('Getting orders...');
     const queryResult = await repository.getOrders();
     return queryResult[0];
}

const getOrderById = async (idpedido) => {
     console.log('Getting order');
     const [result] = await repository.getOrderById(idpedido)
     console.log(result);
     return result;
}

const createOrder = async (payload) => {
     console.log('Creating order...');
     const [result] = await repository.createOrder(payload);
     console.log(result);
     return {id: result.insertId, ...payload};
}

const updateOrder = async (id, payload) => {
     console.log('Updaing order...');
     await repository.updateOrder(id, payload);
     return {id, ...payload};

}

const deleteOrder = async (idpedido) => {
     console.log(('Deleting client...'));
     return await repository.deleteOrder(idpedido);
}



module.exports = {
     getOrders,
     getOrderById,
     createOrder,
     updateOrder,
     deleteOrder
}
