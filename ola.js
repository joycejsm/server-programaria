import express from 'express'
const router = express.Router();


router.get('/ola', (request, response) =>{
    response.send('Olá Mundo!')
})

export default router;