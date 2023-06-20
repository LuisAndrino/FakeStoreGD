import React from "react";
import "../css/navbar.css";
import { GrCart } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { useState } from "react";

const NavBar = () => {
    const [showCart, setShowCart] = useState(false);
    const grCartStyles = { color: "white", fontSize: "1.8em", fill: "white" };
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
                    <GrCart
                        style={grCartStyles}
                        onClick={() => setShowCart(!showCart)}
                        className="nav-carrito-img"
                    />
                </div>
            </section>
            <section className="nav-menu">
                <ul>
                    <li className="categorias">
                        <AiOutlineMenu /> Categorias
                    </li>
                    <li>
                        <BsEnvelope /> Liquidacion
                    </li>
                    <li>
                        <HiUserGroup /> Atencion al cliente
                    </li>
                    <li>
                        <BiShoppingBag /> Mis Compras
                    </li>
                </ul>
            </section>
        </nav>
    );
};
export default NavBar;
