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
              src="https://i.pinimg.com/originals/cd/07/ab/cd07ab1091a0d1c7e61d2760b4352405.jpg"
              alt="Красивое изображение"
            />
            <p class="message">
              Ты лучшая стримерша в Reality, Maria-san! Твои трансляции всегда
              полны позитива и энергии, а твоя искренняя улыбка заряжает всех
              зрителей хорошим настроением!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
