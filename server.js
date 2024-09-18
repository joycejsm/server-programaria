import express from 'express';
import olaRouter from './ola.js';
import mulherRouter from './mulher.js';
import horaLocal from './horaLocal.js';

const app = express();
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