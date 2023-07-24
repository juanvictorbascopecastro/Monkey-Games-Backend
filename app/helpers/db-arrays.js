module.exports = {
    createArray: async (values, nameValues, model, nameIdBase, idBase) => {
        values = values.map(item => ({
            [nameValues]: item,
            [nameIdBase]: idBase
        }))
        await model.bulkCreate(values)
    },

    createArrayObject: async (values, model, idBase, nameIdBase) => {
        values = values.map(item => ({
            ...item,
            [nameIdBase]: idBase
        }))
        // if (nameIdBase === 'idOccupies') console.log(values)
        await model.bulkCreate(values)
    }
}
