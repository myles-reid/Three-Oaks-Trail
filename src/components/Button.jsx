function Button(props) {
  let buttonClass, buttonText;
  buttonClass = props.type === 'primary' ? 'btn-primary' : 'btn-secondary';
  buttonText = props.type === 'primary' ? 'Book Now' : 'See More';
  return (
    <button className={buttonClass}>{buttonText}</button>
  );
}

export default Button;