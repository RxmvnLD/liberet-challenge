import React, { useState } from "react";
import DaySelector from "../components/DaySelector";
import MealThumbnail from "../components/MealThumbnail";
import useFetch from "../hooks/useGetMenu";
import Loader from "../components/Loader";
import Time from "../components/chips/Time";
import Categories from "../components/chips/Categories";
import Dishes from "../components/chips/Dishes";

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState("Beef");
  const { loading, data } = useFetch(selectedMenu);
  const updateMenu = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <>
      <div className="absolute top-0 z-50 flex flex-col w-full md:sticky ">
        <DaySelector />
        <div className="flex flex-row items-center content-center justify-center w-full gap-2 p-2 bg-gray-300 cursor-pointer">
          <Time />
          <Categories getMenu={updateMenu} />
          <Dishes />
        </div>
      </div>

      <div className="flex flex-col items-center content-center mx-10 mt-32 md:mt-10 sm:mx-20">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap w-full h-full gap-1 mb-40 sm:mb-44 md:mb-10">
            {data &&
              data.map((meal) => {
                return (
                  <MealThumbnail
                    key={meal.idMeal}
                    id={meal.idMeal}
                    name={meal.strMeal}
                    image={meal.strMealThumb}
                  />
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
