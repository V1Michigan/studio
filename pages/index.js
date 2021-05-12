import Head from "next/head";
import StockTicker from "../components/StockTicker";
import { useState } from "react";
import { useRouter } from "next/router";
import { sendEmail } from "../components/functions";

export default function IndexPage() {
  const [email, setEmail] = useState("");
  const router = useRouter(); // will be used once application page is finished

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

        <div className="h-3/4 flex justify-center items-center bg-blue-100 p-8">
          <div className="max-w-screen-xl">
            <div className="md:flex">
              <div className="max-w-xl p-4">
                {/* <img className="tilt shadow-md rounded-sm" src="/gif.gif"></img> */}
              </div>
              <div className="flex-1 p-8 flex items-center">
                <div className="">
                  <h1 className="text-6xl tracking-tight font-bold font-logo text-gray-900 leading-none">
                    V1 Product Studio
                  </h1>
                  <h2 className="text-2xl tracking-tight font-bold italic text-gradient bg-gradient-to-r from-yellow-600 to-yellow-700">
                    at Michigan
                  </h2>
                  <p className="text-2xl mt-8 text-gray-900 font-bold tracking-tight mb-3">
                    The community for ambitious student builders at the
                    University of Michigan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StockTicker text="It's time to build™"></StockTicker>

        <div className="flex items-center justify-center">
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
        </div>
        <br />
        <br />
        <br />

        {/* <div className="bg-gradient-to-r from-gray-900 to-black">
        <p className="footer text-gray-200 text-center py-8">
          &copy; 2021 V1 | team@v1michigan.com
        </p>
      </div> */}
      </main>
    </>
  );
}
