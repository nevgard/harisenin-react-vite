const Button = (props) => {
  const { type, text } = props;
  return (
    <>
      <button className="bg-black text-white p-3">{text}</button>
    </>
  );
};
export default Button;
