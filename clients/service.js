const repository = require ('./repository');

//clientes
const getClients = async () =>{
     console.log('Getting clients...');
     const queryResult = await repository.getClients();
     return queryResult[0];
}

const getClientById = async (idCliente) => {
     console.log('Getting client');
     const [result] = await repository.getClientById(idCliente)
     console.log(result);
     return result;
}

const createClient = async (payload) => {
     console.log('Creating client...');
     const [result] = await repository.createClient(payload);
     console.log(result);
     return {id: result.insertId, ...payload};
}

const updateClient = async (id, payload) => {
     console.log('Updaing client...');
     await repository.updateClient(id, payload);
     return {id, ...payload};

}

const deleteClient = async (idCliente) => {
     console.log(('Deleting client...'));
     return await repository.deleteClient(idCliente);
}



module.exports = {
     getClients,
     getClientById,
     createClient,
     updateClient,
     deleteClient
}
