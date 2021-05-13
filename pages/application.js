import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function Application() {
  const [event, setEvent] = useState({
    name: "",
    email: "",
    referral: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [referrer, setReferrer] = useState(null);

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
    <main>
      <Head>
        <title>V1 x Y Combinator | University of Michigan</title>
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="description"
          content="V1 and Y Combinator present a fireside chat event with YC President Geoff Ralston"
        />
        <meta name="og:title" content="V1 Community | University of Michigan" />
        <meta
          name="og:description"
          content="V1 and Y Combinator present a fireside chat event with YC President Geoff Ralston"
        />
        <meta property="og:image" content="/yc-event.jpg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="bg-gradient-to-t from-blue-100 to-blue-200 p-4">
        <div className="p-4 flex justify-center md:justify-start">
          <Link href="/">
            <img className="logo mr-3 rounded-sm" src="/apple-touch-icon.png" />
          </Link>
        </div>
        <div>
          <h1 className="text-4xl text-center tracking-tight text-black-900 p-4 max-w-2xl mx-auto font-bold">
            V1 Product Studio Application 🚀
          </h1>
          <p className="text-center font-bold text-black-800 text-2xl">
            Ideate, Design, Build, Ship
          </p>
          <div className="max-w-lg mx-auto p-4 text-base">
            {" "}
            <p className="text-black-800">
              Applications are due ___
            </p>
            <p className="text-black-800 mt-2">
              Build a real product by summer's end.
            </p>
            <p className="text-black-800 mt-2">
              Product Studio is meant for the most ambitious builders at Michigan. We look forward to reading your application.
            </p>
          </div>
        </div>
        <form
          className="max-w-4xl mx-auto p-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            const data = new FormData();
            for (const [key, value] of Object.entries(event)) {
              data.append(key, value);
            }

            axios
              .post(
                "https://script.google.com/macros/s/AKfycbxlhVld1NPhOCvEPqctFEoRqSV7QCSXngL72BcJeb5CUUbEbrdm3xAu/exec",
                data
              )
              .then((res) => {
                if (res.data.result === "success") {
                  window.location.href =
                    "https://ycombinator.zoom.us/meeting/register/tJMvfu2vqz0sE9V4tnmbHYztXxeGNhP438lG?timezone_id=America%2FNew_York";
                } else {
                  Swal.fire(
                    "There was an error submitting the form.",
                    "Please try again later or contact us at team@v1michigan.com",
                    "error"
                  );
                }
              })
              .finally(() => {
                setSubmitted(false);
                setEvent({
                  name: "",
                  email: "",
                  referral: "",
                });
              });
          }}
        >
          <div>
            <div className="w-full bg-white shadow-md rounded p-4">
              <div className="px-3 my-4">
                <label
                  className="block text-gray-800 text-lg mb-2"
                  htmlFor="name"
                >
                  Full Name <span className="text-red-800">*</span>
                  <input
                    name="name"
                    id="name"
                    className="mt-2 appearance-none block w-full bg-gray-000 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Billy Magic"
                    onChange={handleInputChange}
                    value={event.name}
                    required
                    disabled={submitted}
                  />
                </label>
              </div>
              <div className="px-3 my-4">
                <label
                  className="block text-gray-800 text-lg mb-2"
                  htmlFor="email"
                >
                  Email <span className="text-red-800">*</span>
                  <input
                    name="email"
                    id="email"
                    className="mt-2 appearance-none block w-full bg-gray-000 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={event.email}
                    required
                    disabled={submitted}
                  />
                </label>
              </div>
              <div className="px-3 my-4">
                <label className="block text-gray-800 text-lg mb-2">
                  How did you hear about this event?{" "}
                  <span className="text-red-800">*</span>
                  <input
                    name="referral"
                    id="referral"
                    className="mt-2 appearance-none block w-full bg-gray-000 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    type="text"
                    placeholder="V1 Newsletter, etc."
                    onChange={handleInputChange}
                    value={event.referral}
                    required
                    disabled={submitted}
                  />
                </label>
              </div>
              <div className="px-3 mt-10 mb-6">
                <button
                  type="submit"
                  className={`bg-gradient-to-r from-yellow-200 to-yellow-500 hover:opacity-75 text-gray-800 font-semibold py-3 px-4 rounded shadow mb-4 ${
                    submitted ? "hidden" : "block"
                  } mx-auto`}
                  disabled={submitted}
                >
                  Continue to YC Registration ›
                </button>
                <button
                  type="button"
                  className={`bg-gray-500 font-semibold text-gray-800 py-3 px-4 rounded shadow mb-4 ${
                    submitted ? "block" : "hidden"
                  } mx-auto`}
                  disabled
                >
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-200 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-gradient-to-r from-gray-900 to-black">
        <p className="footer text-gray-200 text-center py-8">
          &copy; 2021 V1 | team@v1michigan.com
        </p>
      </div>
    </main>
  );
}
