import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(name, description);
  }

  function NameInput() {
    
    function handleChange(e) {
      setName(e.target.value);
    }
    return (
      <input
        id="name-input"
        className="pop-up__input pop-up__input_type_name"
        type="text"
        placeholder="Имя"
        name="name"
        required
        minLength="
      2"
        maxLength="40"
        value={name}
        onChange={handleChange}
      />
    );
  }
  function DescriptionInput() {
    
    function handleChange(e) {
      setDescription(e.target.value);
    }
    return (
      <input
        id="job-input"
        className="pop-up__input pop-up__input_type_job"
        type="text"
        placeholder="О себе"
        name="job"
        required
        minLength="2"
        maxLength="200"
        value={description}
        onChange={handleChange}
      />
    );
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      closePopup={props.onClose}
      onSubmit={handleSubmit}
    >
      <NameInput />
      <span className="pop-up__input-error name-input-error"></span>
      <DescriptionInput />
      <span className="pop-up__input-error job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
