const { Product, VentaProduct } = require('./../models/index')

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
    },
    async checkStockUpdate(products, dataVenta) {
        let productModel = await Product.findAll({
            where: { id: products.map(item => item.idProducts) }
        })
        const errors = []
        productModel.forEach(item => {
            const val = products.find(
                val => val.idProducts === item.dataValues.id
            )
            // buscamos que cantidad antidad anterior para volver a su estado anterior
            const oldAmount = getPreviousValue(dataVenta, item.dataValues.id)
            if (item.dataValues.stock + oldAmount < val.amount)
                errors.push({
                    message: `El stock del producto ${item.dataValues.name} es de ${item.dataValues.stock}! y solicito ${val.amount}`
                })
        })
        if (errors.length <= 0) {
            // volvemos al estado anterior si no hay ningun error
            const productModelActual = await Product.findAll({
                where: { id: products.map(item => item.idProducts) }
            })
            const dataUpdate = productModelActual.map(item => {
                // mapeamos a que valores devemos volver
                const oldAmount = getPreviousValue(
                    dataVenta,
                    item.dataValues.id
                )
                return {
                    id: item.dataValues.id,
                    stock: item.dataValues.stock + oldAmount
                }
            })
            // actualizamos a lo anterior
            await Promise.all(
                dataUpdate.map(data =>
                    Product.update(
                        { stock: data.stock },
                        { where: { id: data.id } }
                    )
                )
            )
            // una vez actualizada debemos borrar los anteriores registros
            await VentaProduct.destroy({
                where: { id: dataVenta.map(val => val.dataValues.id) }
            })
            productModel = await Product.findAll({
                where: { id: products.map(item => item.idProducts) }
            })
        }
        return { errors, productModel }
    }
}

function getPreviousValue(arr, id) {
    const prod = arr.find(item => id === item.idProducts)
    return prod ? prod.amount : 0
}
