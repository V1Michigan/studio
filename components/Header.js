import styled from "styled-components";

const TrippyDivStyle = {
  position: "relative",
  left: "10%",
};

const TrippyDiv2 = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = () => (
  <div className="h-3/4 flex justify-center items-center bg-gray-100 p-12">
    <div className="max-w-screen-2xl">
      <div className="md:flex md:items-center md:justify-center sm:text-center ">
        <div className="max-w-xl flex justify-center">
          <div>
            <div className="text-gray-700 rounded-full border-8 animate-trippy-slow border-black h-16 w-16"></div>
            <div className="text-gray-700 rounded-full border-8 animate-trippy2-slow border-black h-14 w-14"></div>
            <div className="text-gray-700 rounded-full border-8 animate-trippy3-slow border-black h-12 w-12"></div>
          </div>
          {/* <img className="w-24 opacity-50 animate-trippy-slow" src="/atom.svg" /> */}
        </div>
        <div className="flex-1 flex my-2 items-center">
          <div className="ml-8">
            <h1 className="text-6xl tracking-tighter font-bold font-logo text-blue-600 leading-none">
              V1 Product Studio
            </h1>
            <h2 className="text-2xl tracking-tight italic text-gradient bg-gradient-to-r from-yellow-600 to-yellow-700">
              at Michigan
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href="#apply" className="text-base outline-none text-white py-2 px-4 rounded-md bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-75">
          Apply now
        </a>

        <p className="text-gray-700 text-sm italic mt-3">
          Limited spots available, applications due 4/18 at 11:59 PM ET
        </p>
      </div>
    </div>
  </div>
);

export default Header;
