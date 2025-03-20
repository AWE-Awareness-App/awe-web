interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string | number;
    type?: "text";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?:string;
}


const InputField = ({ label, placeholder, type = "text", value, onChange }: InputFieldProps) => {
    return (
        <div className="flex flex-col space-y-1 mb-4 w-full">
            <label className="font-medium text-sm">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
        </div>
    );
};

export default InputField;
