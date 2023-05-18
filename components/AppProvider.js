"use client";
import React, { useState } from "react";

export const MyContext = React.createContext();

export function AppProvider({ children, user }) {
  const [apples, setApples] = useState(5);
  return (
    <div class="client">
      <h3>AppProvider</h3>
      <MyContext.Provider value={{ apples, setApples, user }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}
