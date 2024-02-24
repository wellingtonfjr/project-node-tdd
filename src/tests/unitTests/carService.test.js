const { describe, test, beforeEach } = require('@jest/globals')
const CarService = require('../../entities/service/carService')

const { join } = require('path')
const carsBaseFolder = join(__dirname, '../../../database', 'cars.json')


describe('Car category service', () => {
    let carService = {}
    beforeEach(() => {
        carService = new CarService({
            cars: carsBaseFolder
        })
    })
    test('first test', async () => {
        console.log('carService.teste()', await carService.teste('67ca7dec-779c-40a2-8d00-7ead654297af'))
    })
})