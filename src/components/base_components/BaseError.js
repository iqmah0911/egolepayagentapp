
import React, { useEffect } from "react";

const BaseError = ({message}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {

    }, 1000); // Adjust the timeout interval as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <p className="text-red-500 text-center">{message}</p>
      </div>
    </div>
  );
};

export default BaseError;
