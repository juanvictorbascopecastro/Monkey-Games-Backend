class QrClass {
    constructor() {
        this.list = []
    }

    addData(data) {
        this.list.push(data)
        return this.list
    }

    getData(id) {
        return this.list.find(per => per.id === id)
    }
    getDatas() {
        return this.list
    }
    removeData(id) {
        const rqRemove = this.getData(id)
        this.list = this.list.filter(per => per.id !== id)
        return rqRemove
    }
}

module.exports = { QrClass }
