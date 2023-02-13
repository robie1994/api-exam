const connection = require('../database/Connection')

module.exports = async (id,firstname, lastname, address, postcode, contact, email, username, password) => {
    try {
        const query = `UPDATE users SET FirstName='${firstname}',LastName='${lastname}',Address='${address}',PostCode='${postcode}',ContactNumber='${contact}',Email='${email}',UserName='${username}',Password=md5('${password}') ` +
        `WHERE id='${id}'`
        await connection(query)
        return true
    }
    catch {
        return false
    }
}