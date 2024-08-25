import React from "react";
import { RiTelegramLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="Profile">
      <h1>˚୨୧⋆｡maria-san</h1>
      <h2>{"ฅ^ >ヮ<^₎ всем бан!!"}</h2>
      <div className="links">
        <a href="https://reality.app/profile/a0744ec7?adj_t=8ogcewh_z9yhix5">
          Reality для ебли
        </a>
        <a href="https://t.me/mariasanVTuber">Мой Telegram где все хуесосы</a>
      </div>
      <a href="https://t.me/boost/mariasanVTuber" className="boosty">
        <RiTelegramLine size={70} color="#000000" />
        <p style={{ fontSize: 50 }}>Кончить в пизду</p>
      </a>
    </div>
  );
};

export default Profile;
