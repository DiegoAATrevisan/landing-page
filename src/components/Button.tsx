import "../styles/buttons.css"

interface IButtonProps {
    text: string;
    secondary?: boolean
    onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, secondary, onclick }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"}
            onClick={onclick}
        >
            {text}
        </button>
    )
}