import React, { useState } from "react";

export default function FAQ({ titleUppercase, subtitleBold, listOfQA, color }) {
  const [dropdownOpen, setdropdownOpen] = useState([]);

  return (
    <div className="bg-white mt-10">
      <section className="mx-auto max-w-screen-xl p-12">
        <div className="flex flex-col text-center w-full mb-8">
          <h2
            className={`text-base text-${color}-700 tracking-widest uppercase font-medium mb-1`}
          >
            {titleUppercase}
          </h2>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
            {subtitleBold}
          </h1>
        </div>

        <div className="max-w-xl mx-auto">
          {listOfQA.map(
            (item, index) => (
              (index = index + 1),
              (
                <div
                  key={item.question}
                  className={`p-1 relative hover:bg-gray-100 my-4`}
                >
                  <button
                    type="button"
                    className={`block md:w-full text-left md:text-2xl text-xl font-bold tracking-tight text-gray-700 mb-2 focus:outline-none`}
                    onClick={() => {
                      dropdownOpen.find((element) => element == index)
                        ? setdropdownOpen(
                            dropdownOpen.filter((ans) => ans !== index)
                          )
                        : setdropdownOpen((dropdownOpen) => [
                            ...dropdownOpen,
                            index,
                          ]);
                    }}
                  >
                    {item.question}
                    {dropdownOpen.find((element) => element == index) ? (
                      <span className="absolute right-0 pr-2"> - </span>
                    ) : (
                      <span className="absolute right-0 pr-2"> + </span>
                    )}
                  </button>

                  <p
                    className={` ${
                      dropdownOpen.find((element) => element == index)
                        ? "block"
                        : "hidden"
                    } text-base text-gray-700 mb-2 `}
                  >
                    {item.answer}
                    {item.hasOwnProperty("link") ? (
                      <a className="text-blue-600" href={item.link}>
                        {item.textAfterLink}
                      </a>
                    ) : null}
                  </p>
                </div>
              )
            )
          )}
        </div>
      </section>
    </div>
  );
}
