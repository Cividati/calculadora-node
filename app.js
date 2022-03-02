const express = require('express')
const app = express()
const port = 80
const Calculadora = require('./calculadora')

app.get('/', (req, res) => {

  // read README.md
  const fs = require('fs')
  var data;
  try {
    data = fs.readFileSync('./README.md', 'utf8')
  } catch (err) {
    console.error(err)
  }

  // convert markdown to html
  var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    html      = converter.makeHtml(data);

  res.send(html)
})

app.get('/sum', (req, res) => {
  res.send(Calculadora.calculate(req, res))
})

app.get('/sub', (req, res) => {
  res.send(Calculadora.calculate(req, res))
})

app.get('/div', (req, res) => {
  res.send(Calculadora.calculate(req, res))
})

app.get('/mul', (req, res) => {
  res.send(Calculadora.calculate(req, res))
})

app.get('/pot', (req, res) => {
  res.send(Calculadora.calculate(req, res))
})

app.get('/rad', (req, res) => {
  res.send(Calculadora.calculate(req, res))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})