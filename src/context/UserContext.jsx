import React, { useState, useEffect, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [day, setDay] = useState(17),
    [period, setPeriod] = useState("11:00 am - 12:00 am"),
    [menu, setMenu] = useState("Beef");

  return (
    <UserContext.Provider
      value={{ day, setDay, period, setMenu, menu, setPeriod }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };
