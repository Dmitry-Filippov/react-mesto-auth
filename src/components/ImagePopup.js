function ImagePopup(props) {
  return (
    <div
      className={`pop-up-container ${
        props.card ? "pop-up-container_opened" : ""
      }  pop-up-container_type_image`}
    >
      <div className="pop-up pop-up_type_image">
        <img
          className="pop-up__image"
          src={props.card?.link}
          alt={props.card?.name}
        />
        <p className="pop-up__text">{props.card?.name}</p>
        <button
          className="pop-up__close"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
