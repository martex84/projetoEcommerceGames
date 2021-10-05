import React, { useEffect, useState } from "react";

import '../../css/carrinho.css'

function Carrinho(props) {

    const [objetoProduto, setObjetoProduto] = useState([
        {
            "id": 99,
            "name": "Call Of Duty WWII",
            "price": 249.99,
            "score": 205,
            "image": "call-of-duty-wwii.png"
        }
    ]);

    const [componenteProduto, setComponenteProduto] = useState();

    function criarGrupoProduto() {
        const valorRetorno = []
        objetoProduto.map(produto => {
            valorRetorno.push(
                <div className="containerProdutoCarrinho">
                    <div className="containerImagemProdutoCarrinho">
                        <img src={`/assets/${produto.image}`} />
                    </div>
                    <div className="containerInformacaoProdutoCarrinho centralizar">
                        <p className="informacaoProdutoCarrinho">
                            {produto.name}
                        </p>
                        <p className="informacaoProdutoCarrinho">
                            {`R$ ${produto.price}`}
                        </p>
                        <img src="/assets/delete.svg" alt="Lixeira" />
                    </div>
                </div>
            )
        })

        setComponenteProduto(valorRetorno);
    }

    useEffect(() => {
        if (componenteProduto === undefined) {
            criarGrupoProduto()
        }
    })

    return (
        <>
            <div id="containerAbaInternaCarrinho">
                <div id="grupoProdutosCarrinho">
                    {componenteProduto}
                </div>
                <div id="resultadoCarrinho">
                    <div id="dadosResultadoCarrinho">
                        <p>{`Frete: ${"000,00"}`}</p>
                        <p>{`SubTotal: ${"000,00"}`}</p>
                        <p>{`Total: ${"000,00"}`}</p>
                    </div>
                    <div id="containerGrupoBotaoResultadoCarrinho">
                        <div className="containerBotaoResultadoCarrinho">
                            <button className="botaoResultado botaoTotal">Concluir Compra</button>
                        </div>
                        <div className="containerBotaoResultadoCarrinho">
                            <button className="botaoResultado botaoLimpar">Limpar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carrinho;