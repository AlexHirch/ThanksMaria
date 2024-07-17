import React from "react";
import { RiTelegramLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="Profile">
      <h1>˚୨୧⋆｡maria-san</h1>
      <h2>{"ฅ^ >ヮ<^₎ всем счастья!!"}</h2>
      <div className="links">
        <a href="https://reality.app/profile/a0744ec7?adj_t=8ogcewh_z9yhix5">
          Reality.app
        </a>
        <a href="https://t.me/mariasanVTuber">Мой Telegram Канал</a>
      </div>
      <a href="https://t.me/boost/mariasanVTuber" className="boosty">
        <RiTelegramLine size={70} color="#24A1DE" />
        <p style={{ fontSize: 50 }}>Поддержать</p>
      </a>
    </div>
  );
};

export default Profile;
