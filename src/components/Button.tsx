interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="p-3 bg-blue-950 text-white rounded-lg min-w-36 hover:bg-blue-700 transition mt-4"
        >
            {text}
        </button>
    );
};

export default Button;