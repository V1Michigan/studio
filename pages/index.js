import StockTicker from "../components/StockTicker";
import { useState } from "react";
import { useRouter } from "next/router";
import { sendEmail } from "../components/functions";
import HiddenHead from "../components/HiddenHead";
import Header from "../components/Header";
import Value from "../components/Value";
import Logos from "../components/Logos";
import FAQ from "../components/FAQ";
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

        <Logos />

        <section className="max-w-6xl mx-auto my-48">
          <div className="m-8">
            <h1 className="text-gray-900 text-4xl text-center font-bold tracking-tighter my-4">
              Interested? Applications now open.
            </h1>
            <p className="text-gray-700 text-xl text-center my-2 max-w-3xl mx-auto">
              Build and launch a real product over three months this summer. We
              can't wait to see what you build.
            </p>
          </div>

          <div className="max-w-md mx-auto m-3 py-2">
            <label className="mb-4 font-bold tracking-tight text-xl">
              Email
            </label>
            <input
              className="mt-2 w-full text-xl outline-none bg-transparent border py-3 rounded-md shadow-sm mr-3 px-3 leading-tight focus:outline-none"
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
              className="text-xl outline-none text-white py-2 px-4 rounded-md bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-75"
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
              Let's do this ›
            </button>
          </div>
        </section>

        <FAQ
          titleUppercase="Questions? We got you"
          color="blue"
          subtitleBold="Frequently Asked Questions"
          listOfQA={[
            {
              question: "What is this?",
              answer:
                "V1 Product Studio is an initiative to bring together students of all experience levels and interest to build impactful software products. This isn't a startup accelerator or class, but a community-focused, ambitious program to bring project ideas to life. At the end of the summer, you and your team of 2-3 people will have successfully launched a product on Product Hunt, Reddit, etc. and have active users.",
            },
            {
              question: "What is V1?",
              answer:
                "V1 is the community for ambitious student builders at the University of Michigan. Check out more on the website ",
              link: "https://v1michigan.com",
              textAfterLink: "here.",
            },
            {
              question: "What experience do I need?",
              answer:
                "You don't need formal experience, but you need to be ambitious and ready to learn. You also need to put in the time required (10+ hours a week) this summer to make this product a reality. This will be one of your most impactful experiences, and the time you spend on your project should reflect that. ",
            },
            {
              question: "Do I need an idea?",
              answer:
                "No! We’ll be working with each team to narrow down a specific problem area they’d like to work on and then help them write a spec!                 ",
            },
            {
              question: "What is the time commitment?",
              answer:
                "You can expect to commit an average of 5-10 hours a week. You'll have a team lead — who's an experienced builder — and they'll help you and your team stay on track to build and launch your product.",
            },
            {
              question: "What does this program consist of?",
              answer:
                "We’ll ideate on ideas with you, write up a spec, and spend the rest of the time building out an MVP and helping you launch it on various channels including but not limited to Product Hunt, Reddit, and more and hopefully, in the end you’ll have real users! ",
            },
            {
              question: "What will I learn?",
              answer:
                "You will learn how to make wireframes and turn them into prototypes in Figma. After completion, you'll have gained the skills, community, and confidence to bring any idea to life!",
            },
            {
              question:
                "Will we stop working on the projects after the summer?               ",
              answer:
                "It’s up to you and the rest of your team! You are welcome to continue working on the projects - in fact, we encourage it! You can also choose to mentor the next cohort :)",
            },
            {
              question: "How large is the initial cohort? ",
              answer:
                "We expect the initial cohort to be 4-5 teams and each team to be ~2-3 people.               ",
            },

            {
              question: "Is this free?",
              answer:
                "Yes. This program is run by 5 Michigan students who are a part of the senior leadership team at V1.",
            },
            {
              question: "Got another question?",
              answer: "Email us at team@v1michigan.com",
            },
          ]}
        />

        {/* Team component */}

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2459DA"
            fill-opacity="1"
            d="M0,288L48,282.7C96,277,192,267,288,261.3C384,256,480,256,576,224C672,192,768,128,864,117.3C960,107,1056,149,1152,144C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <div className="bg-gradient-to-r from-gray-900 to-black">
          <p className="footer text-gray-200 text-center py-8">
            &copy; 2021 V1 | team@v1michigan.com
          </p>
        </div>
      </main>
    </>
  );
}
