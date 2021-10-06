import React from "react";
import { Link } from "react-router-dom";

import '../../css/navbar.css'


function Navbar() {
    return (
        <>
            <nav id="containerNavBar">
                <Link to="/">
                    <button className="botaoNavbar">
                        Home
                    </button>
                </Link>
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
