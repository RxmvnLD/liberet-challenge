import { useState, useEffect, useContext } from "react";
import { FiClock } from "react-icons/fi";
import data from "../../helpers/periods.json";
import UserContext from "../../context/UserContext";

const Time = () => {
  const { period, setPeriod } = useContext(UserContext);

  const [selectedPeriod, setSelectedPeriod] = useState(period),
    [isOpen, setIsOpen] = useState(false);

  const periods = data;

  //Function to get the selected day on user click
  const changeSelectedPeriod = (e) => {
    const selectedPeriod = e.target.outerText;
    periods.map((period) => {
      return period.time === selectedPeriod
        ? ((period.selected = true),
          setSelectedPeriod(selectedPeriod),
          setPeriod(selectedPeriod))
        : (period.selected = false);
    });
  };

  //Re-render the component when the selected day changes
  useEffect(() => {}, [selectedPeriod]);
  return (
    <>
      <div
        className="flex flex-row items-center gap-1 px-1 bg-white rounded-full w-max"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FiClock className="text-xl text-liberet-primary-yellow" />
        {selectedPeriod}
      </div>
      <ul
        className={`flex flex-col items-center w-full shadow-xl left-0 px-2 py-5 rounded-2xl absolute bg-white z-40 m-auto transition-all duration-300 ease-in ${
          isOpen ? "top-24" : "top-[-550px]"
        }`}
      >
        {" "}
        <div className="flex flex-row items-center gap-2">
          <FiClock className="text-xl text-liberet-primary-yellow" />
          <h3>Elige un horario de entrega</h3>
        </div>
        {data.map((period) => {
          return (
            <li
              key={Math.floor(Math.random() * 100)}
              value={period.time}
              onClick={(event) => {
                setIsOpen(!isOpen);
                changeSelectedPeriod(event);
              }}
              className="px-5 my-1 border-2 rounded-lg shadow-lg border-liberet-secondary-gray"
            >
              {period.time}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Time;
