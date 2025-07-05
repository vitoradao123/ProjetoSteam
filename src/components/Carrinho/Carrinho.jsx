import React, { useState, useEffect } from 'react'; // Importa React e os hooks necessários
import './Carrinho.css'; // Importa o CSS do componente

export default function Carrinho({ nome, imagem }) {
  // Estado que guarda a quantidade de itens no carrinho, começa em 0
  const [quantidade, setQuantidade] = useState(0);
  // Estado que guarda a mensagem que aparece para o usuário
  const [mensagem, setMensagem] = useState('');

  // useEffect executa esse código sempre que 'quantidade' ou 'nome' mudarem
  useEffect(function () {
    // Se quantidade maior que zero, mostra mensagem de adição
    if (quantidade > 0) {
      setMensagem(nome + ' adicionado (' + quantidade + ')');
    } else {
      // Se quantidade for zero, mostra mensagem de remoção
      setMensagem(nome + ' removido do carrinho');
    }

    // Define um temporizador para limpar a mensagem depois de 3 segundos
    var timer = setTimeout(function () {
      setMensagem('');
    }, 3000);

    // Função de limpeza que cancela o temporizador se o efeito for reexecutado antes dos 3 segundos
    return function () {
      clearTimeout(timer);
    };
  }, [quantidade, nome]); // Dependências do useEffect

  // Função para adicionar um item: incrementa quantidade em 1
  function adicionar() {
    setQuantidade(quantidade + 1);
  }

  // Função para remover um item: decrementa quantidade em 1, se quantidade for maior que zero
  function remover() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  // O que será mostrado na tela (JSX)
  return (
    <div className="carrinho"> {/* Container principal do carrinho */}
      <h2 className="tituloproduto">{nome}</h2> {/* Título com nome do produto */}
      <img src={imagem} className="produto-img" alt={nome} /> {/* Imagem do produto */}
      <p className="quantidade">Quantidade: {quantidade}</p> {/* Mostra a quantidade */}
      <div className="botoes"> {/* Container dos botões */}
        <button onClick={adicionar}>+</button> {/* Botão que chama a função adicionar */}
        <button onClick={remover}>−</button> {/* Botão que chama a função remover */}
      </div>
      {/* Se a mensagem existir (não vazia), mostra ela */}
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}
