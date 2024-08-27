const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#72445e]">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
