import "../index.css";
import Main from "./Main.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import PopUpWithForm from "./PopUpWithForm.js";
import ImagePopUp from "./ImagePopUp.js";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);

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

  return (
    <div className="App">
      <div className="page__content">
        <Header />
        <Main
          isFilterOn={isFilterOn}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopUpWithForm
          id="avatarForm"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title="Cambiar foto de perfil"
          name="Avatar"
          buttonText="Guardar"
        >
          <div className="popup-div">
            <input
              className="profile__input popup__avatar form__input popup__text"
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Nueva imagen de perfil"
              required
              autoComplete="off"
            />
          </div>
          <span className="avatar-error form__error"></span>
        </PopUpWithForm>

        <PopUpWithForm
          id="profileForm"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          title="Editar Perfil"
          name="Profile"
          buttonText="Guardar"
        >
          <input
            className="popup__name popup__text form__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            minLength="2"
            maxLength="40"
            required
            autoComplete="off"
          />
          <span className="name-error form__error"></span>

          <input
            className="popup__occupation popup__text form__input"
            type="text"
            name="about"
            id="about"
            placeholder="Acerca de mi"
            required
            autoComplete="off"
          />
          <span className="about-error form__error"></span>
        </PopUpWithForm>

        <PopUpWithForm
          id="addCards"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title="Nuevo lugar"
          name="Place"
          buttonText="Crear"
        >
          <input
            className="popup__title popup__name popup__text form__input"
            type="text"
            name="name"
            id="place"
            placeholder="Título"
            minLength="2"
            maxLength="40"
            required
            autoComplete="off"
          />
          <span className="place-error form__error"></span>

          <input
            className="popup__link popup__text form__input"
            type="url"
            name="link"
            id="link"
            placeholder="Enlace a la imagen"
            minLength="7"
            required
            autoComplete="off"
          />
          <span className="link-error form__error"></span>
        </PopUpWithForm>

        <ImagePopUp
          link={selectedCard.link}
          title={selectedCard.name}
          onClose={closeAllPopups}
          isOpen={isCardPopupOpen}
        />
      </div>
    </div>
  );
}

export default App;
