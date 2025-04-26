const Button = ({ text, withicon, handleClick }) => {
  return (
    <button
      className="bg-halfwhite ml-4 text-redish p-4 rounded-lg shadow-neuromorphic 
          active:shadow-neuromorphic-inset text-sm font-medium uppercase hover:bg-redish hover:text-halfwhite hover:translate-y-[-5px] hover:ease-in-out transition-all "
      onClick={handleClick}
    >
      {withicon ? withicon : text}
    </button>
  );
};

export default Button;
