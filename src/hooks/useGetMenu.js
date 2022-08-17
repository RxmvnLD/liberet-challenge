import { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const useGetMenu = (url) => {
  const [data, setData] = useState(null),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(null);
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}${url}`);
      setData(res.data.meals);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return { data, loading, error };
};

export default useGetMenu;
