const connection = require('../database/Connection')

module.exports = async (id) => {
    try {
        const query = `SELECT * from users WHERE id=${id}`
        const result = await connection(query)
        return result
    }
    catch {
        return []
    }
}