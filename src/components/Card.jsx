const Card = ({ children, className }) => (
  <div className={`rounded-xl bg-white p-4 shadow-md ${className || ""}`}>
    {children}
  </div>
);

export default Card;