/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-slate-200 mb-3 px-3 py-1.5 "
      name={name}
      id="login"
    />
  );
};

export default Input;
