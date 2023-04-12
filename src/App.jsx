import React from 'react';
import Quiz from './components/Quiz';

const perguntas = [
  {
    id: 1,
    pergunta: 'O que é React JS?',
    opcoes: ['a) Uma reação química', 'b) Uma classe em Java', 'c) Uma biblioteca JavaScript de front-end', 'd) Um bug em um sistema'],
    resposta: 'c) Uma biblioteca JavaScript de front-end',
  },
  {
    id: 2,
    pergunta: 'O React foi criado pelo?',
    opcoes: ['a) Orkut', 'b) Twitter', 'c) Instagram', 'd) Facebook'],
    resposta: 'd) Facebook',
  },
  {
    id: 3,
    pergunta: 'Quais das alternativas NÃO é uma funcionalidade do React?',
    opcoes: ['a) Cria conteúdo para o TikTok', 'b) Fluxo de dados unidirecional', 'c) Pode ser renderizado no servidor', 'd) Utiliza componentes reutilizáveis'],
    resposta: 'a) Cria conteúdo para o TikTok',
  },
];

function App() {
  return (
    <div className="App">
      <Quiz perguntas={perguntas} />
    </div>
  );
}

export default App;
