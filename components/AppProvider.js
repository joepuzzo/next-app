"use client";
import React, { useState } from "react";

export const MyContext = React.createContext();

export function MyProvider({ children, user }) {
  const [apples, setApples] = useState(5);
  return (
    <MyContext.Provider value={{ apples, setApples, user }}>
      {children}
    </MyContext.Provider>
  );
}
