import express from 'express';
const router = express.Router();
import Diva from './mulherModel.js';


router.get('/mulheres', async (request, response)=>{ 
  try {
    const divas = await Diva.find(); //search for all women in db
    response.json(divas);
  } catch (error) {
    response.status(500).json({mensagem: 'Erro ao buscar as mulheres'})
 
  }
})
router.post('/mulheres', async (request, response) =>{
  const {nome, imagem, minibio} = request.body;

  try {
    const novaDiva = new Diva({
      nome,
      imagem,
      minibio
    });

    await novaDiva.save(); //saves the new woman in db
    response.status(201).json(novaDiva);
  } catch (error) {
    response.status(500).json({mensagem: 'Erro ao criar uma nova mulher.'})
  }
})

router.patch('/mulheres/:id', async (request,response) =>{
  const id = request.params.id;
  const {nome, imagem, minibio} = request.body

  try {
    const divaAtualizada = await Diva.findByIdAndUpdate(
      id,
      {nome, imagem, minibio},
      {new: true, runValidators: true} // return woman updated and validate data
    );
    
    if (!divaAtualizada) {
      return response.status(404).json({mensagem: 'Mulher não encontrada.'})

    }

    response.json(mulherAtualizada);
  } catch (error) {
    response.status(500).json({mensagem: 'Erro ao atualizar a mulher'})

  }
});

router.delete('/mulheres/:id', async (request,response) =>{
  const id = request.params.id;
  
  try {
    const mulherDeletada = await Diva.findByIdAndUpdate(id);

    if(!mulherDeletada) {
      return response.status(404).json({mensagem: 'Mulher não encontrada'})

    }
    response.status(200).json({mensagem: 'Mulher deletada com sucesso'});

  } catch (error) {
    response.status(500).json({mensagem: 'Erro ao deletar a mulher'})
  }
})

export default router;