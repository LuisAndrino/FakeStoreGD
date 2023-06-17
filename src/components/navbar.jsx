import React from "react";
import "../css/navbar.css";
import { GrCart } from "react-icons/gr";

const NavBar = () => {
    let grCartStyles = {color: "white", fontSize: "1.8em"}
    return (
        <nav className="navBar">
            <section className="nav-imagenes">
                <img
                    className="banner"
                    src="https://www.guatemaladigital.com/Images/GUA/logo.jpg"
                    alt="Logo"
                />
                <img
                    className="Membresias"
                    src="https://www.guatemaladigital.com/Images/Membresias.jpg"
                    alt="Membresias"
                />
                <img
                    className="Opiniones"
                    src="https://www.guatemaladigital.com/Images/opiniones.jpg"
                    alt="Opiniones"
                />
                <div className="nav-carrito">
                    <GrCart style={grCartStyles} className="nav-carrito-img"/>
                </div>
            </section>
            <section className="nav-menu">
                <ul>
                    <li>Categorias</li>
                    <li>Liquidacion</li>
                    <li>Atencion al cliente</li>
                    <li>Mis Compras</li>
                </ul>
            </section>
        </nav>
    );
};
export default NavBar;
