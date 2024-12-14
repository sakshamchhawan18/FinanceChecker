export async function POST(request: Request) {
    const body = await request.json();
    const { V1, V2, V3, Amount } = body;
  
    // Simulate fraud detection logic
    const prediction = Math.random() > 0.5 ? "Fraudulent" : "Not Fraudulent";
  
    return Response.json({ predictions: prediction });
  }
  