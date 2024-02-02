function Button({ name, onToggle }: { name: string; onToggle: () => void }) {
    return (
        <button
            className="bg-color-dark capitalize px-3 py-[6px] rounded-lg text-color-lighter-black font-extrabold font-openSans hover:bg-color-medium duration-300 w-full"
            onClick={() => onToggle()}
        >
            {name}
        </button>
    );
}

export default Button;
