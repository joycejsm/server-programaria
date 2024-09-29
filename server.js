import express from 'express';
// import dotenv from'dotenv';
import olaRouter from './ola.js';
import mulherRouter from './mulher.js';
import horaLocal from './horaLocal.js';
import cors from 'cors';
import connectionBD from './bancoDeDados.js';

connectionBD()
// dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;



app.use('/', olaRouter);
app.use('/', mulherRouter);
app.use('/', horaLocal)

app.get('/', (request, response) =>{
    response.send('Hello World!');
})

app.listen(port, () =>{
    console.log(`Server running in http://localhost:${port}`);
   
});