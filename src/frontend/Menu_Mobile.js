import React, { useState } from "react";
import "../css/Menu_Mobile.css";

export default function Menu_Mobile() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return( 
        <div className={"conteudo menu-drop-down" + (!isActive ? " menu-drop-down-active" : "")}>
            <button id="menu-dropDown" className="conteudo menu-drop-down-button" onClick={handleToggle}>
                <span className="menu-drop-down-name">Menu</span>
                <i className={"fas " + (!isActive ? "fa-caret-up" : "fa-caret-down")}></i>
            </button>
            <div className="menu-drop-down-menu-box">
                <ul className="menu-drop-down-menu">
                    <li className="menu-drop-down-menu-item">Início <i className="fas fa-home"></i></li>
                    <li className="menu-drop-down-menu-item">Staff <i className="fas fa-user-friends"></i></li>
                    <li className="menu-drop-down-menu-item">Ranking <i className="fas fa-medal"></i></li>
                    <li className="menu-drop-down-menu-item">Banimentos <i className="fas fa-ban"></i></li>
                    <li className="menu-drop-down-menu-item">Formulários <i className="far fa-clipboard"></i></li>
                </ul>
            </div>
        </div>
    );

}