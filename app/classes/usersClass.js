class UserClass {
    constructor() {
        this.persons = []
    }

    addPerson(data) {
        this.persons.push(data)
        return this.persons
    }

    getPerson(socketId) {
        return this.persons.find(per => per.socketId === socketId)
    }
    getPersons() {
        return this.persons
    }
    getPersonSalas(sala) {}
    removePerson(socketId) {
        const personRemove = this.getPerson(socketId)
        this.persons = this.persons.filter(per => per.socketId !== socketId)
        return personRemove
    }
}

module.exports = { UserClass }
