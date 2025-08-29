import React from "react";
import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";

const Error = () => {
  return (
    <div className="min-h-[70vh] grid place-items-center p-6">
      <div className="card bg-base-200 shadow-xl max-w-md w-full">
        <div className="card-body items-center text-center">
          <div className="badge badge-error badge-outline mb-1">404</div>
          <AlertTriangle className="w-10 h-10 text-error" />
          <h2 className="card-title">Page Not Found</h2>
          <p className="text-base-content/60">
            The page you are looking for does not exist.
          </p>
          <div className="card-actions mt-4">
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
