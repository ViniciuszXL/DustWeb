import React from 'react';

// IMG //
import bannerNews from '../../../assets/news/news-1/banner.png';

// CSS //
import './News.css';

export default function News() {
    return (
        <div className="conteudo news">
            <div className="conteudo news-content">
                <div className="conteudo news-content-title"> <p>NOTÍCIA #1</p> </div>
                <div className="conteudo news-content-banner"> <img src={ bannerNews } /> </div>
                <div className="conteudo news-content-text">
                    <p> Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, 
                        dos pais, das professoras, mas também é o dia dos animais, sempre que você olha 
                        uma criança, há sempre uma figura oculta, que é um cachorro atrás. 
                        O que é algo muito importante! </p>
                </div>
                <div className="conteudo news-content-footer">
                    <div className="conteudo news-content-post-by"><p>Postado por ViniciuszXL</p> </div>
                    <div className="conteudo news-content-button"><a>Ver notícia</a></div>
                </div>
            </div>
        </div>
    );
}