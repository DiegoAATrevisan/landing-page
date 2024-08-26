import "../styles/utility.css";
import "../styles/header.css";
import Logo from "../assets/Trellenilton logo.svg";
import Button from "../components/Button";

export default function Home() {
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
                </nav>
            </header>
        </>
    )
}