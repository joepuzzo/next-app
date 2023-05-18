import Counter from "@/components/Counter";
import ServerComponent from "@/components/ServerComponent";
import { Suspense } from "react";

export default function Home() {
  const env = process.env;

  return (
    <div className="server">
      <h3>App Page.js</h3>
      <h4>
        {env.USER} running in environment {env.NODE_ENV}
      </h4>
      <Counter>
        <ServerComponent />
      </Counter>
    </div>
  );
}
