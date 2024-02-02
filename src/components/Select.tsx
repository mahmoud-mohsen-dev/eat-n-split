function Select({
    currentFriendName,
    value,
    onSetValue,
}: {
    currentFriendName: string;
    value: string;
    onSetValue: (value: string) => void;
}) {
    return (
        <select
            value={value}
            onChange={(e) => onSetValue(e.target.value)}
            className=" w-36 h-10 rounded-md border-color-light border-2 text-center focus:border-color-medium focus:outline-none text-stone-500"
        >
            <option value="You">You</option>
            <option value={currentFriendName}>{currentFriendName}</option>
        </select>
    );
}

export default Select;
