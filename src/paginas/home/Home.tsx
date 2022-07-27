import React from "react";
import "./Home.css";

function Home(){
    return(
        <>
        <h1 className="titulo"> Blog Pessoal</h1>
        <p>Um Blog onde se pode falar sobre qualquer assunto, mas o meu foco é falar sobre o meu aprendizado na tecnologia.</p>
        <img src="https://i.imgur.com/H88yIo2.png" alt="Imagem da tela inicial" className="foto"/>
        </>
    );
}

export default Home;