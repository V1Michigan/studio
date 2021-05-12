const Header = () => (
  <div className="h-3/4 flex justify-center items-center bg-gray-100 p-12">
    <div className="max-w-screen-xl">
      <div className="md:flex md:flex-col md:items-center">
        <div className="max-w-xl">
          <img className="w-24 opacity-50 animate-spin-slow" src="/atom.svg" />
        </div>
        <div className="flex-1 flex my-2 items-center">
          <div className="">
            <h1 className="text-6xl tracking-tighter font-bold font-logo text-blue-600 leading-none">
              V1 Product Studio
            </h1>
            <h2 className="text-2xl tracking-tight italic text-gradient bg-gradient-to-r from-yellow-600 to-yellow-700">
              at Michigan
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
