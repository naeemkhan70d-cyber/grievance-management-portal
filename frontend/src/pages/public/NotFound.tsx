import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6 text-center">
      <h1 className="text-8xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold text-slate-800">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        The page you are looking for does not
        exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
      >
        <Home size={18} />
        Back to Login
      </Link>
    </div>
  );
};

export default NotFound;