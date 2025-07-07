export default function NotFoundPage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-6">Oops! That page doesn’t exist.</p>
      <a href="/" className="text-blue-600 hover:underline">Go back home</a>
    </div>
  );
}
