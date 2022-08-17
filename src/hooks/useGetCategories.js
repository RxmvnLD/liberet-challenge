import { useState, useEffect } from "react";
import axios from "axios";

const useGetCategories = (url) => {
  const [categories, setCategories] = useState([]),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(null);

  const getCategories = async () => {
    setLoading(true);
    const auxArr = categories;
    try {
      const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        ),
        data = res.data.categories;
      data.forEach((element) => {
        return auxArr.push(element.strCategory);
      });
      setCategories([...new Set(auxArr)]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, [url]);
  return { categories, loading, error };
};

export default useGetCategories;
