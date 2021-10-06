import React, { useContext } from "react";

import '../../css/produto.css'
import '../../css/gerais.css'

import { ProdutoContext } from "../../context/produtoContext";

function Produto(props) {

    const { salvaListaCarrinho } = useContext(ProdutoContext);

    return (
        <>
            <div id="containerProduto">
                <div id="nomeProduto" className="centralizar">
                    <span>
                        {props.objeto.name}
                    </span>
                </div>
                <div id="containerImagemProduto" className="centralizar">
                    <img src={`/assets/${props.objeto.image}`} />
                </div>
                <div id="containerPrecoProduto" className="centralizar">
                    <span>
                        {props.objeto.price}
                    </span>
                </div>
                <button id="botaoProduto" onClick={e => {
                    salvaListaCarrinho(props.objeto);
                }}>
                    Comprar
                </button>
            </div>
        </>
    );
}

export default Produto;