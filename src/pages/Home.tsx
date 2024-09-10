import "../styles/utility.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solution.css";
import Logo from "../assets/Trellenilton logo.svg";
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import Button from "../components/Button";
import HeroRectangleOne from "../assets/images/RectangleOne.png";
import HeroRectangleTwo from "../assets/images/RectangleTwo.png";
import iconePremio from "../assets/images/icone premio.png";
import { useState } from "react";
import Card from "../components/Card";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleMobileMenuClick = () => {
        setShowMobileMenu(false);
    };

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Trellenilton" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#" onClick={handleMobileMenuClick}>Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution" onClick={handleMobileMenuClick}>Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials" onClick={handleMobileMenuClick}>Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing" onClick={handleMobileMenuClick}>Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact" onClick={handleMobileMenuClick}>Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#" onClick={handleMobileMenuClick}>Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleOne} alt="Retangulo 1 tela incial " />
                </span>
                <img src={HeroRectangleTwo} alt="Retangulo 2 tela incial" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Organize suas tarefas</h1>
                    <p>
                        O Trellenilton chegou para que você possa organizar suas tarefas do melhor jeito possível.
                    </p>
                    <div className="flex gap-1">
                        <span>
                            <Button text="Cadastre-se"></Button>
                        </span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary></Button>
                        </span>
                    </div>
                </div>
            </section>

            <section id="solution">
                <div className="desktop-only" id="solution-container">
                    <p className="desktop-only">Soluções</p>
                    <h1>Sob medida para você</h1>
                    <p>Inovação é com a gente! O Trellenilton já conquistou
                        diversos cliente, seja você mais um deles, veja tudo que pode
                        ganhar com nossos serviços.
                    </p>
                    <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage</p>
                    <div className="cards-container">
                        <Card imgSrc={iconePremio} title="Vencedor" text="Vencedor de varios prêmios."></Card>
                        <Card imgSrc={iconePremio} title="Vencedor" text="Vencedor de varios prêmios."></Card>
                        <Card imgSrc={iconePremio} title="Vencedor" text="Vencedor de varios prêmios."></Card>
                    </div>
                </div>
                <div className="mobile-menu" id="solution-container">
                    <h2>Soluções</h2>
                    <h1>Sob medida para você</h1>
                    <p>Inovação é com a gente! O Trellenilton já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.</p>
                    <div className="cards-container">
                        <Card imgSrc={iconePremio} title="Vencedor" text="Vencedor de vários prêmios." />
                        <Card imgSrc={iconePremio} title="Vencedor" text="Vencedor de vários prêmios." />
                        <Card imgSrc={iconePremio} title="Vencedor" text="Vencedor de vários prêmios." />
                    </div>
                </div>
            </section>
        </>
    )
}
