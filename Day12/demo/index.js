const express = require('express');
const users1 = require('./MOCK_DATA.json');
const port = 3000;
const p = require('path');
const f = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello From Express");
});

app.get('/users1', (req, res) => {
    res.json(users1);
});

// app.get('/users/:id',(req,res) =>{
//     const id = Number(req.params.id);
//     const user =users1.find(
//         user => user.id ==id
//     )
//     return res.json(user);
// });

// app.get('/users/:id/:email',(req,res) =>{
//     const email = parse(req.params.email);
//     const user =users1.find(
//         user => user.email
//     )
//     return res.json(user);
// });

// app.delete('/users/:id', (req, res) => {
//     const id = Number(req.params.id);  
//     const userIndex = users1.findIndex(
//         user => user.id === id
//     )
//     if (userIndex === -1)
//         return res.status(404).send('Data not found');
//     const deletedItem = users1.splice(userIndex, 1);
//     return res.json("Dae ");
// });
  app.get('/users1/aboutus', (req, res) => {
    const t = p.join(__dirname, 'aboutus.html');
    res.sendFile(t);
});

app.use(express.urlencoded({ extended: false }))
app.post('/adduser', (req, res) => {
    const data = req.body;
    console.log("data " + data.email);
    users1.push(
        { data, id: users1.length + 1 });
    f.writeFile('./MOCK_DATA.json',
        JSON.stringify(users1), (err) => {
            console.log(err)
        });

    return res.json("data added ");
    });

    

 
app.listen(port)
console.log("From Start Script");