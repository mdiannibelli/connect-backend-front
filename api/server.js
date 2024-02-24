/* framework de node */
const express = require('express');
/* CORS (Cross-Origin Resource Sharing) es una medida de seguridad que ayuda a prevenir ataques de tipo cross-origin */
const cors = require('cors');

const app = express();
const port = 8080;

/* middleware para analizar los "body" de las requests que contienen datos codificados en formato URL y ayuda a parsear los datos y los hace accesible a través del req.body */
app.use(
    express.urlencoded({extended:true})
)

/* middleware para analizar los "body" de las requests que contienen datos codificados en formato JSON y ayuda a parsearlos a un objeto y los hace accesible a través del req.body */
app.use(
    express.json({
        type: "*/*"
    })
    )
    
/* Usamos el cors */
app.use(cors());
    

let transactionArray = [];

app.listen(port, () => {
    console.log(`This server is running in port ${port}`)
})

app.get('/transactions', (req,res) => {
    /* res.send("Me hicieron un get") */
    res.send(JSON.stringify(transactionArray));
})

app.post('/transactions', (req,res) =>{
    /* console.log(req.body)
    res.send('Me hicieron un post') */
    transactionArray.push(req.body)
    res.send(JSON.stringify(transactionArray))
    console.log(transactionArray)
})