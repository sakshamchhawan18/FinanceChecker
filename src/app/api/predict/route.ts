export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();

  // Optional: Log the body if needed
  console.log("Received data:", body);

  // Simulate fraud detection logic
  const prediction = Math.random() > 0.5 ? "Fraudulent" : "Not Fraudulent";

  // Return a JSON response
  return new Response(
    JSON.stringify({ message: "Prediction result", result: prediction }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
