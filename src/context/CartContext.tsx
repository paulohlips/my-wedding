/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

export type Gift = {
  id: string;
  src: string;
  description: string;
  price: string;
  priceInCents: number;
  quantity: number;
};

export type GiftsListProps = {
  gifts: Array<Gift>;
};

export type CartContextType = {
  cart: Gift[];
  addToCart: (item: Gift) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  changeItemQuantity: (intemId: string, operationType: "decrease" | "increase") => void;
  getTotalCartPriceInCents: () => number;
  getCartItemQuantity: () => number;
};

const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Gift[] | []>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart');
    }
  }, [cart]);


  const addToCart = (item: Gift) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem: Gift) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const changeItemQuantity = (itemId: string, operationType: "decrease" | "increase") => {
    setCart((prevCart) => {
      return prevCart.flatMap((cartItem) => {
        if (cartItem.id !== itemId) return [cartItem];

        const changeValue = operationType === "increase" ? 1 : -1;
        const newQuantity = cartItem.quantity + changeValue;

        return newQuantity > 0 ? [{ ...cartItem, quantity: newQuantity }] : [];
      });
    });
  };


  const removeFromCart = (itemId: string) => {
    setCart((prevCart: Gift[]) => {
      return prevCart.filter((cartItem) => cartItem.id !== itemId);
    });
  };

  const clearCart = () => setCart([]);

  const getTotalCartPriceInCents = () => {
    return cart.reduce((totalPrice, item) => totalPrice + (item.priceInCents * item.quantity), 0)
  }

  const getCartItemQuantity = () => {
    return cart.reduce((qtd, item) => qtd + (item.quantity), 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, changeItemQuantity, getTotalCartPriceInCents, getCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

