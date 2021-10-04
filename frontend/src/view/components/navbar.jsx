import React from "react";

import '../../css/navbar.css'


function Navbar() {
    return (
        <>
            <nav id="containerNavBar">
                <button className="botaoNavbar">
                    Home
                </button>
                <button className="botaoNavbar">
                    Estratégia
                </button>
                <button className="botaoNavbar">
                    Esporte
                </button>
                <button className="botaoNavbar">
                    Simulação
                </button>
                <button className="botaoNavbar">
                    FPS
                </button>
            </nav>
        </>
    );
}

export default Navbar;
