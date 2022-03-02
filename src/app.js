const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode=require("./utils/geocode");
const forecast=require("./utils/forecast");
const app = express()
const port=process.env.PORT || 3000;
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
//console.log(publicDirectoryPath);
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Rohit',
        content: 'Use this for weather'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Rohit',
        content:"Something about me"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Rohit'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send("Enter valid parameter");
    }
    geocode(req.query.address,(err,{latitude,longitude,location}={})=>{
            if(err){
              return res.send({
                   'error':err,
               })
            }
                else{
                        console.log(location),
                forecast(longitude,latitude,(err,forecastdata)=>{
                    if(!err){
                        console.log(forecastdata.current.observation_time);
                    res.send({
                        forecast:"weather currently is "+forecastdata.current.weather_descriptions[0]+" feels like "+forecastdata.current.feelslike+" degrees",
                        country: forecastdata.location.country,
                        address: req.query.address,
                        time: forecastdata.current.observation_time
                    })  
                }
                else{
                    res.send({
                        err,
                    })
                }

                })
            }

    })

    
   
})
app.get('*', (req, res) => {
    res.render('404', {
       
        title: 'Error 404 page',
     
    })
})
app.get('/help/*', (req, res) => {
    res.render('404_article', {
       
        title: 'Error 404 cannot load any articles',
  
    })
})

app.listen(port, () => {
    console.log('Server is up on port 3000.')
})