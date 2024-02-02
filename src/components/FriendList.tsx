import Friend from "./Friend";
import { FriendType } from "./Types";

function FriendList({
    friends,
    currentSelected,
    onToggle,
}: {
    friends: FriendType[];
    currentSelected: FriendType;
    onToggle: (friend: FriendType) => void;
}) {
    return (
        <div className="flex flex-col gap-3">
            {friends.map((friend) => {
                return (
                    <Friend
                        friend={friend}
                        currentSelected={currentSelected}
                        onToggle={() => onToggle(friend)}
                        key={friend.id}
                    />
                );
            })}
        </div>
    );
}

export default FriendList;
