import React, { useState } from "react";
import { Link } from 'react-router-dom'

import '../../css/header.css'

function Header({ props }) {
    const [displayMenu, setDisplayMenu] = useState("semDisplay");
    const [propriedadeMenu, setPropriedadeMenu] = useState(false);

    function alteraPropriedadeMenu() {
        if (propriedadeMenu === true) {
            setDisplayMenu("semDisplay");
            setPropriedadeMenu(false);
        }
        else {
            setDisplayMenu("displayBlock");
            setPropriedadeMenu(true);
        }
    }

    function closeMenu() {
        setDisplayMenu("semDisplay");
        setPropriedadeMenu(false);
    }

    return (
        <>
            <header id="headerContainerPrincipal">
                <div id="containerLogoMenu">
                    <div id="logoPrincipal">
                        <img src="assets/logo.png" />
                        <span className="textoLogo">
                            EGame
                        </span>
                    </div>
                    <div id="menuSmartphone" onClick={e => alteraPropriedadeMenu()}>
                        <img src="assets/menu.svg" />
                        <div id="abaMenuSmartphone" className={`${displayMenu}`} >
                            <ul>
                                <li className="containerItemAbaMenuSmartphone" id="tituloSubMenu">
                                    <img src="assets/logo.png" id="logoItemAbaMenuSmartphone" />
                                    <span className="textoLogo">
                                        EGame
                                    </span>
                                </li>
                                <Link to="/" className="limparLink corPadrao">
                                    <li className="containerItemAbaMenuSmartphone">
                                        Home
                                    </li>
                                </Link>
                                <li className="containerItemAbaMenuSmartphone">
                                    Estratégia
                                </li>
                                <li className="containerItemAbaMenuSmartphone">
                                    Esporte
                                </li>
                                <li className="containerItemAbaMenuSmartphone">
                                    Simulação
                                </li>
                                <li className="containerItemAbaMenuSmartphone">
                                    FPS
                                </li>
                            </ul>
                            <div id="containerCloseMenu" onClick={e => closeMenu()}>
                                <img src="assets/close.svg" alt="Botao Close" />
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/carrinho" className="limparLink">
                    <div id="containerCarrinhoCompra">
                        <img id="carrinhoCompra" src="assets/cart-icon.svg"></img>
                        <p>Carrinho</p>
                        <span id="contagemProdutoCarrinho">{props}</span>
                    </div>
                </Link>
            </header>
        </>
    );
}

export default Header;