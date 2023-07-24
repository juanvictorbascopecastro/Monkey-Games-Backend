const { Product } = require('./../models/index')

module.exports = {
    async checkStock(products) {
        // verificamos el stock del producto
        const productModel = await Product.findAll({
            where: { id: products.map(item => item.idProducts) }
        })

        const errors = []
        productModel.forEach(item => {
            const val = products.find(
                val => val.idProducts === item.dataValues.id
            )
            if (item.dataValues.stock < val.amount)
                errors.push({
                    message: `El stock del producto ${item.dataValues.name} es de ${item.dataValues.stock}! y solicito ${val.amount}`
                })
        })
        return { errors, productModel }
    },
    async updateStock(productModel, products) {
        // verificamos el stock del producto
        const dataUpdate = productModel.map(item => {
            const val = products.find(
                val => val.idProducts === item.dataValues.id
            )
            return {
                id: item.dataValues.id,
                stock: item.dataValues.stock - val.amount
            }
        })
        const response = await Promise.all(
            dataUpdate.map(data =>
                Product.update(
                    { stock: data.stock },
                    { where: { id: data.id } }
                )
            )
        )
        return response
    }
}
