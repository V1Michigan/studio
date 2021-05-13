import StockTicker from "../components/StockTicker";
import { useState } from "react";
import { useRouter } from "next/router";
import { sendEmail } from "../components/functions";
import HiddenHead from "../components/HiddenHead";
import Header from "../components/Header";
import Value from "../components/Value";
import Checkmarks from "../components/Checkmarks";
import Typist from "react-typist";

export default function IndexPage() {
  const [email, setEmail] = useState("");
  const router = useRouter(); // will be used once application page is finished
  const [people, setPeople] = useState([
    "Engineers",
    "Designers",
    "Growth Hackers",
    "Creatives",
    "Builders",
  ]);

  const onTypingDone = () => {
    setPeople([
      "Engineers",
      "Designers",
      "Growth Hackers",
      "Creatives",
      "Builders",
    ]);
  };

  return (
    <>
      <main>
        <HiddenHead />

        <Header />
        <StockTicker text="IT'S TIME TO BUILD™"></StockTicker>

        <div className="p-8 max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold tracking-tighter text-gray-900 mt-8">
            A one-of-a-kind product studio at the University of Michigan.
          </h1>
          <h2 className="text-3xl tracking-tight text-gray-700 my-4">
            Software is eating the world, and we're here to embrace it. Join us
            this summer for a sprint to create world-class products that solve
            real problems.
          </h2>
        </div>
        <div className="animate-bounce text-center font-bold mb-20 text-3xl text-gray-700">
          &darr;
        </div>
        <Value />

        <Checkmarks />

        {/* CTA w/ Logos */}

        {/* FAQ */}

        {/* Who's running this? */}

        <div className="flex items-center justify-center">
          <div className="max-w-screen-xl text-center">
            <h1 className="text-6xl font-bold text-gray-800 tc">Want in?</h1>
            <div className="shadow-lg mt-8 m-3 p-3 flex items-center border rounded-md border-teal-500">
              <input
                className="outline-none bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="you@umich.edu"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button
              className="flex mx-auto mt-8 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              onClick={() => {
                console.log(email);
                if (sendEmail(email)) {
                  // Uncomment the below line once application page has been finished
                  router.push("/application");
                } else {
                  alert("Please enter a valid email address");
                }
              }}
            >
              Take a look
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="bg-gradient-to-r from-gray-900 to-black">
          <p className="footer text-gray-200 text-center py-8">
            &copy; 2021 V1 | team@v1michigan.com
          </p>
        </div>
      </main>
    </>
  );
}
