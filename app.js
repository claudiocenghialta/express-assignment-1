const express = require('express');

const app = express();


app.use('/users', (req, res, next) => {
  console.log('test2')
  res.send('<h1>ciao2</h1>')
})
app.use('/', (req, res, next) => {
  console.log('test1')
  res.send('<h1>Test</h1>')

})

app.listen(3000);