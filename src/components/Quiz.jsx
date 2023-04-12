import React, { useState } from 'react';
import Pergunta from './Pergunta';

const Quiz = ({ perguntas }) => {
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState({});
  const [enviando, setEnviando] = useState(false);

  const aoSelecionarOpcao = (pergunta, opcao) => {
    if (opcoesSelecionadas[pergunta]) {
      alert('Você já respondeu esta pergunta!')
      return;
    }

    setOpcoesSelecionadas((opcoesAntigas) => ({
      ...opcoesAntigas,
      [pergunta]: opcao,
    }));
  };

  const aoEnviar = () => {
    if (Object.keys(opcoesSelecionadas).length < perguntas.length) {
      alert('Por favor, responda todas as perguntas antes de finalizar o quiz!');
    } else {
      setEnviando(true);
    }
  };

  const aoReiniciar = () => {
    setOpcoesSelecionadas({});
    setEnviando(false);
  };

  const respostasCorretas = perguntas.reduce((acertos, pergunta) => {
    if (opcoesSelecionadas[pergunta.id] === pergunta.resposta) {
      return acertos + 1;
    } else {
      return acertos;
    }
  }, 0);

  if (enviando) {
    return (
      <div>
        <h1>Resultado:</h1>
        <p>
          Você acertou {respostasCorretas} de {perguntas.length} perguntas!
        </p>
        <button onClick={aoReiniciar}>Reiniciar</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Teste seus conhecimentos em React</h1>
      {perguntas.map((pergunta) => (
        <Pergunta
          key={pergunta.id}
          pergunta={pergunta.pergunta}
          opcoes={pergunta.opcoes}
          opcaoSelecionada={opcoesSelecionadas[pergunta.id]}
          aoSelecionarOpcao={(opcao) => aoSelecionarOpcao(pergunta.id, opcao)}
        />
      ))}
      <button onClick={aoEnviar}>Finalizar</button>
    </div>
  );
};

export default Quiz;
