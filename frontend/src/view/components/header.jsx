import React from "react";

import '../../css/header.css'


function Header() {
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
                <div id="containerCarrinhoCompra">
                    <img id="carrinhoCompra" src="assets/cart-icon.svg"></img>
                </div>
            </header>
        </>
    );
}

export default Header;