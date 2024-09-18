import express from 'express'
const router = express.Router();

router.get('/hora', (request,response)=>{
    const dataAtual = new Date();
    const horarioLocal = dataAtual.toLocaleTimeString('pt-BR', {timeZone:'America/Fortaleza'});

    response.send(`Horário local: ${horarioLocal}`);
})
export default router;