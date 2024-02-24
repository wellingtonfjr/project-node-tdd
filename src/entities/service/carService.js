const BaseRepository = require("../repository/baseRepository");

class CarService {
    constructor ({ cars }) {
        console.log('cars', cars)
        this.carsRepository = new BaseRepository({ file: cars })
    }

    async teste(itemId) {
        return await this.carsRepository.find(itemId)
    }
}

module.exports = CarService