import React from "react";
import { Link } from "react-router-dom";

import '../../css/footer.css'
import '../../css/gerais.css'


function Footer() {
    return (
        <>
            <footer id="footerPrincipal">
                <div className="containerInformacaoFooter">
                    <span>
                        Desenvolvido por Martex84 - </span>
                    <a href="https://github.com/martex84" className="limparLink corPadrao negrito">
                        GITHUB
                    </a>
                    <span> / </span>
                    <a href="https://www.linkedin.com/in/martex8/" className="limparLink corPadrao negrito">
                        LINKEDIN
                    </a>

                </div>
                <div className="containerInformacaoFooter">
                    <span>
                        Projeto sem fins lucrativos e com todos os direitos reservados aos donos das imagens e ícones!
                    </span>
                </div>
            </footer>
        </>
    );
}

export default Footer;
