import Button from "./Button";
import FormSection from "./FormSection";
import { FriendType, InputType } from "./Types";
import { useState } from "react";

function AddFriend({
    onToggle,
}: {
    onToggle: (add: boolean, newFriend: FriendType) => void;
}) {
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    function createNewFriend(add: boolean) {
        if (typeof name !== "string" || typeof imgUrl !== "string") return;

        const newFriend = {
            id: Date.now(),
            name: name,
            image: imgUrl,
            balance: 0,
        };
        onToggle(add, newFriend);
        setImgUrl("");
        setName("");
    }

    return (
        <div className="row-start-2 row-end-3">
            <div className="p-6 rounded-xl bg-color-light pb-16">
                <FormSection
                    type={InputType.text}
                    disable={false}
                    small={false}
                    strValue={name}
                    onSetStrValue={setName}
                >
                    🧑‍🤝‍👩 Friend name
                </FormSection>

                <FormSection
                    type={InputType.text}
                    disable={false}
                    small={false}
                    strValue={imgUrl}
                    onSetStrValue={setImgUrl}
                >
                    🖼️ Image URL
                </FormSection>

                <div className="float-right w-72">
                    <Button name="Add" onToggle={() => createNewFriend(true)} />
                </div>
            </div>
            <div className=" float-right mt-5 mr-3">
                <Button name="Close" onToggle={() => createNewFriend(false)} />
            </div>
        </div>
    );
}

export default AddFriend;
