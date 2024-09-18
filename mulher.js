import express from 'express';
const router = express.Router();

const mulheres = [
    {
      nome: "Ana Silva",
      imagem: "https://example.com/ana.jpg",
      minibio: "Ana é uma desenvolvedora de software com 10 anos de experiência em JavaScript e Python."
    },
    {
      nome: "Beatriz Souza",
      imagem: "https://example.com/beatriz.jpg",
      minibio: "Beatriz é uma engenheira de dados apaixonada por big data e machine learning."
    },
    {
      nome: "Carla Oliveira",
      imagem: "https://example.com/carla.jpg",
      minibio: "Carla é uma designer UX/UI que adora criar interfaces intuitivas e acessíveis."
    },
    {
      nome: "Daniela Costa",
      imagem: "https://example.com/daniela.jpg",
      minibio: "Daniela é uma cientista de dados com foco em análise preditiva e visualização de dados."
    },
    {
      nome: "Elisa Fernandes",
      imagem: "https://example.com/elisa.jpg",
      minibio: "Elisa é uma gerente de projetos com vasta experiência em metodologias ágeis."
    }
  ];

router.get('/mulheres', (request, response)=>{ 
    response.json(mulheres)
})

export default router;