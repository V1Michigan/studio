import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";
import SEO from "../components/SEO";
import { sendAWSEmail } from "../components/functions";

const Input = ({
  label,
  id,
  placeholder,
  handleInputChange,
  value,
  submitted,
  required,
}) => (
  <div className="px-3 my-4">
    <label className="block text-gray-800 text-lg mb-2" htmlFor="name">
      {label} {required ? <span className="text-red-800">*</span> : null}
      {required ? (
        <input
          style={{
            "-webkit-appearance": "none",
            "-moz-appearance": "none",
            appearance: "none",
          }}
          name={id}
          id={id}
          className="mt-2 appearance-none block w-full bg-gray-000 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          type="text"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={value}
          required
          disabled={submitted}
        />
      ) : (
        <input
          style={{
            "-webkit-appearance": "none",
            "-moz-appearance": "none",
            appearance: "none",
          }}
          name={id}
          id={id}
          className="mt-2 appearance-none block w-full bg-gray-000 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          type="text"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={value}
          disabled={submitted}
        />
      )}
    </label>
  </div>
);

const TextArea = ({
  label,
  subtext,
  id,
  submitted,
  required,
  value,
  handleInputChange,
}) => (
  <div className="px-3 my-4">
    <label className="block text-gray-900 text-lg mb-2" htmlFor="name">
      {label} {required ? <span className="text-red-800">*</span> : null}
      <br />
      <div className="text-gray-600 text-sm mb-2">
        {subtext ? subtext : null}
      </div>
      {required ? (
        <textarea
          name={id}
          id={id}
          className="mt-2 appearance-none block w-full bg-gray-000 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          type="text"
          onChange={handleInputChange}
          value={value}
          required
          disabled={submitted}
          style={{ resize: "none" }}
        />
      ) : (
        <textarea
          name={id}
          id={id}
          className="mt-2 appearance-none block w-full bg-gray-000 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          type="text"
          onChange={handleInputChange}
          value={value}
          disabled={submitted}
          style={{ resize: "none" }}
        />
      )}
    </label>
  </div>
);

export default function Apply() {
  return (
  <script>
      const router = useRouter();
      router.push('https://docs.google.com/forms/d/e/1FAIpQLScNXUE48KGGN0eE0WnHfNbHEKfG2-QkeoRUkEUhcb5keOBmcQ/viewform');
  </script>
  )
}

/* 
  const [event, setEvent] = useState({
    name: "",
    email: "",
    referral: "",
    project: "",
    links: "",
    year: "",
    commitment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [referrer, setReferrer] = useState(null);
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
    <main>
      <SEO
        title="V1 Product Studio Application | University of Michigan"
        description="A one-of-a-kind product studio at the University of Michigan. Want in? Apply here."
      />

      <div className="bg-gradient-to-t from-blue-100 to-blue-200 p-4">
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
            V1 Product Studio Application 🚀
          </h1>
          <p className="text-center font-bold text-gray-800 text-2xl">
            It's time to build.
          </p>
          <div className="max-w-lg mx-auto p-4 text-base text-center">
            {" "}
            <p className="text-gray-800">
              Applications are due May 19th, 2021 at 11:59 PM ET
            </p>
            <p className="text-gray-800 mt-2">
              Build and launch a real product by summer's end.
            </p>
            <p className="text-gray-800 mt-2">
              V1 Product Studio is open to any ambitious Michigan student
              builder. We look forward to reading your application. The program
              runs from May 23rd, 2021 to August 8th, 2021.
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

            var first_name = event.name.trim().split(" ")[0];

            axios
              .post(
                "https://script.google.com/macros/s/AKfycbyK4VdcyYB6nY63xr4utgBC2aWd3Lf3r4a4wDNGkUj5eQ4IGBlE4q1XeSuS2TDfCCR8/exec",
                data
              )
              .then((res) => {
                if (res.data.result === "success") {
                  if (
                    first_name != "" &&
                    first_name != undefined &&
                    first_name != null
                  ) {
                    sendAWSEmail(event.email, true, first_name);
                  } else {
                    sendAWSEmail(event.email, true, false);
                  }
                  router.push("/submitted");
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
                  project: "",
                  links: "",
                  year: "",
                  commitment: "",
                });
              });
          }}
        >
          <div>
            <div className="w-full bg-white shadow-md rounded p-4">
              <Input
                label="Full Name"
                id="name"
                placeholder="Billy Magic"
                handleInputChange={handleInputChange}
                value={event.name}
                submitted={submitted}
                required={true}
              />
              <Input
                label="Email"
                id="email"
                placeholder="billy@umich.edu"
                handleInputChange={handleInputChange}
                value={event.email}
                submitted={submitted}
                required={true}
              />

              <Input
                label="Grad Year"
                id="year"
                placeholder="2022, 2023, 2024, 2025, ..."
                handleInputChange={handleInputChange}
                value={event.year}
                submitted={submitted}
                required={true}
              />

              <TextArea
                label="Tell us about a project you've worked on! Why did you do it?"
                id="project"
                subtext="Note: project is an extremely general term — nearly anything goes, and it does not need to be technical"
                handleInputChange={handleInputChange}
                value={event.project}
                required={true}
                submitted={submitted}
              />

              <TextArea
                label="Drop a few links of things you're proud of"
                subtext="(Portfolio, GitHub, Dribbble, LinkedIn, Twitter, Figmas etc.)"
                id="links"
                handleInputChange={handleInputChange}
                value={event.links}
                required={true}
                submitted={submitted}
              />

              <Input
                label="Are you committed for 5-10 hours a week from May 23rd, 2021 to Mid-August — Yes or No"
                id="commitment"
                placeholder="Yes"
                handleInputChange={handleInputChange}
                value={event.commitment}
                submitted={submitted}
                required={true}
              />

              <Input
                label="How did you hear about this?"
                id="referral"
                placeholder="V1 Newsletter, etc."
                handleInputChange={handleInputChange}
                value={event.referral}
                submitted={submitted}
              />

              {/* SUBMIT BUTTON }
              <div className="px-3 mt-10 mb-6">
                <button
                  type="submit"
                  className={`bg-gradient-to-r font-bold text-xl from-blue-500 to-blue-600 hover:opacity-75 text-white py-3 px-4 rounded shadow mb-4 ${
                    submitted ? "hidden" : "block"
                  } mx-auto`}
                  disabled={submitted}
                >
                  Submit Application 🚀
                </button>
                <button
                  type="button"
                  className={`bg-blue-700 font-semibold text-gray-100 py-3 px-4 rounded shadow mb-4 ${
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
  ); */