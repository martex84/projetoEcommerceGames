import React from "react";

import '../../css/carrinho.css'

function Carrinho(props) {

    const produto = [
        {
            "id": 99,
            "name": "Call Of Duty WWII",
            "price": 249.99,
            "score": 205,
            "image": "call-of-duty-wwii.png"
        }
    ]

    return (
        <>
            <div id="containerAbaInternaCarrinho">
                <div id="grupoProdutosCarrinho">
                    <div className="containerProdutoCarrinho">
                        <div className="containerImagemProdutoCarrinho">
                            <img src={`/assets/${produto[0].image}`} />
                        </div>
                        <div className="containerInformacaoProdutoCarrinho centralizar">
                            <p className="informacaoProdutoCarrinho">
                                {produto[0].name}
                            </p>
                            <p className="informacaoProdutoCarrinho">
                                {`R$ ${produto[0].price}`}
                            </p>
                            <img src="/assets/delete.svg" alt="Lixeira" />
                        </div>
                    </div>
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