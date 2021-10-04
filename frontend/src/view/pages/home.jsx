import React, { useState, useEffect, useCallback } from "react";

import '../../css/home.css'

import Header from "../components/header";
import Navbar from "../components/navbar";
import Produto from "../components/produto";
import jsonProduto from '../../dataBase/products.json'

function Home() {

    const [objetoProduto, setObjetoProduto] = useState(null);
    const [produtoInterno, setProdutoInterno] = useState(null);

    const criarProduto = useCallback(() => {
        const arrayInterna = [];

        objetoProduto.map(campo => {
            return arrayInterna.push(<Produto objeto={campo} />)
        })

        setProdutoInterno(arrayInterna)
    }, [objetoProduto])

    useEffect(() => {
        if (objetoProduto === null) setObjetoProduto(jsonProduto);

        if (produtoInterno === null && objetoProduto !== null) criarProduto();

    }, [objetoProduto, produtoInterno, criarProduto])




    return (
        <>
            <Header />
            <Navbar />
            <section id="sectionPrincipalHome">
                <div id="barraFiltro">
                    Barra Filtro
                </div>
                <div id="containerGrupoProdutos">
                    {produtoInterno}
                </div>
            </section>
        </>
    );
}

export default Home;