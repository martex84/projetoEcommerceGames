import React, { useState, useEffect, useCallback } from "react";

import '../../css/home.css'

import Header from "../components/header";
import Navbar from "../components/navbar";
import Produto from "../components/produto";
import jsonProduto from '../../dataBase/products.json'

function Home() {

    const [objetoProduto, setObjetoProduto] = useState(null);
    const [produtoInterno, setProdutoInterno] = useState(null);
    const [categoriaAtual, setCategoriaAtual] = useState("Home");
    const [tipoFiltro] = useState([
        "Data", "Menor Preço", "Maior Preço", "Popularidade", "Alfabetica"
    ]);
    const [visualizacaoFiltro, setVisualizacaoFiltro] = useState("semDisplay")
    const [setaFiltro, setSetaFiltro] = useState(".setaFiltroBaixo");
    const [posicaoFiltro, setPosicaoFiltro] = useState(0);

    const criarProduto = useCallback((objeto) => {
        const arrayInterna = [];

        objeto.map(campo => {
            return arrayInterna.push(<Produto objeto={campo} />)
        })

        setProdutoInterno(arrayInterna)
    })

    function mudarVisualizacaoFiltro() {
        if (visualizacaoFiltro !== "semDisplay") {
            setVisualizacaoFiltro("semDisplay");
            setSetaFiltro("setaFiltroBaixo")
        }
        else {
            setVisualizacaoFiltro("displayBlock");
            setSetaFiltro("setaFiltroCima")
        }
    }

    useEffect(() => {
        if (objetoProduto === null) setObjetoProduto(jsonProduto);

        if (produtoInterno === null && objetoProduto !== null) criarProduto(objetoProduto);

    }, [objetoProduto, produtoInterno, criarProduto])




    return (
        <>
            <Header />
            <Navbar />
            <section id="sectionPrincipalHome">
                <div id="barraFerramentaCentral">
                    <div id="containerLocal">
                        {`Categoria/${categoriaAtual}`}
                    </div>
                    <div id="filtroCategoria" onClick={e => mudarVisualizacaoFiltro()}>
                        <div id="displayFiltro">
                            <span>
                                Filtrar
                            </span>
                            <img src="/assets/arrow-down-icon.svg" className={`${setaFiltro}`} />
                        </div>
                        <ul id="containerFiltro" className={`${visualizacaoFiltro}`} >
                            <li className="componenteFiltro marginTopZero">{tipoFiltro[0]}</li>
                            <li className="componenteFiltro">{tipoFiltro[1]}</li>
                            <li className="componenteFiltro">{tipoFiltro[2]}</li>
                            <li className="componenteFiltro">{tipoFiltro[3]}</li>
                            <li className="componenteFiltro">{tipoFiltro[4]}</li>
                        </ul>
                    </div>
                </div>
                <div id="containerGrupoProdutos">
                    {produtoInterno}
                </div>
            </section>
        </>
    );
}

export default Home;