import { useState, useEffect, useContext } from "react";
import { ImSpoonKnife } from "react-icons/im";
import useGetCategories from "../../hooks/useGetCategories";
import UserContext from "../../context/UserContext";

const Categories = ({ getMenu }) => {
  const { categories } = useGetCategories(),
    { menu, setMenu } = useContext(UserContext);

  const [selectedCategory, setSelectedCategory] = useState(menu),
    [isOpen, setIsOpen] = useState(false);

  //Function to get the selected day on user click
  const changeSelectedCategory = (e) => {
    const selectedCategory = e.target.outerText;
    setSelectedCategory(selectedCategory);
    getMenu(selectedCategory);
    setMenu(selectedCategory);
  };

  //Re-render the component when the selected day changes
  useEffect(() => {}, [selectedCategory]);

  return (
    <>
      <div
        className="flex flex-row items-center gap-1 px-1 bg-white rounded-full w-max"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <ImSpoonKnife className="text-lg text-liberet-primary-yellow" />
        {selectedCategory}
      </div>
      <ul
        className={` flex flex-col items-center w-full shadow-xl left-0 px-2 py-5 rounded-2xl absolute bg-white z-40 m-auto transition-all duration-300 ease-in ${
          isOpen ? "top-24" : "top-[-550px]"
        }`}
      >
        {" "}
        <div className="flex flex-row items-center gap-2">
          <ImSpoonKnife className="text-xl text-liberet-primary-yellow" />
          <h3>Elige un horario de entrega</h3>
        </div>
        <div className="flex flex-row flex-wrap">
          {categories &&
            categories.map((category) => {
              return (
                <li
                  key={Math.random() * 100}
                  value={category}
                  onClick={(event) => {
                    setIsOpen(!isOpen);
                    changeSelectedCategory(event);
                  }}
                  className="px-2 my-1 border-2 rounded-lg shadow-lg border-liberet-secondary-gray"
                >
                  {category}
                </li>
              );
            })}
        </div>
      </ul>
    </>
  );
};

export default Categories;
