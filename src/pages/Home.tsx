import "../styles/utility.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/pricing.css";
import "../styles/solution.css";
import "../styles/contact.css";
import Logo from "../assets/Trellenilton logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Button from "../components/Button";
import HeroRectangleOne from "../assets/images/RectangleOne.png";
import HeroRectangleTwo from "../assets/images/RectangleTwo.png";
import silverMedal from "../assets/silver medal.svg";
import goldMedal from "../assets/gold medal.svg";
import { useState } from "react";
import Elon from "../assets/images/elon.svg";
import Ryan from "../assets/images/ryan.svg";
import Joaquin from "../assets/images/joaquin.svg";
import "../styles/testimonials.css";
import "../styles/footer.css";
import CardSolution from "../components/CardSolution";
import CardTestimonials from "../components/CardTestimonials";
import Check from "../assets/images/check.svg";
import Instagram from "../assets/images/instagram.svg";
import Facebook from "../assets/images/facebook.svg";
import Youtube from "../assets/images/youtube.svg";



export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setEmail] = useState("");

    const handleMobileMenuClick = () => {
        setShowMobileMenu(false);
    };
    
    function disparaEmail(email: string) {
        fetch('api', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Authorization': 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTExNTA4NTg0NjIzMzUzNDg2MjY4IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJkYWF0cmV2aXNhbkBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiIxQnBXWVo3Z3hleDhSLUFDUXkxSjZRIiwibmJmIjoxNzMxMzg3NTI5LCJpYXQiOjE3MzEzODc4MjksImV4cCI6MTczMTM5MTQyOSwianRpIjoiZTgzOTYxYTNiN2MwOGZmMjA5NzU3ZjQ4NzFhMTBmNmVkZmM1NWRjZCJ9.O0FFyOGky2b8SBKgCD_-mThaBUilELR7XneSTAhvDsF_RehGda1NUncH2tSOirM5_hoK1p65P5fXPw1KFAhYRMpUX3e35I2zIDkpRl_VhbmEJigLP8WgQgMe_gVGdznsNxSY20lbPPg9GqVOTtkSP_yYO0asWUu3gS5mbYO71T9KRqNgBJ063FveUlEf08MFrx10hFPz6RHPqFqd_yErj4tePRjjVTeIuOSA598OYAsTww8BKK9mggo12zBFY1X2lu8nbT-fID-mZssVYpQ0vqBQe6g9hl98wBji6I4NUj-Ro329Sb8mCfxt0Meaw0K8r808CHFsCWLGRuitpxGzmA",

                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'toMail': email,
                'content': 'Você aderiu ao nosso sistema de notificações!'
            })
        })
            .then(response => {
                console.log("Status:", response.status);
                return response.text();
            })
            .then(data => console.log("Resposta:", data))
            .catch(error => console.error("Erro na requisição:", error));
    }



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

                    <div className="mobile-menu menu-spacing">
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
                    <div className="cards-container">
                        <CardSolution imgSrc={silverMedal} title="2º Lugar" text="CityFarm da FAG" />
                        <CardSolution imgSrc={goldMedal} title="1º Lugar" text="Startup Garage" />
                        <CardSolution imgSrc={silverMedal} title="2º Lugar" text="Hackathon 2022" />
                    </div>
                </div>
                <div className="mobile-menu" id="solution-container">
                    <h2>Soluções</h2>
                    <h1>Sob medida para você</h1>
                    <p>Inovação é com a gente! O Trellenilton já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.</p>
                    <div className="cards-container">
                        <CardSolution imgSrc={silverMedal} title="2º Lugar" text="CityFarm da FAG" />
                        <CardSolution imgSrc={goldMedal} title="1º Lugar" text="Startup Garage" />
                        <CardSolution imgSrc={silverMedal} title="2º Lugar" text="Hackathon 2022" />
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <header className="header-testimonials">
                    <span>
                        <p className="desktop-only">Conselho de quem conhece</p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>
                <div className="carousel">
                    <div className="carousel-content">
                        <CardTestimonials imgProfile={Elon} depoyment="O Trellenilton foi excelente para minha família. Fizemos a comida congelada e todos estavam bem contentes!" name="Elon Musk" profession="CEO da SpaceX" filledStars={5} />
                        <CardTestimonials imgProfile={Ryan} depoyment="O Trellenilton foi excelente para minha família. Fizemos a comida congelada e todos estavam bem contentes!" name="Ryan Gosling" profession="Ator de sucesso" filledStars={2} />
                        <CardTestimonials imgProfile={Joaquin} depoyment="O Trellenilton foi excelente para minha família. Fizemos a comida congelada e todos estavam bem contentes!" name="Joaquin Phoenix" profession="Ator de sucesso" filledStars={3} />

                        <CardTestimonials imgProfile={Elon} depoyment="O Trellenilton foi excelente para minha família. Fizemos a comida congelada e todos estavam bem contentes!" name="Elon Musk" profession="CEO da SpaceX" filledStars={5} />
                        <CardTestimonials imgProfile={Ryan} depoyment="O Trellenilton foi excelente para minha família. Fizemos a comida congelada e todos estavam bem contentes!" name="Ryan Gosling" profession="Ator de sucesso" filledStars={2} />
                        <CardTestimonials imgProfile={Joaquin} depoyment="O Trellenilton foi excelente para minha família. Fizemos a comida congelada e todos estavam bem contentes!" name="Joaquin Phoenix" profession="Ator de sucesso" filledStars={3} />
                    </div>
                </div>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                    <section className="even-columns gap-1.5">
                        <div className="pricing-card">
                            <span className="plan">
                                <h3>Básico</h3>
                                <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                            </span><h2>Grátis</h2><Button text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Retire na loja</p>
                            </span><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </span>
                        </div>

                        <div className="pricing-card premium">
                            <span className="bonus"><p>1º MÊS COM DESCONTO</p></span><span className="plan">
                                <h3>Premium</h3>
                                <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                            </span><span className="price">
                                <h2>R$ 89,90</h2>
                                <p>/mês</p>
                            </span><Button text="Pedir agora" key="premium" /><span className="hr" /><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>2 Entregas</p>
                            </span><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>5 Refeições por semana</p>
                            </span><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>2 Sucos por semana</p>
                            </span>
                        </div>

                        <div className="pricing-card">
                            <span className="plan">
                                <h3>Empresarial</h3>
                                <p>Utilize nossa solução na sua empresa. Aprimore seu fluxo</p>
                            </span><h2>R$ 12,90</h2><p>/mês</p><Button text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Retire na loja</p>
                            </span><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </span>
                        </div>

                    </section>
                </header>
            </section>

            <section id="contact">
                <header>
                    <p className="desktop-only">Contato</p>
                    <h2>Entre em contato</h2>
                    <p>Precisa de ajuda? Entre em contato com a gente.</p>
                </header>
                <input type="text" className="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Digite seu e-mail" />
                <Button
                    text="Quero receber novidades!"
                    onclick={() => disparaEmail(email)} />
            </section>

            <section className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">

                            <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                            <div className="social-icons">
                                <a href="#" aria-label="Instagram"><img src={Instagram} alt="insta" width={24} height={24} /></a>
                                <a href="#" aria-label="Facebook"><img src={Facebook} alt="insta" width={24} height={24} /></a>
                                <a href="#" aria-label="YouTube"><img src={Youtube} alt="insta" width={24} height={24} /></a>
                            </div>
                        </div>

                        <div className="footer-column">
                            <h3>Empresa</h3>
                            <ul>
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Faça parte do time</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Funcionalidades</h3>
                            <ul>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Análise de dados</a></li>
                                <li><a href="#">Boot Discord</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Recursos</h3>
                            <ul>
                                <li><a href="#">IOS & Android</a></li>
                                <li><a href="#">Teste a Demo</a></li>
                                <li><a href="#">Clientes</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Feito com amor na aula de Programação Web💙©2024 AktieTech - Todos os direitos reservados.</p>
                </div>
            </section>
        </>
    )
}
