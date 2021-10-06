import React, { useState } from "react";
import { Link } from 'react-router-dom'

import '../../css/header.css'

function Header({ childrens, displayAbaCarrinho }) {
    const [displayCarrinho, setDisplayCarrinho] = useState("semDisplay")
    const [propriedadeCarrinho, setPropriedadeCarrinho] = useState(false)

    function alteraPropriedadeCarrinho() {
        if (propriedadeCarrinho === true) {
            setDisplayCarrinho("semDisplay");
            setPropriedadeCarrinho(false);
        }
        else {
            setDisplayCarrinho("displayBlock");
            setPropriedadeCarrinho(true);
        }
    }

    return (
        <>
            <header id="headerContainerPrincipal">
                <div id="containerLogoMenu">
                    <div id="logoPrincipal">
                        <img src="assets/logo.png" />
                        <span>
                            EGame
                        </span>
                    </div>
                    <div id="menuSmartphone">
                        Icone Menu
                    </div>
                </div>
                <Link to="/carrinho">
                    <div id="containerCarrinhoCompra" onClick={e => alteraPropriedadeCarrinho()}>
                        <img id="carrinhoCompra" src="assets/cart-icon.svg"></img>
                    </div>
                </Link>
            </header>
        </>
    );
}

export default Header;