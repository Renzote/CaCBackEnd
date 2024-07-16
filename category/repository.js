const pool = require('../db');


//Clientes
const getCategory = async () =>{
     return await pool.query('SELECT * FROM categorias');
}

const getCategoryById = async (idCategory) => {
     return await pool.query(`SELECT * FROM categorias WHERE  idCategorias = ${idCategory}`);
}

const createCategory = async (payload) => {
     console.log('Creating client...');
     // TODO cambiar los nombres de las tablas y columnas a ingles y minusculas
     return await pool.query('INSERT INTO categorias (Nombre) VALUES (?)', [payload.name]);
     
}

const updateCategory = async (id, payload) => {
     console.log('Updaing client...');
    return await pool.query(`UPDATE categorias SET nombre = '${payload.name}' WHERE idCategorias = ${id}`);
}

const deleteCategory =  async (idCategory) => {
     console.log(('Deleting client...'));
     return await pool.query(`DELETE FROM categorias WHERE idCategorias = ${idCategory}`);
};



module.exports = {
     getCategory,
     getCategoryById,
     createCategory,
     updateCategory,
     deleteCategory
}
