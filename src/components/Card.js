import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleCardDelete() {
    props.onCardDel(props.card);
  }

  return (
    <li className="elements__item">
      <img
        className="elements__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="elements__item-description">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button
            className={`elements__like-button ${
              isLiked ? "elements__like-button_liked" : ""
            }`}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="elements__likes-count">
            {props.card.likes.length}
          </span>
        </div>
      </div>
      <button
        className={`elements__delete-button ${
          isOwner ? "" : "elements__delete-button_hidden"
        }`}
        type="button"
        onClick={handleCardDelete}
      ></button>
    </li>
  );
}

export default Card;
