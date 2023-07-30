const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connected")
})

const sample = (array) => array[Math.floor(Math.random()* array.length)]

const seedDB = async() =>{
    await Campground.deleteMany({});
    for(let i = 0; i< 300; i++){
        const random1000 =Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() *20)+10;
       const camp =   new Campground({
            author: '64c16cd776223a7940b922f7',
            location: `${cities[random1000].city}, ${cities[random1000].state} `,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry:  { 
                type: 'Point', 
                coordinates: [ 
                    cities[random1000].longitude,
                    cities[random1000].latitude
                 ] 
            },
            price,
            image: [
                {
                    url:'https://res.cloudinary.com/dwopwvm8j/image/upload/v1690739262/YelpCamp/eode1yizdbk292lyvua4.jpg',
                     filename: 'YelpCamp/hkqbwns5jayyw6vk2fb7'
                    }
                ]
            // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            
            
        })
        await camp.save();
    }
}

seedDB().then(() =>{
    mongoose.connection.close();
})