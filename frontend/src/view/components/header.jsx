import React from "react";

import '../../css/header.css'
import carrinho from '../../assets/cart-icon.svg'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <>
            <header id="headerContainerPrincipal">
                <div id="containerLogoMenu">
                    <div id="logoPrincipal">
                        <img src={logo} />
                        <span>
                            EGame
                        </span>
                    </div>
                    <div id="menuSmartphone">
                        Icone Menu
                    </div>
                </div>
                <div id="containerCarrinhoCompra">
                    <img id="carrinhoCompra" src={carrinho}></img>
                </div>
            </header>
        </>
    );
}

export default Header;