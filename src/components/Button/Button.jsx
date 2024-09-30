const Button = ({ btnType = "button", handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      type={btnType}
      aria-label={`button ${children}`}
    >
      {children}
    </button>
  );
};
export default Button;
