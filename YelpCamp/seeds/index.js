const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground')
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("error");
        console.log(err)
    })

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10
        const camp = new Campground({
            author: '64bbf4633c0935104d4ce3d4',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/9046579',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed inventore quae quaerat delectus repellat impedit soluta hic quisquam nisi, vero minima quis laudantium omnis facere ipsam corporis itaque. Officia, molestias.',
            price: price

        })
        await camp.save()
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})