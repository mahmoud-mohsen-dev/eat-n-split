import FriendList from "./components/FriendList";
import Form from "./components/Form";
import AddFriend from "./components/AddFriend";
import { useState } from "react";
import { initialFriends } from "./components/Data";
import { FriendType } from "./components/Types";
import Button from "./components/Button";

function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [isFormOn, setIsFormOn] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [currentFriend, setCurrentFriend] = useState<FriendType>(null);
    // console.log(friends);

    function handleToggleAddFriend(add: boolean, newFriend: FriendType) {
        if (add) {
            setFriends((prevFriends) => [...prevFriends, newFriend]);
        }
        setShowAddFriend((prev) => !prev);
    }

    function selectFriend(friend: FriendType) {
        // this will run on the same select element
        if (currentFriend?.id === friend.id) {
            setIsFormOn(false);
            setCurrentFriend(null);
            return;
        }
        // this will run only on the first time select is clicked
        // and when clicked on different select
        setCurrentFriend(friend);
        setIsFormOn(true);
    }

    function setFriendsArr(friend: FriendType) {
        const friendsArr = friends.map((el) =>
            friend.id === el.id ? { ...el, balance: friend.balance } : el
        );
        setFriends(friendsArr);
        setCurrentFriend(null);
        setShowAddFriend(false);
        setIsFormOn(false);
    }

    return (
        <div className=" grid grid-cols-2 gap-5 w-8/12 mx-auto mt-36 font-myFont pb-10">
            <FriendList
                friends={friends}
                onToggle={selectFriend}
                currentSelected={currentFriend}
            />
            {isFormOn && (
                <Form
                    currentFriend={currentFriend}
                    onSetFriend={setFriendsArr}
                    key={currentFriend.id}
                />
            )}
            {showAddFriend && <AddFriend onToggle={handleToggleAddFriend} />}
            {!showAddFriend && (
                <div className="row-start-2 col-start-1 w-4/12 ml-auto">
                    <Button
                        name="Add New Friend"
                        onToggle={() => setShowAddFriend((prev) => !prev)}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
