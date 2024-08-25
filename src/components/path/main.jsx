import React, { useState } from "react";
import "./main.scss";

const Main = () => {
  const [visibleContent, setVisibleContent] = useState(false);
  return (
    <div className="Main">
      <div class="container">
        <div onClick={() => setVisibleContent(!visibleContent)} class={visibleContent ? "card visible" : "card"}>
          <div class="front">
            <button id="openCard">Нажми на меня чтобы увидеть открытку</button>
          </div>
          <div class="inside">
            <img
              src="https://i.pinimg.com/736x/c7/0b/98/c70b988adba5b2d47d0fe9e43ffd5f03.jpg"
              alt="Красивое изображение"
            />
            <p class="message">
              <span>Хуй вам А не сайт</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
