const pool = require('../db');


//Pedidos
const getOrders = async () =>{
     return await pool.query('SELECT * FROM pedidos');
}

const getOrderById = async (idpedido) => {
     return await pool.query(`SELECT * FROM pedidos WHERE  idpedidos = ${idpedido}`);
}

const createOrder = async (payload) => {
     console.log('Creating order...');
     // TODO cambiar los nombres de las tablas y columnas a ingles y minusculas
     return await pool.query('INSERT INTO pedidos (clientes_idCliente, costo, fecha) VALUES (?, ?, ?)', [payload.idClient, payload.price, payload.date]);
     
}

const updateOrder = async (id, payload) => {
     console.log('Updaing client...');
    return await pool.query(`UPDATE pedidos SET clientes_idCliente = '${payload.idClient}', costo = '${payload.price}', fecha = '${payload.date}' WHERE idpedidos = ${id}`);
}

const deleteOrder =  async (idpedido) => {
     console.log(('Deleting order...'));
     return await pool.query(`DELETE FROM pedidos WHERE idpedidos = ${idpedido}`);
};



module.exports = {
     getOrders,
     getOrderById,
     createOrder,
     updateOrder,
     deleteOrder
}
