class QrClass {
    constructor() {
        this.list = []
    }

    addData(data) {
        this.list.push(data)
        return this.list
    }

    getData(codeEmit) {
        return this.list.find(item => item.codeEmit === codeEmit)
    }
    getDatas() {
        return this.list
    }
    removeData(codeEmit) {
        const rqRemove = this.getData(codeEmit)
        this.list = this.list.filter(item => item.codeEmit !== codeEmit)
        return rqRemove
    }
}

module.exports = { QrClass }
