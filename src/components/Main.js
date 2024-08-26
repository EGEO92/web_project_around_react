import React from "react";

import editButton from "../images/Edit_Button.png";
import addButton from "../images/Add_Button.png";
import closeButton from "../images/Close_Icon.png";
import deleteButton from "../images/Trashtrash.svg";

export default function Main() {
  return (
    <main>
      <div className="page-filter"></div>
      <section className="profile">
        <input type="button" className="profile__image-filter" />
        <img
          className="profile__image"
          id="profile__image"
          alt="Imagen de perfil"
        />

        <div className="profile__wraper">
          <div className="profile__info">
            <h2 className="profile__name">EGEO92</h2>
            <p className="profile__occupation">Desarrollador Web</p>
          </div>
          <button className="profile__edit-button button">
            <img
              src={editButton}
              className="profile__editbutton-image"
              id="profile__editbutton-image"
              alt="Boton para editar perfil"
            />
          </button>
        </div>
        <button className="profile__add-button button">
          <img
            src={addButton}
            className="profile__addbutton-image"
            id="profile__addbutton-image"
            alt="Botón para agregar más imagenes"
          />
        </button>
      </section>
      <section className="places">
        <div className="card places__popupcard">
          <img className="card__popupimg places__popupimg" src="#" alt="#" />
          <p className="card__popuptitle places__popuptitle"></p>
          <button className="places__buttonclose close button">
            <img src={closeButton} id="close__image" alt="boton de cerrar" />
          </button>
        </div>
      </section>
      <template id="plantilla">
        <div className="places__card">
          <img className="places__image" src="#" alt="#" />
          <div className="places__wraper">
            <h4 className="places__text"></h4>
            <button className="places__button-like button"></button>
            <span className="places__likes"></span>
          </div>
          <button className="button places__button-trash">
            <img
              className="places__imgtrash"
              id="places__imgtrash"
              src={deleteButton}
              alt="boton para eliminar tarjeta"
            />
          </button>
        </div>
      </template>

      <section
        className="card__popup-confirmation popup"
        id="confirmation-popup"
      >
        <h2 className="profile__popup-title, popup__title">¿Estás seguro?</h2>
        <form className="profile__form-confirmation form">
          <input
            className="popup__submit popup__submit-confirmation button form__submit"
            type="submit"
            name="confirmation"
            value="Sí"
          />
        </form>
        <button className="popup__close close popup__closeadd button">
          <img id="close__image4" alt="boton de cerrar" />
        </button>
      </section>

      <section className="profile__popup-avatar popup" id="avatar-popup">
        <h2 className="profile__popup-title, popup__title">
          Cambiar foto de perfil
        </h2>
        <form className="profile__form-avatar form">
          <div className="popup-div">
            <input
              className="profile__input popup__avatar form__input popup__text"
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Nueva imagen de perfil"
              required
              autocomplete="off"
            />
          </div>
          <span className="avatar-error form__error"></span>
          <input
            className="popup__submit popup__submit-avatar button form__submit"
            type="submit"
            value="Guardar"
          />
        </form>
        <button className="popup__close close popup__closeadd button">
          <img id="close__image3" alt="boton de cerrar" />
        </button>
      </section>

      <section className="popup" id="profile-popup">
        <h2 className="popup__title">Edit Profile</h2>
        <form
          className="popup__form-profile form"
          action="#"
          autocomplete="off"
        >
          <input
            className="popup__name popup__text form__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            minlength="2"
            maxlength="40"
            required
            autocomplete="off"
          />
          <span className="name-error form__error"></span>

          <input
            className="popup__occupation popup__text form__input"
            type="text"
            name="about"
            id="about"
            placeholder="Acerca de mi"
            required
            autocomplete="off"
          />
          <span className="about-error form__error"></span>

          <input
            className="popup__submit button form__submit"
            type="submit"
            value="Guardar"
          />
        </form>
        <button className="popup__close close button">
          <img
            src="<%= require ('./images/Close_Icon.png') %>"
            id="close__image2"
            alt="boton de cerrar"
          />
        </button>
      </section>

      <section className="popup" id="cards-popup">
        <h2 className="popup__title">Nuevo lugar</h2>
        <form className="popup__form-add form" action="#" autocomplete="off">
          <input
            className="popup__title popup__name popup__text form__input"
            type="text"
            name="name"
            id="place"
            placeholder="Título"
            minlength="2"
            maxlength="40"
            required
            autocomplete="off"
          />
          <span className="place-error form__error"></span>

          <input
            className="popup__link popup__text form__input"
            type="url"
            name="link"
            id="link"
            placeholder="Enlace a la imagen"
            minlength="7"
            required
            autocomplete="off"
          />
          <span className="link-error form__error"></span>

          <input
            className="popup__submit button form__submit"
            type="submit"
            value="Crear"
          />
        </form>
        <button className="popup__close close popup__closeadd button">
          <img id="close__image1" alt="boton de cerrar" />
        </button>
      </section>
    </main>
  );
}
