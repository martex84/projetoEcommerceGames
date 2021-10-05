import React, { useState, useEffect, useCallback } from "react";

import '../../css/home.css'

import Header from "../components/header";
import Navbar from "../components/navbar";
import Produto from "../components/produto";
import jsonProduto from '../../dataBase/products.json'

function Home() {

    const [tipoFiltro] = useState([
        "Data", "Menor Preço", "Maior Preço", "Popularidade", "Alfabetica"
    ]);
    const [listPropaganda] = useState([
        "PropagandaShadowOfMordor.png", "PropagandaTheWitcher.png", "PropagandaCallDuty.png"
    ]);

    const [objetoProduto, setObjetoProduto] = useState(null);
    const [produtoInterno, setProdutoInterno] = useState(null);
    const [categoriaAtual] = useState("Home");
    const [visualizacaoFiltro, setVisualizacaoFiltro] = useState("semDisplay")
    const [setaFiltro, setSetaFiltro] = useState(".setaFiltroBaixo");
    const [propagandaAtual, setPropagandaAtual] = useState(0)

    function OrganizaComponentes(tipoOrganizacao) {
        const objetoInterno = [...jsonProduto];

        switch (tipoOrganizacao) {
            case tipoFiltro[0]: //Ira retornar por Data, isso é do Id maior para o menor
                objetoInterno.sort((valor1, valor2) => {
                    if (valor1.id > valor2.id) return -1;
                    else if (valor1.id < valor2.id) return 1;
                    else return 0
                })
                criarProduto(objetoInterno)
                break;

            case tipoFiltro[1]:
                objetoInterno.sort((valor1, valor2) => {
                    if (valor1.price > valor2.price) return 1;
                    else if (valor1.price < valor2.price) return -1;
                    else return 0
                })
                console.log(objetoInterno);
                break;

            case tipoFiltro[2]:
                break;

            case tipoFiltro[3]:
                break;
        }
    }

    const criarProduto = useCallback((objeto) => {
        const arrayInterna = [];

        objeto.map(campo => {
            return arrayInterna.push(<Produto objeto={campo} key={campo.id} />)
        })

        setProdutoInterno(arrayInterna)
    }, [setProdutoInterno])

    function rotacaoPropaganda(tipo) {
        switch (tipo) {
            case "increment":
                if (propagandaAtual < listPropaganda.length - 1) {
                    return setPropagandaAtual(propagandaAtual + 1)
                }
                else {
                    return setPropagandaAtual(0);
                }

            case "decrement":
                if (propagandaAtual > 0 && propagandaAtual < listPropaganda.length) {
                    return setPropagandaAtual(propagandaAtual - 1)
                }
                else if (propagandaAtual === 0) {
                    return setPropagandaAtual(2);
                }
                break;

            default:

                break;
        }
    }

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

    }, [objetoProduto, produtoInterno, propagandaAtual, criarProduto])




    return (
        <>
            <Header />
            <Navbar />
            <section id="sectionPrincipalHome">
                <div id="containerPropaganda" className="centralizar">
                    <div className="containerBotaoPropaganda setaDireita" onClick={e => rotacaoPropaganda("decrement")}>
                        <img src="/assets/left.svg" alt="Seta Direita" />
                    </div>
                    <div id="containerImagemPropaganda">
                        <img src={`/assets/${listPropaganda[propagandaAtual]}`} alt="Propaganda Jogo" />
                    </div>
                    <div className="containerBotaoPropaganda setaEsquerda" onClick={e => rotacaoPropaganda("increment")}>
                        <img src="/assets/right.svg" alt="Seta Esquerda" />
                    </div>
                </div>
                <div id="barraFerramentaCentral">
                    <div id="containerLocal">
                        {`Categoria/${categoriaAtual}`}
                    </div>
                    <div id="containerFiltro" onClick={e => mudarVisualizacaoFiltro()}>
                        <div id="displayFiltro">
                            <span>
                                Filtrar
                            </span>
                            <img src="/assets/arrow-down-icon.svg" className={`${setaFiltro}`} alt="Seta Baixo" />
                        </div>
                        <ul id="filtroCategoria" className={`${visualizacaoFiltro}`} >
                            <li className="componenteFiltro marginTopZero" onClick={e => OrganizaComponentes(tipoFiltro[0])}>{tipoFiltro[0]}</li>
                            <li className="componenteFiltro" >{tipoFiltro[1]}</li>
                            <li className="componenteFiltro" >{tipoFiltro[2]}</li>
                            <li className="componenteFiltro" >{tipoFiltro[3]}</li>
                            <li className="componenteFiltro" >{tipoFiltro[4]}</li>
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