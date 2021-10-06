import React, { useCallback, useEffect, useState } from "react";

import '../../css/carrinho.css'
import Header from "../components/header";
import Navbar from "../components/navbar";

function Carrinho() {


    const [valorLocalStorage, setValorLocalStorage] = useState(JSON.parse(localStorage.getItem("itemCarrinho")));
    const [objeto, setObjetoProdutoInterno] = useState();
    const [componenteProduto, setComponenteProduto] = useState([]);
    const [listaComponenteProdutoId, setListaComponenteProdutoId] = useState([]);
    const [idAnterior, setIdAnterior] = useState("");
    const [calculoProdutos, setCalculoProdutos] = useState({
        frete: 0,
        subtotal: 0,
        total: 0,
    })

    function calcularValores() {
        let frete = 0;
        let subtotal = 0;
        let total = 0;

        valorLocalStorage.map(componente => {
            subtotal = subtotal + componente.price;
            frete = frete + 10;
            total = frete + subtotal;
        })

        setCalculoProdutos({
            frete,
            subtotal,
            total
        })
    }

    const removerObjeto = useCallback((idObjeto) => {
        const valorLocal = []


        valorLocalStorage.map((componente, index) => {
            if (componente.id !== idObjeto) {
                valorLocal.push(componente)
            }
        })

        localStorage.removeItem("itemCarrinho");

        localStorage.setItem("itemCarrinho", JSON.stringify(valorLocal));

        window.location.reload();
    });

    const criarGrupoProduto = useCallback(() => {
        const valorRetorno = [];

        valorLocalStorage.map(objeto => {
            valorRetorno.push(
                <div className="containerProdutoCarrinho" key={objeto.id}>
                    <div className="containerImagemProdutoCarrinho">
                        <img src={`/assets/${objeto.image}`} />
                    </div>
                    <div className="containerInformacaoProdutoCarrinho centralizar">
                        <p className="informacaoProdutoCarrinho negrito">
                            {objeto.name}
                        </p>
                        <p className="informacaoProdutoCarrinho">
                            {`R$ ${objeto.price}`}
                        </p>
                        <div className="botaoCarrinho" onClick={e => removerObjeto(objeto.id)} >
                            <img src="/assets/delete.svg" alt="Lixeira" />
                            <p className="informacaoProdutoCarrinho">Remover</p>
                        </div>
                    </div>
                </div>
            )
        })

        calcularValores();

        setComponenteProduto(valorRetorno);
    }, [localStorage, setComponenteProduto])


    useEffect(() => {
        if (valorLocalStorage !== null) {
            criarGrupoProduto();
        }
    }, [valorLocalStorage, criarGrupoProduto])
    return (
        <>
            <Header />
            <Navbar />
            <section id="sectionCarrinho">
                <div id="containerGrupoProdutosCarrinho">
                    <h2 id="tituloGrupoProduto">
                        Produto Carrinho
                    </h2>
                    <div id="grupoProdutosCarrinho">
                        {componenteProduto}
                    </div>
                </div>
                <div id="containerResultadoCheckout">
                    <h2 id="tituloResultadoCheckout">
                        Resumo
                    </h2>
                    <div id="dadosResultadoCarrinho">
                        <p className="informacaoResultado">
                            <span>{`Frete: `}</span>
                            <span className="negrito">${calculoProdutos.frete}</span>
                        </p>
                        <p className="informacaoResultado">
                            <span>{`SubTotal: `}</span>
                            <span className="negrito">${calculoProdutos.subtotal}</span>
                        </p>
                        <p className="informacaoResultado">
                            <span>{`Total: `}</span>
                            <span className="negrito">${calculoProdutos.total}</span>
                        </p>
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
            </section>
        </>
    );
}

export default Carrinho;