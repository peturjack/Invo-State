import { PrimaryInputProps } from "../types/types";
const PrimaryInput: React.FC<PrimaryInputProps> = ({
  name,
  label,
  placeholder,
  isNumber,
  onChange,
  value,
  disabled,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        className="border rounded p-1 focus:outline-orange-500 "
        value={value}
        placeholder={placeholder}
        type={isNumber ? "number" : "text"}
        name={name}
        onChange={onChange}
        disabled={disabled}
        required
      />
    </>
  );
};

export default PrimaryInput;
