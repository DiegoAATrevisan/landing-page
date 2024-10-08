import "../styles/cardTestimonials.css";
import Estrela1 from "../assets/images/estrela1.svg";
import Estrela2 from "../assets/images/estrela2.svg";

interface ICardProps {
    imgProfile: string;
    depoyment: string;
    name: string;
    profession: string;
    filledStars: number;
}

export default function CardTestimonials({ imgProfile, depoyment, name, profession, filledStars }: ICardProps) {
    const totalStars = 5;

    return (
        <div className="carousel-card">
            {imgProfile && <img src={imgProfile} alt="Foto" />}
            <span>
                <p>{depoyment}</p>
            </span>
            <span className="rating">
                {[...Array(totalStars)].map((_, index) => (
                    <img
                        key={index}
                        src={index < filledStars ? Estrela1 : Estrela2}
                        alt={index < filledStars ? "estrela preenchida" : "estrela vazia"}
                        width={22}
                        height={20}
                    />
                ))}
            </span>
            <span className="names">
                <p className="bold">{name}</p>
                <p>{profession}</p>
            </span>
        </div>
    )
}