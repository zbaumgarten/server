const Person = require('../models/Person')


async function getAllPeople(req, res) {
    try {
        const people = await Person.find()
        res.json(people)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'error getting all users'})
    }
}


async function getPersonById(req, res) {
    try {
        const { id } = req.params
        const person = await Person.findById(id)
        res.json(person)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'error getting person'})
    }
}

async function createPerson(req, res) {
    try {
        const person = await new Person({
            ...req.body
        }).save()

        res.status(201).json({'message': 'user created'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'error creating person'})
    }
}

async function deletePersonById(req, res) {
    try {
        const { id } = req.params
        const person = await Person.findByIdAndDelete(id)
        res.json({'message': 'person deleted'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'error getting person'})
    }
}


module.exports = {
    getAllPeople,
    getPersonById,
    createPerson,
    deletePersonById
}