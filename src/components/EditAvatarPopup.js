import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const inputRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(inputRef.current.value);
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      closePopup={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="avatar-link-input"
        className="pop-up__input pop-up__input_type_avatar-link"
        type="url"
        placeholder="Ссылка на аватар"
        name="avatar-link"
        required
        ref={inputRef}
      />
      <span className="pop-up__input-error avatar-link-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
