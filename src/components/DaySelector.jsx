import React, { useState, useEffect, useContext } from "react";
import data from "../helpers/week.json";
import UserContext from "../context/UserContext";

const DaySelector = () => {
  const { day, setDay } = useContext(UserContext);
  //state for the selected day == null simulating an api call to get the actual day
  const [selectedDay, setSelectedDay] = useState(day);
  const week = data;

  //Function to get the selected day on user click
  const changeSelected = (e) => {
    const selectedDay = e.target.outerText;
    week.map((weekDay) => {
      return weekDay.day === selectedDay
        ? ((weekDay.selected = true),
          setSelectedDay(selectedDay),
          setDay(selectedDay))
        : (weekDay.selected = false);
    });
  };

  //Re-render the component when the selected day changes
  useEffect(() => {}, [selectedDay]);

  return (
    <>
      <div className="flex flex-row w-full py-1 bg-white md:sticky justify-evenly">
        {week.map((day) => {
          return (
            <div
              key={day.day}
              className="flex flex-col items-center cursor-pointer"
              value={day.day}
              onClick={(event) => changeSelected(event)}
            >
              <h3 className="text-sm">{day.abreviation}</h3>
              <div
                className={`flex items-center justify-center w-6 h-6 p-2 rounded-full ${
                  day.selected ? "bg-liberet-primary-orange text-white" : ""
                } `}
              >
                <h4 className="text-xs">{day.day}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DaySelector;
