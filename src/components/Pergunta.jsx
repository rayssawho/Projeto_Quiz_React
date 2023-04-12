import React from 'react';

const Pergunta = ({ pergunta, opcoes, opcaoSelecionada, aoSelecionarOpcao }) => {
  return (
    <div>
      <h2>{pergunta}</h2>
      {opcoes.map((opcao) => (
        <div key={opcao}>
          <input
            type="radio"
            id={opcao}
            name={pergunta}
            value={opcao}
            checked={opcaoSelecionada === opcao}
            onChange={() => aoSelecionarOpcao(opcao)}
          />
          <label htmlFor={opcao}>{opcao}</label>
        </div>
      ))}
    </div>
  );
};

export default Pergunta;
