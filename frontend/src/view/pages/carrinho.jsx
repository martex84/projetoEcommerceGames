import React, { useCallback, useEffect, useState } from "react";

import '../../css/carrinho.css'
import Header from "../components/header";
import Navbar from "../components/navbar";

function Carrinho() {

    const [valorProps, setValorProps] = useState();
    const [objetoProdutoInterno, setObjetoProdutoInterno] = useState();
    const [componenteProduto, setComponenteProduto] = useState([]);
    const [listaComponenteProdutoId, setListaComponenteProdutoId] = useState([]);
    const [idAnterior, setIdAnterior] = useState("");

    function verificaInclusao(objeto) {
        let returnoBoolean = false;
        listaComponenteProdutoId.map(componente => {
            if (returnoBoolean === false) {
                if (componente === objeto.id) {
                    return returnoBoolean = true;
                }
            }
        })
        return returnoBoolean;
    }

    function removerObjeto(idObjeto) {
        listaComponenteProdutoId.map(componente => {

            if (componente === idObjeto) {
                componenteProduto.splice(idObjeto);

            }
        })
    }
    const criarGrupoProduto = useCallback(() => {
        const valorRetorno = [...componenteProduto]
        if (objetoProdutoInterno !== undefined) {
            if (verificaInclusao(objetoProdutoInterno) === false) {
                setListaComponenteProdutoId([...listaComponenteProdutoId, objetoProdutoInterno.id])

                valorRetorno.push(
                    <div className="containerProdutoCarrinho" key={objetoProdutoInterno.id}>
                        <div className="containerImagemProdutoCarrinho">
                            <img src={`/assets/${objetoProdutoInterno.image}`} />
                        </div>
                        <div className="containerInformacaoProdutoCarrinho centralizar">
                            <p className="informacaoProdutoCarrinho">
                                {objetoProdutoInterno.name}
                            </p>
                            <p className="informacaoProdutoCarrinho">
                                {`R$ ${objetoProdutoInterno.price}`}
                            </p>
                            <img src="/assets/delete.svg" alt="Lixeira" onClick={e => removerObjeto(objetoProdutoInterno.id)} />
                        </div>
                    </div>
                )
            }
        }
        setComponenteProduto(valorRetorno);
    }, [objetoProdutoInterno, setComponenteProduto])


    useEffect(() => {
        /* if (objetoCarrinho !== undefined) {
            if (idAnterior === "") {
                setIdAnterior(objetoCarrinho.id);
                setObjetoProdutoInterno(objetoCarrinho);
                criarGrupoProduto();
            }
            else if (idAnterior !== objetoCarrinho.id) {
                setIdAnterior(objetoCarrinho.id);
                setObjetoProdutoInterno(objetoCarrinho);
                criarGrupoProduto();
            }

        } */
    }, [criarGrupoProduto, listaComponenteProdutoId, componenteProduto])
    return (
        <>
            <Header />
            <Navbar />
            <section id="sectionCarrinho">
                <div id="containerGrupoProdutos">
                    <div id="grupoProdutosCarrinho">
                        {componenteProduto}
                    </div>
                </div>
                <div id="containerResultadoCheckout">
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
            </section>
        </>
    );
}

export default Carrinho;