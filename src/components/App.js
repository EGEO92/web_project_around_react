import "../index.css";
import Main from "./Main.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ImagePopUp from "./ImagePopUp.js";
import { useState, useEffect } from "react";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    async function getCurrentUser() {
      const response = await api.getUserInfo();
      setCurrentUser(response);
      console.log("(voz imaginaria de mario bros) "); //Se puede ignorar, es solo para divertirme
      console.log("It's me: Mar...", response.name);
    }
    getCurrentUser();
  }, []);
  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      console.log(response);
      setCards(response);
    }
    getCards();
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsCardPopupOpen(true);
    setIsFilterOn(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    setIsFilterOn(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    setIsFilterOn(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    setIsFilterOn(true);
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsFilterOn(false);
    setIsCardPopupOpen(false);
    setSelectedCard({});
  }
  function handleUpdateUser(userData) {
    api.setUserInfo(userData).then((newUser) => {
      setCurrentUser(newUser);
    });
    closeAllPopups();
  }
  function handleUpdateAvatar(link) {
    api.editUserAvatar(link);
    closeAllPopups();
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }
  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }
  function handleAddPlace(data) {
    api.addCard(data).then((newCard) => {
      setCards([newCard, ...cards]);
    });
    closeAllPopups();
  }

  return (
    <div className="App">
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            isFilterOn={isFilterOn}
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            submitPlace={handleAddPlace}
          />

          <ImagePopUp
            link={selectedCard.link}
            title={selectedCard.name}
            onClose={closeAllPopups}
            isOpen={isCardPopupOpen}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
