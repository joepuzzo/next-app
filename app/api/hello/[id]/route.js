export async function GET(request, { params }) {
  console.log("REQ", params);

  const { id } = params;

  console.log(`Hello World! ${id}`);
  return new Response(`Hello World ${id}`);
}
