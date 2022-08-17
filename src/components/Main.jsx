import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import MealDetails from "../pages/MealDetails";

import Account from "../pages/Account";
const Main = () => {
  return (
    <main className="overflow-hidden border-gray-300 md:overflow-auto md:bg-liberet-secondary-gray md:mx-10 md:border-2 md:m-0 md:w-3/5 md:inline">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<MealDetails />} />
      </Routes>
    </main>
  );
};

export default Main;
