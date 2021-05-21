import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";
import SEO from "../components/SEO";
import { pushToSheets } from "../components/functions";

export default function Application() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const partners = [
    "mproduct",
    "shift",
    "upround",
    "cfe",
    "blockchain",
    "akpsi",
    "wolverinesintech",
    "geecs",
    "sepi",
    "mpowered",
    "startum",
  ];

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const referral = urlParams.get("ref");
    if (referral) {
      setReferrer(referral);
      setEvent({ ...event, referral: referral });
    }
  }, []);

  const autoExpand = (target) => {
    target.style.height = "inherit";
    target.style.height = target.scrollHeight + "px";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });

    autoExpand(e.target);
  };
  return (
    <main className="min-h-screen">
      <SEO
        title="V1 Product Studio Application | University of Michigan"
        description="A one-of-a-kind product studio at the University of Michigan. Want in? Apply here."
      />

      <div className="min-h-screen bg-gradient-to-t from-blue-100 to-blue-200 p-4">
        <div className="p-4 flex justify-center md:justify-start">
          <Link href="/">
            <img
              className="logo mr-3 ml-4 rounded-sm cursor-pointer"
              src="/clear_logo.png"
            />
          </Link>
        </div>
        <div>
          <h1 className="text-4xl text-center tracking-tight text-gray-900 p-4 max-w-2xl mx-auto font-bold">
            V1 Product Studio Signup 🚀
          </h1>
          <p className="text-center font-bold text-gray-800 text-2xl">
            It's time to build.
          </p>
          <div className="max-w-lg mx-auto p-4 text-base text-center">
            {" "}
            <p className="text-grey-800 text-lg text-center my-2 max-w-3xl mx-auto">
              Build and launch a real product over three months this summer. We
              can't wait to see what you build. {/*<i>Limited spots available.</i> */}
            </p>
            <p className="text-grey-800 text-lg text-center my-2 max-w-3xl mx-auto">
              Signup to stay updated
              {/* Applications are due May 19th, 2021 at 11:59 PM ET */}
            </p>
            <br />
            <div className="max-w-md mx-auto m-3 text-center">
              <label className="mb-1 text-gray-800 font-bold text-xl block text-center">
                Email
              </label>
              <input
                style={{
                  "-webkit-appearance": "none",
                  "-moz-appearance": "none",
                  appearance: "none",
                }}
                className="text-grey-800 mt-2 w-3/4 text-base outline-none bg-transparent border-2 border-gray-600 py-3 rounded-md shadow-sm px-3 leading-tight focus:outline-none"
                type="text"
                placeholder="billymagic@umich.edu"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="text-center">
              <button
                className="text-base md:text-lg m-2 font-semibold outline-none text-white py-2 px-4 rounded-md bg-blue-700 hover:opacity-75"
                onClick={() => {
                  if (pushToSheets(email)) {
                    router.push("/subscribed");
                  } else {
                    alert("Please enter a valid email address");
                  }
                }}
              >
                Let's do this ›
              </button>
              {/* <p className="italic text-grey-700 mt-2">
                You'll be taken to our application page.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="margin-on-sm w-full bg-gradient-to-r from-gray-900 to-black">
        <p className="footer text-gray-200 text-center py-8">
          &copy; 2021 V1 | team@v1michigan.com
        </p>
      </div>
    </main>
  );
}
