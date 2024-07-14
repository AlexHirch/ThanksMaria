import React from "react";
import { SiBoosty } from "react-icons/si";

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
        <SiBoosty size={60} color="orange" />
        <p style={{fontSize:50}}>Поддержать</p>
      </a>
    </div>
  );
};

export default Profile;
