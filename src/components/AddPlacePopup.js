import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddCard(nameRef.current.value, linkRef.current.value);
  }

  return (
    <PopupWithForm
      name="card-add"
      title="Новое место"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      closePopup={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="card-name-input"
        className="pop-up__input pop-up__input_type_card-name"
        type="text"
        placeholder="Название"
        name="card-name"
        required
        minLength="2"
        maxLength="20"
        ref={nameRef}
      />
      <span className="pop-up__input-error card-name-input-error"></span>
      <input
        id="card-link-input"
        className="pop-up__input pop-up__input_type_card-link"
        type="url"
        placeholder="Ссылка на картинку"
        name="card-link"
        required
        ref={linkRef}
      />
      <span className="pop-up__input-error card-link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
