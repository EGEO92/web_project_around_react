import deleteButton from "../images/Trashtrash.svg";

export default function Card({ name, link, likes, onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="places__card">
      <img
        onClick={handleClick}
        className="places__image"
        src={link}
        alt={name}
        style={{ backgroundImage: `url(${link})` }}
      />
      <div className="places__wraper">
        <h4 className="places__text">{name}</h4>
        <button className="places__button-like button"></button>
        <span className="places__likes">{likes}</span>
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
  );
}
