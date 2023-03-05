import Counter from "@/components/Counter";

export default function Friend({ params }) {
  return (
    <>
      <h5>Hello Friend {JSON.stringify(params)}</h5>
      <Counter />
    </>
  );
}
