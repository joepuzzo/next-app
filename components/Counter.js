"use client";

import { useContext, useState } from "react";
import { MyContext } from "./AppProvider";

export default function Counter() {
  // Get server stuff & client stuff
  const { apples, setApples, user } = useContext(MyContext);

  // State for this specific component
  const [pears, setPears] = useState(0);

  return (
    <div>
      <h4>
        {user.name} has {apples} apples and {pears} pears.
      </h4>
      <button onClick={() => setApples(apples + 1)}>More Apples</button>
      <button onClick={() => setPears(pears + 1)}>More Pears</button>
    </div>
  );
}
