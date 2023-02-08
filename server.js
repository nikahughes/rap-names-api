const { response } = require('express')
const express = require('express')
const app = express() // to simply use all the methods to use with express
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{ //ensure lower case
        'age': 29,
        'birthName':'Bin',
        'birthLocation': 'London, UK'
    },
    'chance':{
        'age': 29,
        'birthName':'Chansler',
        'birthLocation': 'Chicago, USA'
    },
    'unknown':{
        'age': 0,
        'birthName':'unknown',
        'birthLocation': 'unknown '
    },
}

app.get('/', (request, response) => { // it is like an event listener
    response.sendFile(__dirname + '/index.html')
}) 

app.get('/api/:rapperName', (request, response) => { // after colon is not a path, it's a query para
    const rappersName =  request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){ //use brackets because name can have spaces
        response.json(rappers[rappersName]) 
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => { // server needs to listen
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})