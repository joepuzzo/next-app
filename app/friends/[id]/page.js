import Counter from "@/components/Counter";
import ServerComponent from "@/components/ServerComponent";
import { Suspense } from "react";

export default function Friend({ params }) {
  return (
    <>
      <h5>Hello Friend {JSON.stringify(params)}</h5>
      <Counter>
        <ServerComponent id={params.id} />
      </Counter>
    </>
  );
}
