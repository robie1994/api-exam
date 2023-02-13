const connection = require('../database/Connection')

module.exports = async (id) => {
    try {
        const query = `DELETE from users WHERE id=${id}`
        await connection(query)
        return true
    }
    catch {
        return false
    }
}