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
  <div className="flex justify-center items-center background px-12 py-24 shadow-md">
    <div className="max-w-screen-2xl">
      <div className="flex items-center justify-center text-center ">
        
        <div className="flex-1 flex my-2 items-center">
          <div className="">
            <h1 className="md:text-6xl text-5xl tracking-tight font-bold text-gray-100 leading-none">
              V1 Product Studio
            </h1>
            <h2 className="md:text-2xl text-xl mt-1 tracking-tight text-yellow-200">
            University of Michigan
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <a href="#apply" className="text-base md:text-xl font-bold outline-none text-white py-3 px-6 rounded-md bg-blue-700 hover:opacity-75">
          Apply Now ›
        </a>

        <p className="text-gray-100 text-sm italic mt-6 pb-2">
          Limited spots available, applications due 10/24 at 11:59 PM ET.
        </p>
      </div>
    </div>
  </div>
);

export default Header;
