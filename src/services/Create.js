const connection = require('../database/Connection')

module.exports = async (firstname, lastname, address, postcode, contact, email, username, password) => {
    try {
        const query = `INSERT INTO users (FirstName, LastName, Address, PostCode, ContactNumber, Email, UserName, Password)` +
            `VALUES ('${firstname}','${lastname}','${address}','${postcode}','${contact}','${email}','${username}',md5('${password}'))`
        await connection(query)
        return true
    }
    catch {
        return false
    }
}