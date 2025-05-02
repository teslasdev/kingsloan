import React from "react";

export type AlertProps = {
  type: "success" | "error" | "pending";
  title: string;
  message: string;
  visible?: boolean;
};

const Alert: React.FC<AlertProps> = ({ type , title, message }) => {
  const baseClasses = "border-t-4 rounded-b px-4 py-3 shadow-md flex";
  
  const alertClasses = {
    success: "bg-teal-100 border-teal-500 text-teal-900",
    error: "bg-red-100 border-red-500 text-red-900",
    pending: "bg-blue-100 border-blue-500 text-blue-900"
  };

  const iconClasses = {
    success: "text-teal-500",
    error: "text-red-500",
    pending: "text-blue-500"
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
        );
      case "error":
        return (
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
        );
      case "pending":
        return (
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${baseClasses} ${alertClasses[type]}`} role="alert">
      <div className="flex">
        <div className="py-1">
          <svg
            className={`fill-current h-6 w-6 ${iconClasses[type]} mr-4`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            {getIcon()}
          </svg>
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;