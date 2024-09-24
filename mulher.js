import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

const mulheres = [
    { 
      id:'1',
      nome: "Ana Silva",
      imagem: "https://example.com/ana.jpg",
      minibio: "Ana é uma desenvolvedora de software com 10 anos de experiência em JavaScript e Python."
    },
    {
      id:'2',
      nome: "Beatriz Souza",
      imagem: "https://example.com/beatriz.jpg",
      minibio: "Beatriz é uma engenheira de dados apaixonada por big data e machine learning."
    },
    {
      id:'3',
      nome: "Carla Oliveira",
      imagem: "https://example.com/carla.jpg",
      minibio: "Carla é uma designer UX/UI que adora criar interfaces intuitivas e acessíveis."
    },
    {
      id: '4',
      nome: "Daniela Costa",
      imagem: "https://example.com/daniela.jpg",
      minibio: "Daniela é uma cientista de dados com foco em análise preditiva e visualização de dados."
    },
    { id:'5',
      nome: "Elisa Fernandes",
      imagem: "https://example.com/elisa.jpg",
      minibio: "Elisa é uma gerente de projetos com vasta experiência em metodologias ágeis."
    }
  ];

router.get('/mulheres', (request, response)=>{ 
    response.json(mulheres)
})
router.post('/mulheres', (request, response) =>{
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio
  }

  mulheres.push(novaMulher);

  response.status(201).json(novaMulher);

})

router.patch('/mulheres/:id', (request,response) =>{
  const id = request.params.id;
  const {nome, imagem, minibio} = request.body

  //encontra mulher pelo id
  const mulher = mulheres.find(function(mulher){
    return mulher.id === id
  }
)
  if(!mulher){
    return response.status(404).json({mensagem:'Mulher não encontrada.'})
  } 

  if (nome) mulher.nome = nome;
  if(imagem) mulher.imagem = imagem;
  if(minibio) mulher.minibio = minibio;

  response.json(mulher)
});

router.delete('/mulheres/:id', (request,response) =>{
  const id = request.params.id;
  
  //encontra a mulher pelo if
  const index = mulheres.findIndex(mulher => mulher.id === id)

  // se não encontrar, retorna 404
  if (index === -1) {
    return response.status(404).json({mensagem: 'Mulher não encontrada.'})
  }

  mulheres.splice(index, 1);

  response.status(200).json({mensagem: 'Mulher deletada com sucesso.'})
})

export default router;