import "../styles/cards.css"

interface ICardProps {
    text: string;
    title?: string;
    imgSrc?: string;
}

export default function Card({ imgSrc, text, title }: ICardProps) {
    return (
        <div className="card">
            {imgSrc && <img src={imgSrc} alt="Card Image" />}
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}