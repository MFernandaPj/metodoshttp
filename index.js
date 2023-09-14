const express = require('express')

const app = express()
app.get('/',(req, res) => {
   res.send('Hola GET')
})

app.post('/',(req,res) => {
            res.send('HOLA POST')
})

app.put('/',(req,res) => {
    res.send('HOLA PUT')
})

app.patch('/',(req,res) => {
    res.send('HOLA PATCH')
})

app.delete('/',(req,res) => {
    res.send('HOLA DELETE')
})


app.listen(3000, () =>{
    console.log('listening on port 3000')
})

