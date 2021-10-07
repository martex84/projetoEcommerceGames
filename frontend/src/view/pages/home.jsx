import React, { useState, useEffect, useCallback, createContext } from "react";

import '../../css/home.css'

import Header from "../components/header";
import Navbar from "../components/navbar";
import Produto from "../components/produto";
import Footer from "../components/footer";
import jsonProduto from '../../dataBase/products.json';
import { ProdutoContext } from '../../context/produtoContext';

function Home() {

    const [tipoFiltro] = useState([
        "Data", "Menor Preço", "Maior Preço", "Popularidade", "A-Z", "Z-A"
    ]);
    const [listPropaganda] = useState([
        "PropagandaShadowOfMordor.png", "PropagandaTheWitcher.png", "PropagandaCallDuty.png"
    ]);

    const [objetoProduto, setObjetoProduto] = useState(null);
    const [produtoInterno, setProdutoInterno] = useState(null);
    const [categoriaAtual] = useState("Home");
    const [visualizacaoFiltro, setVisualizacaoFiltro] = useState("semDisplay")
    const [setaFiltro, setSetaFiltro] = useState(".setaFiltroBaixo");
    const [propagandaAtual, setPropagandaAtual] = useState(0);
    const [objetoLocalStorage, setObjetoLocalStorage] = useState("");
    const [contagemProdutos, setContagemProdutos] = useState(0);

    function OrganizaComponentes(tipoOrganizacao) {
        const objetoInterno = [...jsonProduto];

        switch (tipoOrganizacao) {
            case tipoFiltro[0]: //Por Data
                objetoInterno.sort((valor1, valor2) => {
                    if (valor1.id > valor2.id) return -1;
                    else if (valor1.id < valor2.id) return 1;
                    else return 0
                })
                criarProduto(objetoInterno)
                break;

            case tipoFiltro[1]://Por Maior Preço
                objetoInterno.sort((valor1, valor2) => {
                    if (valor1.price > valor2.price) return 1;
                    else if (valor1.price < valor2.price) return -1;
                    else return 0
                })
                criarProduto(objetoInterno)
                break;

            case tipoFiltro[2]://Por Menor Preço
                objetoInterno.sort((valor1, valor2) => {
                    if (valor1.price > valor2.price) return -1;
                    else if (valor1.price < valor2.price) return 1;
                    else return 0
                })
                criarProduto(objetoInterno)
                break;

            case tipoFiltro[3]://Por Maior Popularidade
                objetoInterno.sort((valor1, valor2) => {
                    if (valor1.score > valor2.score) return -1;
                    else if (valor1.score < valor2.score) return 1;
                    else return 0
                })
                criarProduto(objetoInterno)
                break;

            case tipoFiltro[4]:
                objetoInterno.sort((valor1, valor2) => {
                    if (valor1.name > valor2.name) return 1;
                    else if (valor1.name < valor2.name) return -1;
                    else return 0
                })
                criarProduto(objetoInterno)
                break;

            case tipoFiltro[5]:
                objetoInterno.sort((valor1, valor2) => {
                    if (valor1.name > valor2.name) return -1;
                    else if (valor1.name < valor2.name) return 1;
                    else return 0
                })
                criarProduto(objetoInterno)
                break;
        }
    }

    const criarProduto = useCallback((objeto) => {
        const arrayInterna = [];

        objeto.map(campo => {
            return arrayInterna.push(<Produto objeto={campo} key={campo.id} />)
        })

        setProdutoInterno(arrayInterna);

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
                    return setPropagandaAtual(listPropaganda.length - 1);
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

    function salvaListaCarrinho(objeto) {
        setObjetoLocalStorage(objeto);
    }

    function salvaLocalStorage(objeto) {
        let objetoRetorno = []
        let valorRepetido = false;

        if (localStorage.getItem("itemCarrinho") !== null) {
            JSON.parse(localStorage.getItem("itemCarrinho")).map(objetoInterno => {
                if (objetoInterno.id !== objeto.id && valorRepetido === false) {
                    objetoRetorno.push(objetoInterno);
                    setContagemProdutos(contagemProdutos + 1);
                }
                else {
                    valorRepetido = true
                }
            })
        }

        if (valorRepetido === false) {
            objetoRetorno.push(objeto);

            localStorage.removeItem("itemCarrinho");

            localStorage.setItem("itemCarrinho", JSON.stringify(objetoRetorno));

            setObjetoLocalStorage("");

            setContagemProdutos(contagemProdutos + 1);

            alert("Produto salvo com sucesso!");
        }
        else {
            alert("Apenas um produto por pessoa!");
        }


    }

    const realizarContagemProdutos = useCallback(() => {
        let valorInterno = 0
        if (localStorage.getItem("itemCarrinho") !== null) {
            JSON.parse(localStorage.getItem("itemCarrinho")).map(objetoInterno => {

                valorInterno = valorInterno + 1;
            })
        }

        setContagemProdutos(valorInterno);

    }, [setContagemProdutos])

    useEffect(() => {
        if (objetoProduto === null) setObjetoProduto(jsonProduto);

        if (produtoInterno === null && objetoProduto !== null) criarProduto(objetoProduto);

        if (objetoLocalStorage !== "") salvaLocalStorage(objetoLocalStorage);

        realizarContagemProdutos();

    }, [objetoProduto, produtoInterno, propagandaAtual, objetoLocalStorage, criarProduto, realizarContagemProdutos])

    return (
        <>
            <Header props={contagemProdutos} />
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
                            <li className="componenteFiltro" onClick={e => OrganizaComponentes(tipoFiltro[1])}>{tipoFiltro[1]}</li>
                            <li className="componenteFiltro" onClick={e => OrganizaComponentes(tipoFiltro[2])}>{tipoFiltro[2]}</li>
                            <li className="componenteFiltro" onClick={e => OrganizaComponentes(tipoFiltro[3])}>{tipoFiltro[3]}</li>
                            <li className="componenteFiltro" onClick={e => OrganizaComponentes(tipoFiltro[4])}>{tipoFiltro[4]}</li>
                            <li className="componenteFiltro" onClick={e => OrganizaComponentes(tipoFiltro[5])}>{tipoFiltro[5]}</li>
                        </ul>
                    </div>
                </div>
                <ProdutoContext.Provider value={{ salvaListaCarrinho }}>
                    <div id="containerGrupoProdutos">
                        {produtoInterno}
                    </div>
                </ProdutoContext.Provider>
            </section>
            <Footer />
        </>
    );
}

export default Home;