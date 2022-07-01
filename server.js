// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) },
    
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    },
  )

// Express Settings
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))


//controllers and routes
app.use('/places', require('./controllers/places'))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
   res.render('error404')
})

app.listen(process.env.PORT)

