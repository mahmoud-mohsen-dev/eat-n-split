import Button from "./Button";
import FormSection from "./FormSection";
import { FriendType, InputType } from "./Types";
import { useState } from "react";

function Form({
    currentFriend,
    onSetFriend,
}: {
    currentFriend: FriendType;
    onSetFriend: (friend: FriendType) => void;
}) {
    const [bill, setBill] = useState("");
    const [yourExpense, setYourExpense] = useState("");
    const [whoWillPay, setWhoWillPay] = useState<string>("You");

    let yourFriendExpense = 0;
    if (+bill > 0 && +yourExpense >= 0) {
        yourFriendExpense = +bill - +yourExpense;
    }

    const calculate = (balance: number) => {
        if (whoWillPay === "You") {
            return yourFriendExpense + balance;
        }

        if (yourExpense !== undefined) {
            return -1 * +yourExpense + balance;
        }
    };

    const calc = () => {
        if (yourFriendExpense >= 0) {
            const friend = {
                ...currentFriend,
                balance: calculate(currentFriend?.balance),
            };
            // console.log(friend);
            onSetFriend(friend);
        }
        setBill("");
        setYourExpense("");
        setWhoWillPay("You");
    };

    return (
        <div className="row-span-2">
            <div className="bg-color-light px-14 py-10 rounded-xl pb-20">
                <h2 className=" uppercase font-bold text-3xl font-myFont text-color-black tracking-tight mb-7">
                    split a bill with {currentFriend?.name}
                </h2>

                <FormSection
                    type={InputType.number}
                    disable={false}
                    small={true}
                    numValue={+bill}
                    onSetNumValue={setBill}
                >
                    💰 Bill value
                </FormSection>

                <FormSection
                    type={InputType.number}
                    disable={false}
                    small={true}
                    numValue={+yourExpense}
                    onSetNumValue={setYourExpense}
                >
                    🧍 Your expense
                </FormSection>

                <FormSection
                    type={InputType.number}
                    disable={true}
                    small={true}
                    numValue={yourFriendExpense}
                >
                    🧑‍🤝‍👩 {currentFriend?.name}'s expense:
                </FormSection>

                <FormSection
                    type={InputType.select}
                    disable={false}
                    small={true}
                    currentFriendName={currentFriend?.name}
                    strValue={whoWillPay}
                    onSetStrValue={setWhoWillPay}
                >
                    🤑 Who is paying the bill?
                </FormSection>

                <div className=" float-right w-36">
                    <Button name="split bill" onToggle={calc} />
                </div>
            </div>
        </div>
    );
}

export default Form;
