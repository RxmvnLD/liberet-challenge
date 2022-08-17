import React, { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import user from "../assets/user.png";
const Account = () => {
  const { day, period, menu } = useContext(UserContext);

  useEffect(() => {}, [day, period, menu]);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-3">
        <img src={user} alt="user profile pic" className="rounded-full" />
        <div className="flex flex-row items-end gap-10 h-max">
          <h2 className="text-3xl font-semibold ">rom.e.m.e</h2>
          <button className="px-2 border-2 border-gray-200 rounded w-max bg-liberet-secondary-blue">
            Editar perfil
          </button>
        </div>
        <div className="my-16 text-center">
          <h3 className="text-xl font-semibold">Preferencias actuales:</h3>
          <h4>
            Tipo de menu: <span>{menu}</span>
          </h4>
          <h4>
            Dia de entrega: <span>{day}</span>
          </h4>
          <h4>
            Hora de entrega: <span>{period}</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Account;
