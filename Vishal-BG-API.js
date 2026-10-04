export default async function handler(request) {
  return new Response(
    JSON.stringify({
      success: true,
      message: "Vishal BG Remover Backend is working!"
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
