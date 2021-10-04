import React from "react";

import '../../css/produto.css'
import '../../css/gerais.css'


function Produto(props) {

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
                <button id="botaoProduto">
                    Comprar
                </button>
            </div>
        </>
    );
}

export default Produto;