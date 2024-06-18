import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("src/data/pizzas.json");
        setPizzas(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const addToCart = (pizza) => {
    const existingItemIndex = cart.findIndex((item) => item.id === pizza.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      };
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (pizzaId) => {
    const updatedCart = cart.filter((item) => item.id !== pizzaId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        setPizzas,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        setCart,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};