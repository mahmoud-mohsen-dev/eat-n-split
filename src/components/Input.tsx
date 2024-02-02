function Input({
    disable,
    small,
    value,
    strValue,
    onSetStrValue,
    onSetValue,
}: {
    disable: boolean;
    small: boolean;
    value?: number;
    strValue?: string;
    onSetStrValue?: React.Dispatch<React.SetStateAction<string>>;
    onSetValue?: React.Dispatch<React.SetStateAction<string>>;
}) {
    if (disable)
        return (
            <input
                type="number"
                disabled
                value={value}
                className=" w-36 h-10 rounded-md border-color-lightest border-2 pl-3 focus:border-color-medium focus:outline-none text-stone-500"
            ></input>
        );

    if (small)
        return (
            <input
                type="number"
                className=" w-36 h-10 rounded-md border-color-light border-2 pl-3 focus:border-color-medium focus:outline-none text-stone-500"
                value={value}
                onChange={(e) => onSetValue(e.target.value)}
            />
        );
    return (
        <input
            type="text"
            value={strValue}
            onChange={(e) => onSetStrValue(e.target.value)}
            className=" w-72 h-10 rounded-md border-color-light border-2 pl-3 focus:border-color-medium focus:outline-none text-stone-500"
        />
    );
}

export default Input;
