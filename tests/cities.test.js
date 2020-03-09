
const City = require('../models/city');

test('Can create a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});


test ('can create a city object by factory', () => {

    let city = City.create();



})