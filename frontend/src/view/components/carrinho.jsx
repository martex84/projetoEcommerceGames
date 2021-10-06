import React, { useCallback, useEffect, useState } from "react";

import '../../css/carrinho.css'

function Carrinho({ propsCarrinho, viewAba }) {


    const { objetoCarrinho } = propsCarrinho;
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
        if (objetoCarrinho !== undefined) {
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

        }
    }, [propsCarrinho, criarGrupoProduto, listaComponenteProdutoId, componenteProduto])
    return (
        <>
            <div id="containerAbaInternaCarrinho">
                <p> {valorProps} </p>
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