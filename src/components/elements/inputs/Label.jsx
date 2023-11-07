/* eslint-disable react/prop-types */
const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <>
      <label htmlFor={htmlFor} className="mb-3">
        {children}{" "}
      </label>
    </>
  );
};

export default Label;
