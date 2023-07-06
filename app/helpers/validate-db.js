module.exports = {
    checkExitsData: async (value, name, model) => {
        if (!value) return false
        const data = await model.findOne({
            where: {
                [name]: value
            }
        })
        if (!data)
            throw new Error(
                `El ${name} ${value} no existe en la base de datos!`
            )
    },

    async checkExitsDataUpdate(value, name, model, id) {
        let data = await model.findOne({
            where: {
                [name]: value
            }
        })
        if (data) {
            data = data.dataValues
            if (data.id !== id)
                throw new Error(
                    `El ${name} ${value} existe en la base de datos!`
                )
        }
    },

    existeIdArreglo: async (arrayValues, model) => {
        if (!Array.isArray(arrayValues)) return
        const promesa = []
        for (let i = 0; i < arrayValues.length; i++) {
            const response = model.findByPk(arrayValues[i])
            promesa.push(response)
        }
        const response = await Promise.all(promesa)
        const countNull = response.indexOf(null)
        return countNull
    },

    existeIdArregloObject: async (arrayValues, model, name) => {
        if (!Array.isArray(arrayValues)) return
        const promesa = []
        for (let i = 0; i < arrayValues.length; i++) {
            if (arrayValues[i][name]) {
                const response = model.findByPk(arrayValues[i][name])
                promesa.push(response)
            }
        }
        const response = await Promise.all(promesa)
        const countNull = response.indexOf(null)
        return countNull
    }
}
