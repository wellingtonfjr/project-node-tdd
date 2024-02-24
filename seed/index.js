const { faker } = require('@faker-js/faker')
const Car = require('./../src/entities/car')
const CarCategory = require('./../src/entities/carCategory')
const Customer = require('./../src/entities/customer')
const { writeFile } = require('fs/promises')


const { join } = require('path')
const seederBaseFolder = join(__dirname, '../', 'database')
const ITEMS_AMOUNT = 2

const carCategory = new CarCategory({
    id: faker.string.uuid(),
    name: faker.vehicle.type(),
    carIds: [],
    price: faker.commerce.price({ min: 20, max: 100 })
})
const cars = []
const customers = []
for (let index = 0; index <= ITEMS_AMOUNT; index++) {
    const car = new Car({
        id: faker.string.uuid(),
        name: faker.vehicle.model(),
        releaseYear: true,
        available: true,
        gasAvailable: faker.date.past().getFullYear()
    })
    carCategory.carIds.push(car.id)
    cars.push(car)

    const customer = new Customer({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        age: faker.number.int({ min: 18, max: 50 })
    })
    customers.push(customer)
}

const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data))

;(async () => {
    await write('cars.json', cars)
    await write('carCategory.json', carCategory)
    await write('customer.json', customers)
})()