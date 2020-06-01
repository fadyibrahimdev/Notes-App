const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json') //get data from file (buffered machine lang)
const dataJSON = dataBuffer.toString() //transform data to string (still json not js)
const parsedData = JSON.parse(dataJSON) //parse the data (transform the json to js)

parsedData.name = 'Fady'
parsedData.age = 24

const JSONdata = JSON.stringify(parsedData) // transform the js to json
fs.writeFileSync('1-json.json', JSONdata)

