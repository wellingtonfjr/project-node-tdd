const { describe, it, beforeEach } = require('@jest/globals')
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

    it('Given a car category containing 3 different cars', () => {
        
    })

    it('In order to get an available car in a specific category', async () => {
        console.log('carService.teste()', await carService.teste('67ca7dec-779c-40a2-8d00-7ead654297af'))
    })
})