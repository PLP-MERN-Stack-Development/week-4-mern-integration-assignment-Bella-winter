import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          📚 Welcome to my BlogPost Dashboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Create, manage, and share insightful blog posts. Whether you're a student or developer, your words matter.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/login"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">📝 Write Posts</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Create content-rich posts with a title, content, and short excerpt.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">🗃️ Manage Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300">
            View, delete, and publish posts right from your personal dashboard.
          </p>
        </div>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
        Built for the BlogPost Assignment | © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
