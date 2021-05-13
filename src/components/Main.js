import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    props.handleHeaderChange('/sign-in', 'Выход')
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__wrapper">
            <div className="profile__cursor"></div>
            <div
              className="profile__avatar-wrapper"
              onClick={props.onEditAvatar}
            >
              <img
                className="profile__avatar"
                src={currentUser.avatar}
                alt="аватар профиля"
              />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__text">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="elements">
          {props.cards.map((card) => {
            return (
              <Card
                card={card}
                onCardClick={props.onCardClick}
                key={card._id}
                onCardLike={props.onCardLike}
                onCardDel={props.onCardDel}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
