function PopupWithForm(props) {
  return (
    <div
      className={`pop-up-container ${props.isOpen ? 'pop-up-container_opened' : ''}  pop-up-container_type_${props.name}`}
    >
      <div className={`pop-up pop-up_type_${props.name}`}>
        <h2 className="pop-up__title">{props.title}</h2>
        <form
          name="pop-up"
          className={`pop-up__form pop-up__form_type_${props.name}`}
          noValidate
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button className="pop-up__submit" type="submit">
            {props.buttonText}
          </button>
        </form>
        <button
          className="pop-up__close"
          type="button"
          onClick={props.closePopup}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
