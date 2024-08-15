import "../styles/utility.css"

export default function Home() {
    return (
        <>
            <div className="screen">
                <header>
                    <div className="navbar">
                        <li><a href="">LOGO</a></li>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Soluções</a></li>
                            <li><a href="">Depoimentos</a></li>
                            <li><a href="">Preços</a></li>
                            <li><a href="">Contato</a></li>
                        </ul>
                        <div>
                            <button>Login</button>
                            <button>Cadastre-se</button>
                        </div>
                    </div>
                </header>
            </div>
        </>

    )
}