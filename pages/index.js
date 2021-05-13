import Head from "next/head";
import StockTicker from "../components/StockTicker";
import { useState } from "react";
import { useRouter } from "next/router";
import { sendEmail } from "../components/functions";
import Header from "../components/Header";
import Value from "../components/Value";
import Logos from "../components/Logos";
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
        <Head>
          <title>V1 | University of Michigan</title>
          <link rel="icon" href="/favicon.ico?v=1" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta
            name="description"
            content="V1 is a monthly newsletter for ambitious engineering and design
          students at the University of Michigan who are looking to build something great."
          />
          <meta name="og:title" content="V1 | University of Michigan" />
          <meta
            name="og:description"
            content="V1 is a monthly newsletter for ambitious engineering and design
          students at the University of Michigan who are looking to build something great."
          />
          <meta property="og:image" content="/share.png" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

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

        {/* <Checkmarks /> */}

        <Logos />

        {/* CTA w/ Logos */}

        {/* FAQ */}

        {/* Who's running this? */}

        {/* <div className="flex items-center justify-center">
          <div className="max-w-screen-xl text-center">
            <h1 className="text-6xl font-bold text-gray-800 tc">Want in?</h1>
            <div className="m-3 flex items-center border rounded-md border-teal-500 py-2">
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
              className="outline-none text-white p-2 pl-3 pr-3 rounded-md bg-gradient-to-r from-yellow-600 to-yellow-700"
              onClick={() => {
                console.log(email);
                if (sendEmail(email)) {
                  // Uncomment the below line once application page has been finished
                  // router.push("/application");
                } else {
                  alert("Please enter a valid email address");
                }
              }}
            >
              Take a look
            </button>
          </div>
        </div> */}
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
