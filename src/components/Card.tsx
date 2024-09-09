
interface ICardProps {
    text: string;
    title?: string;
    imgSrc?: string;
}

export default function Card({ imgSrc, text, title }: ICardProps) {
    return (
        <div className="card">
            {imgSrc && <img src={imgSrc} alt={title || "Card Image"} />}
            <strong>{title}</strong>
            <p>{text}</p>
        </div>
    )
}