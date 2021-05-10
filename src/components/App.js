import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Loader from "./Loader";

function App() {
  const [isEditProfilePopupOpen, setEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getDefaultCards()]).then(
      ([userInfo, defaultCards]) => {
        setCurrentUser(userInfo);
        setCards(defaultCards);
      }
    ).catch(error => console.log(error));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (isLiked) {
      api.removeLikeCard(card).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    } else {
      api.addlikeCard(card).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card).then((res) => {
      setCards(cards =>cards.filter((cardItem) => cardItem !== card))
      console.log(res);
    }).catch(error => console.log(error));
  }

  function handleAddCard(name, link) {
    api.postCard(name, link).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    }).catch(error => console.log(error));
  }

  function handleUpdateUser(name, description) {
    api.patchUserInfo(name, description).then((userInfo) => {
      setCurrentUser(userInfo);
      closeAllPopups();
    }).catch(error => console.log(error));
  }
  function handleUpdateAvatar(link) {
    api.patchAvatar(link).then((userInfo) => {
      setCurrentUser(userInfo);
      closeAllPopups();
    }).catch(error => console.log(error));
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfileOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  if (currentUser !== null) {
    return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDel={handleCardDelete}
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddCard={handleAddCard}
          />

          <PopupWithForm
            name="cards-del"
            title="Вы уверены"
            buttonText="Да"
            closePopup={closeAllPopups}
          ></PopupWithForm>

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </div>
      </CurrentUserContext.Provider>
    );
  } else {
    return (
      <Loader />
    )
  }
}

export default App;
