import React from "react";

const handleClickBtn1 = (event) => {
  console.log(event.target.name);
};

const handleClickImg = (event) => {
  console.log(event.target.src);
};

function MouseClicker() {
  return (
    <div>
      <button onClick={handleClickBtn1} name="one">
        UNO
      </button>
      <hr />
      <button name="two">
        <img
          onClick={handleClickImg}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiUJfNHsvJD7T-imSNpnjYkZ_PKVLSuX3gw&s"
          width={35}
        />
        TWO
      </button>
    </div>
  );
}

export default MouseClicker;

// Per far sì che in console non si stampi il valore undefined del button "TWO" ho aggiunto l'evento handler all'immagine anziché al bottone
