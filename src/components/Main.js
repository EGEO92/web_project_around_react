import React from "react";
import { useState, useEffect } from "react";
import editButton from "../images/Edit_Button.png";
import addButton from "../images/Add_Button.png";
import closeButton from "../images/Close_Icon.png";
import Card from "./Card.js";
import api from "../utils/api.js";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getUser() {
      const response = await api.getUserInfo();
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
    }
    getUser();
  }, []);

  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      console.log(response);
      setCards(response);
    }
    getCards();
  }, []);

  return (
    <main>
      <div
        className={`page-filter ${props.isFilterOn ? "popup__show" : ""}`}
      ></div>
      <section className="profile">
        <input
          onClick={props.onEditAvatarClick}
          type="button"
          className="profile__image-filter"
        />
        <img
          src={userAvatar}
          onClick={props.onEditAvatarClick}
          className="profile__image"
          id="profile__image"
          alt="Imagen de perfil"
          style={{ backgroundImage: `url(${userAvatar})` }}
        />

        <div className="profile__wraper">
          <div className="profile__info">
            <h2 className="profile__name">{userName}</h2>
            <p className="profile__occupation">{userDescription}</p>
          </div>
          <button
            onClick={props.onEditProfileClick}
            className="profile__edit-button button"
          >
            <img
              src={editButton}
              className="profile__editbutton-image"
              id="profile__editbutton-image"
              alt="Boton para editar perfil"
            />
          </button>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          className="profile__add-button button"
        >
          <img
            src={addButton}
            className="profile__addbutton-image"
            id="profile__addbutton-image"
            alt="Botón para agregar más imagenes"
          />
        </button>
      </section>
      <section className="places">
        {cards.map((card) => (
          <Card
            name={card.name}
            link={card.link}
            likes={card.likes.length}
            key={card._id}
            onCardClick={props.onCardClick}
            card={card}
          />
        ))}
        {/* <div className="card places__popupcard">
          <img className="card__popupimg places__popupimg" src="#" alt="#" />
          <p className="card__popuptitle places__popuptitle"></p>
          <button className="places__buttonclose close button">
            <img src={closeButton} id="close__image" alt="boton de cerrar" />
          </button>
        </div> */}
      </section>

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
          <img src={closeButton} id="close__image4" alt="boton de cerrar" />
        </button>
      </section>
    </main>
  );
}
