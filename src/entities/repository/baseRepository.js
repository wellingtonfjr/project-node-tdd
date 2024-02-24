
const { readFile } = require('fs/promises')

class BaseRepository {
    constructor ({ file }) {
        this.file = file
    }

    async find(itemId) {
        console.log('this.file', this.file)
        const content = JSON.parse(await readFile(this.file))
        if(!itemId) return content

        return content.find(({ id }) => id = itemId)
    }
}

module.exports = BaseRepository