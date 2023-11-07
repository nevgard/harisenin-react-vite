/* eslint-disable react/prop-types */
import Input from "./input";
import Label from "./label";

const InputForm = (props) => {
  const { type, placeholder, name, label } = props;
  return (
    <div className="flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default InputForm;
