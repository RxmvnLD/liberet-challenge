import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiClock } from "react-icons/fi";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const MealThumbnail = ({ name, image, id }) => {
  const [strArea, setStrArea] = useState(""),
    [strTags, setStrTags] = useState("");

  //Kind of a bad practice but it gets the job done for now
  const getStrArea = async (id) => {
    try {
      let res = await axios.get(`${BASE_URL}${id}`),
        area = res.data.meals[0].strArea,
        tag = "";
      res.data.meals[0].strTags
        ? (tag = res.data.meals[0].strTags.split(",")[0])
        : (tag = "No tags");
      setStrTags(tag);
      setStrArea(area);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStrArea(id);
  }, [id]);

  return (
    <>
      <section className="flex flex-col m-auto bg-white rounded-md shadow-2xl h-44 w-36 sm:h-60 md:h-52 sm:w-52 md:w-44">
        <div className="relative">
          <span className="absolute right-0 z-20 px-4 m-2 bg-white rounded-md text-liberet-primary-orange w-max">
            {strTags}
          </span>
          <img
            src={image}
            alt={name}
            className="rounded-md shadow-lg w-30 h-30 "
          />
          <h2 className="absolute z-10 font-semibold text-white bottom-5">
            {strArea}
          </h2>
          <h3 className="absolute bottom-0 z-10 px-1 text-sm font-semibold rounded text-liberet-primary-orange bg-slate-400/70 w-max ">
            {name.slice(0, 15)}...
          </h3>
        </div>
        <div className="flex flex-row items-center content-center justify-between w-full h-full px-2 py-1">
          <FiClock className="text-xl text-liberet-primary-yellow" />
          <span className="text-xs sm:text-base">
            {Intl.NumberFormat("es-MX", {
              style: "currency",
              currency: "MXN",
            }).format(id)}
          </span>
        </div>
      </section>
    </>
  );
};

export default MealThumbnail;
