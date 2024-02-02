import Input from "./Input";
import Select from "./Select";
import { InputType } from "./Types";

function FormSection({
    type,
    disable,
    small,
    children,
    currentFriendName,
    numValue,
    strValue,
    onSetNumValue,
    onSetStrValue,
}: {
    type: string;
    disable: boolean;
    small: boolean;
    currentFriendName?: string;
    children: string | string[];
    numValue?: number;
    strValue?: string;
    onSetNumValue?: React.Dispatch<React.SetStateAction<string>>;
    onSetStrValue?: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div className="flex items-center mb-4">
            <span className="mr-auto text-xl font-semibold text-stone-600">
                {children}
            </span>
            {type === InputType.number && (
                <Input
                    disable={disable}
                    small={small}
                    value={numValue}
                    onSetValue={onSetNumValue}
                />
            )}
            {type === InputType.text && (
                <Input
                    disable={disable}
                    small={small}
                    strValue={strValue}
                    onSetStrValue={onSetStrValue}
                />
            )}
            {type === InputType.select && (
                <Select
                    currentFriendName={currentFriendName}
                    value={strValue}
                    onSetValue={onSetStrValue}
                />
            )}
        </div>
    );
}

export default FormSection;
