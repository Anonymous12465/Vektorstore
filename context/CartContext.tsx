"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, color: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// How long a saved cart stays valid before it's treated as stale and cleared.
// Change this value to configure the expiry window (currently 7 days).
const CART_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount, honoring expiry.
  useEffect(() => {
    try {
      const savedCartRaw = localStorage.getItem('vektorstore-cart');
      if (savedCartRaw) {
        const parsed = JSON.parse(savedCartRaw);

        // Support both the new format ({ items, savedAt }) and the old
        // plain-array format that was saved before expiry was added, so
        // existing users don't lose their cart on the first load after
        // this update ships.
        if (Array.isArray(parsed)) {
          setCart(parsed);
        } else if (parsed && Array.isArray(parsed.items)) {
          const isExpired = Date.now() - parsed.savedAt > CART_EXPIRY_MS;
          if (isExpired) {
            localStorage.removeItem('vektorstore-cart');
            setCart([]);
          } else {
            setCart(parsed.items);
          }
        }
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
      localStorage.removeItem('vektorstore-cart');
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes, along with a timestamp
  // so stale carts can be detected and cleared on future loads.
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(
          'vektorstore-cart',
          JSON.stringify({ items: cart, savedAt: Date.now() })
        );
      } catch (error) {
        console.error('Failed to save cart to localStorage:', error);
      }
    }
  }, [cart, isLoaded]);

  const addToCart = (product: Product, color: string, quantity: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.product.id === product.id && item.selectedColor === color
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id && item.selectedColor === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { product, quantity, selectedColor: color }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}