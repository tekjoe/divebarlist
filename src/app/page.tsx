import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Dive Bar List</h1>
      <p className="text-xl text-gray-600">
        Your guide to the best dive bars in town
      </p>
    </div>
  );
}
