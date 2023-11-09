const Button = (props) => {
  const { type, text, onClick, classname } = props;
  return (
    <>
      <button onClick={onClick} type={type} className={classname}>
        {text}
      </button>
    </>
  );
};
export default Button;
