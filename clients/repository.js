const pool = require('../db');


//Clientes
const getClients = async () =>{
     return await pool.query('SELECT * FROM clientes');
}

const getClientById = async (idCliente) => {
     return await pool.query(`SELECT * FROM clientes WHERE  idCliente = ${idCliente}`);
}

const createClient = async (payload) => {
     console.log('Creating client...');
     // TODO cambiar los nombres de las tablas y columnas a ingles y minusculas
     return await pool.query('INSERT INTO clientes (Nombre, apellido, telefono) VALUES (?, ?, ?)', [payload.name, payload.lastname , payload.phone]);
     
}

const updateClient = async (id, payload) => {
     console.log('Updaing client...');
    return await pool.query(`UPDATE clientes SET Nombre = '${payload.name}', apellido = '${payload.lastname}', telefono = '${payload.phone}' WHERE idCliente = ${id}`);
}

const deleteClient =  async (idCliente) => {
     console.log(('Deleting client...'));
     return await pool.query(`DELETE FROM clientes WHERE idCliente = ${idCliente}`);
};



module.exports = {
     getClients,
     getClientById,
     createClient,
     updateClient,
     deleteClient
}
