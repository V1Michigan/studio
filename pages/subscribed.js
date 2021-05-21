import Head from "next/head";
import Link from "next/link";
import SEO from "../components/SEO";

export default function Subscribed() {
  return (
    <main className="h-screen ">
      <SEO
        title="V1 Product Studio Subscribed | University of Michigan"
        description="A one-of-a-kind product studio at the University of Michigan."
      />
      <div className="h-full bg-gradient-to-t from-blue-100 to-blue-200 p-4">
        <div className="p-4 flex justify-center md:justify-start">
          <Link href="/">
            <img
              className="logo mr-3 ml-4 rounded-sm cursor-pointer"
              src="/clear_logo.png"
            />
          </Link>
        </div>
        <div>
          <h1 className="text-5xl text-center tracking-tight text-gray-900 p-4 max-w-2xl mx-auto font-bold">
            You've subscribed
          </h1>
          <p className="text-center font-bold text-gray-800 text-3xl">
            This fall, it's time to build.
          </p>
          <div className="max-w-lg mx-auto p-4 text-2xl">
            {" "}
            <p className="text-center text-gray-800">
             Feel free to send us updates at productstudio@umich.edu about what you're up to.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-screen bg-gradient-to-r from-gray-900 to-black">
        <p className="footer text-gray-200 text-center py-8">
          &copy; 2021 V1 | team@v1michigan.com
        </p>
      </div>
    </main>
  );
}
