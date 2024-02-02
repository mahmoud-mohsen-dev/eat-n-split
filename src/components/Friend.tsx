import Button from "./Button";
import { FriendType } from "./Types";

function Friend({
    friend,
    currentSelected,
    onToggle,
}: {
    friend: FriendType;
    currentSelected: FriendType;
    onToggle: () => void;
}) {
    const isSelected = currentSelected?.id === friend.id;

    return (
        <div
            className={`flex items-center hover:bg-color-lightest p-3 hover:rounded-lg transition-all duration-300 ${
                isSelected ? "bg-color-lightest rounded-xl" : ""
            }
        `}
        >
            <img
                src={friend.image}
                alt={friend.name}
                className=" rounded-full w-16 h-16"
            />
            <div className="mr-auto ml-4 cursor-default">
                <h3 className="text-[1.8rem] font-semibold text-color-black tracking-tighter">
                    {friend.name}
                </h3>

                {friend.balance === 0 ? (
                    <p className="text-lg font-bold font-openSans text-color-black">
                        You and {friend.name} are even
                    </p>
                ) : friend.balance > 0 ? (
                    <p className="text-lg font-bold font-openSans text-color-green">
                        {friend.name} owes you ${friend.balance}
                    </p>
                ) : (
                    <p className="text-lg font-bold font-openSans text-color-red">
                        You owe {friend.name} ${Math.abs(friend.balance)}
                    </p>
                )}
            </div>
            <div>
                <Button
                    name={isSelected ? "Close" : "select"}
                    onToggle={onToggle}
                />
            </div>
        </div>
    );
}

export default Friend;
