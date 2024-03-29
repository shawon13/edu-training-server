const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
const events = require('./data/events.json')

app.get('/events', (req, res) => {
    res.send(events)
})
app.get('/event/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const eventId = events.find(event => event.id == id);
    res.send(eventId)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})