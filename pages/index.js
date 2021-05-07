import Head from "next/head";
import Link from "next/link";

export default function IndexPage() {
  return (
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-gray-200 to-white">
        <div className="max-w-screen-xl">


          <div className="md:flex">
            <div className="flex-1 p-8 flex items-center">
              <div className="">
                <h1 className="text-6xl tracking-tight font-bold font-logo text-gray-900 leading-none">
                  V1
                </h1>
                <h2 className="text-2xl tracking-tight font-bold italic text-gradient bg-gradient-to-r from-yellow-600 to-yellow-700">
                  at Michigan
                </h2>
                <p className="text-2xl mt-8 text-gray-900 font-bold tracking-tight mb-3">
                  The community for ambitious student builders at the University
                  of Michigan.
                </p>
              </div>
            </div>
            <div className="max-w-xl p-4">
              <img className="tilt shadow-md rounded-sm" src="/gif.gif"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-black">
        <p className="footer text-gray-200 text-center py-8">
          &copy; 2021 V1 | team@v1michigan.com
        </p>
      </div>
    </main>
  );
}
