import {faker} from '@faker-js/faker';

function createRandomCarList() {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        image: 'https://imgcdn.oto.com/large/gallery/exterior/14/1726/honda-city-rear-cross-side-view-337702.jpg',
        miles:1000,
        gearType: 'Automatic',
        price: faker.finance.amount({min:50000, max:200000})
    };
}

const carList = faker.helpers.multiple(createRandomCarList, {
    count: 7
})


export default{
    carList
}