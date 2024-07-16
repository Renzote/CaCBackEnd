const repository = require ('./repository');

//clientes
const getCategory = async () =>{
     console.log('Getting category...');
     const queryResult = await repository.getCategory();
     return queryResult[0];
}

const getCategoryById = async (idCategory) => {
     console.log('Getting category');
     const [result] = await repository.getCategoryById(idCategory)
     console.log(result);
     return result;
}

const createCategory = async (payload) => {
     console.log('Creating category...');
     const [result] = await repository.createCategory(payload);
     console.log(result);
     return {id: result.insertId, ...payload};
}

const updateCategory = async (id, payload) => {
     console.log('Updaing category...');
     await repository.updateCategory(id, payload);
     return {id, ...payload};

}

const deleteCategory = async (idCategory) => {
     console.log(('Deleting category...'));
     return await repository.deleteCategory(idCategory);
}



module.exports = {
     getCategory,
     getCategoryById,
     createCategory,
     updateCategory,
     deleteCategory
}
