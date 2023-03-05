import Counter from "@/components/Counter";

export default function Home() {
  const env = process.env;

  return (
    <div>
      <h3>
        {env.USER} running in environment {env.NODE_ENV}
      </h3>
      <Counter />
    </div>
  );
}
