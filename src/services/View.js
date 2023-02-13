const connection = require('../database/Connection')

module.exports = async () => {
    try {
        const query = `SELECT * from users`
        const result = await connection(query)
        return result
    }
    catch {
        return []
    }
}