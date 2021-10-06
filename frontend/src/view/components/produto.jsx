import React, { useContext } from "react";

import '../../css/produto.css'
import '../../css/gerais.css'

import { ProdutoContext } from "../../context/produtoContext";

function Produto(props) {

    const { salvaListaCarrinho } = useContext(ProdutoContext);

    return (
        <>
            <div className="containerProduto">
                <div className="nomeProduto centralizar">
                    <span className="negrito">
                        {props.objeto.name}
                    </span>
                </div>
                <div className="containerImagemProduto centralizar">
                    <img src={`/assets/${props.objeto.image}`} />
                </div>
                <div className="containerPrecoProduto centralizar">
                    <span>
                        {`R$ ${props.objeto.price}`}
                    </span>
                </div>
                <button className="botaoProduto" onClick={e => {
                    salvaListaCarrinho(props.objeto);
                }}>
                    <img src="assets/cart-icon-include.svg" />
                    <span>Comprar</span>
                </button>
            </div>
        </>
    );
}

export default Produto;