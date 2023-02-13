const express = require('express')
const router = express.Router()

const CreateService = require('../services/Create')
const DeleteService = require('../services/Delete')
const SearchService = require('../services/Search')
const UpdateService = require('../services/Update')
const ViewService = require('../services/View')

router.post(`/create`, async (request, response) => { // CREATE ACCOUNTS
    const { firstname, lastname, address, postcode, contact, email, username, password } = request.body
    const result = await CreateService(firstname, lastname, address, postcode, contact, email, username, password)

    if (result) {
        response.status(200).send({ status: result, message: "Account successfully created." })
    }
    else {
        response.status(500).send({ status: result, message: "Error creating account." })
    }
})

router.get(`/view`, async (request, response) => { // VIEW ACCOUNTS
    const {} = request.body
    const result = await ViewService()

    if (result) {
        response.status(200).send(result)
    }
    else {
        response.status(500).send({ status: result, message: "Error retrieving account." })
    }
})

router.post(`/search`, async (request, response) => { // SEARCH ACCOUNTS
    const { id } = request.body
    const result = await SearchService(id)

    if (result) {
        response.status(200).send(result)
    }
    else {
        response.status(500).send({ status: result, message: "Error retrieving account." })
    }
})

router.post(`/update`, async (request, response) => { // CREATE ACCOUNTS
    const { id,firstname, lastname, address, postcode, contact, email, username, password } = request.body
    const result = await UpdateService(id, firstname, lastname, address, postcode, contact, email, username, password)

    if (result) {
        response.status(200).send({ status: result, message: "Account successfully updated." })
    }
    else {
        response.status(500).send({ status: result, message: "Error updating account." })
    }
})

router.post(`/delete`, async (request, response) => { // DELETE ACCOUNT
    const { id } = request.body
    const result = await DeleteService(id)

    if (result) {
        response.status(200).send({ status: result, message: "Account successfully deleted." })
    }
    else {
        response.status(500).send({ status: result, message: "Error deleting account." })
    }
})

module.exports = router