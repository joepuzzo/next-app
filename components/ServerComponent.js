async function getData({ id }) {
  const res = await fetch(`http://localhost:3000/api/hello/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  //   console.log("RES", res.json());
  return res.text();
}

export default async function ServerComponent({ id }) {
  const data = await getData({ id });

  return (
    <div className="server">
      <h3>Server Component</h3>
      <h5>
        <strong>RSC:</strong> Environment {process.env.NODE_ENV} and data {data}
      </h5>
    </div>
  );
}
