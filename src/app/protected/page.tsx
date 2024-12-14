import { auth } from "@clerk/nextjs";


export default function ProtectedPage() {
  const { userId } = auth();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Fraud Detection Form</h2>
      <p className="text-gray-600 mb-6">Welcome, user ID: {userId}</p>
      
    </div>
  );
}
