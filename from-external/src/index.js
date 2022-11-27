const express = require('express')
const cors = require('cors')
const app = express()
const middlewares = require('./middlewares')
const router = require('./routes')

require('dotenv').config();

app.use(cors())
app.use(express.json())
app.use(middlewares.setHeaders)
app.use('/riot', router)
app.get('/', (req, res) => {
  
  res.status(200).json({ message: 'Deu bom'})
})
app.listen(3500, () => console.log('Deu bom na porta 3500'))

