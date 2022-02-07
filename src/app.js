const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const PORT = process.env.PORT || 3000

function locate(relativePath) {
  return path.join(__dirname, relativePath)
}

app.set('view engine', 'hbs')
app.set('views', locate('../templates/views'))
hbs.registerPartials('views', locate('../templates/partials'))

app.use(express.static(
  locate('../public')
))

app.get('', (req, res) => {
  res.render('index.hbs')
})

app.get('*', (req, res) => {
  res.render('404', {
    message: "Epic fail"
  })
})

app.listen(PORT, () => {
  console.log("Hello there")
})
