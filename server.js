var express = require('express')
var bodyparser = require('body-parser')

var app = express()

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use(bodyparser.urlencoded({
  extended: false
}))

app.locals.site = {
  name: 'EagleRock.Kitchen',
  tab: 'ERK',
  author: {
    firstname: 'Dylan',
    lastname: 'Smith'
  }
}

//
// Register application routes
//

// Respond to the base path
app.get('/', function (req, res) {
  res.render('index', {
    title: 'Home'
  })
})

// Respond to the menu path
app.get('/menu', function (req, res) {
  res.render('menu', {
    title: 'Menu'
  })
})

app.get('/about', function (req, res) {
  res.render('about', {
    title: 'About'
  })
})

app.get('/contact', function (req, res) {
  res.render('contact', {
    title: 'Contact'
  })
})

// Start the server
var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('%s listening at http://localhost:%s',
    app.locals.site.name, port)
})
