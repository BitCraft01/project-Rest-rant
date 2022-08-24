const db = require('./models')

db:AnimationPlaybackEvent.create([{
    name: 'H-THAI-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/Rest1.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state:  'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/Coffee.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success', err)
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})