import express from 'express';

import Diva from './mulherModel.js';

const router = express.Router();

router.get('/mulheres', async (request, response)=>{ 
  try {
    const divas = await Diva.find(); //search for all women in db
    response.json(divas);
  } catch (error) {
    response.status(500).json({mensagem: 'Erro ao buscar as mulheres'})
 
  }
})
router.post('/mulheres', async (request, response) =>{
  const {nome, imagem, minibio, citacao} = request.body;

  try {
    const novaDiva = new Diva({
      nome,
      imagem,
      minibio, 
      citacao
    });

    const mulherCriada = await novaDiva.save(); //saves the new woman in db
    response.status(201).json(mulherCriada);
  } catch (error) {
    console.error('Erro ao criar uma nova diva', error)

    if(error.name === 'ValidationError') {
      response.status(400).json({mensagem: 'Ddos inválidos', erros: error.errors})

    } else {
      response.status(500).json({mensagem: 'Erro ao criar uma nova mulher.'})
    }
    // response.status(500).json({mensagem: 'Erro ao criar uma nova mulher.'})
  }
}) 

router.patch('/mulheres/:id', async (request,response) =>{
  const id = request.params.id;
  const {nome, imagem, minibio, citacao} = request.body

  try {
    const divaAtualizada = await Diva.findByIdAndUpdate(
      id,
      {nome, imagem, minibio, citacao},
      {new: true, runValidators: true} // return woman updated and validate data
    );
    
    if (!divaAtualizada) {
      return response.status(404).json({mensagem: 'Mulher não encontrada.'})

    }

    response.json(divaAtualizada);
  } catch (error) {
    response.status(500).json({mensagem: 'Erro ao atualizar a mulher'})

  }
});

router.delete('/mulheres/:id', async (request,response) =>{
  const id = request.params.id;
  
  try {
    const mulherDeletada = await Diva.findByIdAndDelete(id);

    if(!mulherDeletada) {
      return response.status(404).json({mensagem: 'Mulher não encontrada'})

    }
    response.status(200).json({mensagem: 'Mulher deletada com sucesso'});

  } catch (error) {
    response.status(500).json({mensagem: 'Erro ao deletar a mulher'})
  }
})

export default router;