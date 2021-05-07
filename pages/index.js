import Head from "next/head";

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

      <div className="h-3/4 flex justify-center items-center bg-gray-100 p-12">
        <div className="max-w-screen-xl">
          <div className="md:flex md:flex-col md:items-center">
            <div className="max-w-xl">
              <img className="w-24 opacity-50 animate-spin-slow" src="/atom.svg"/>
            </div>
            <div className="flex-1 flex my-2 items-center">
              <div className="">
                <h1 className="text-6xl tracking-tighter font-bold font-logo text-blue-600 leading-none">
                  V1 Product Studio
                </h1>
                <h2 className="text-2xl tracking-tight italic text-gradient bg-gradient-to-r from-yellow-600 to-yellow-700">
                  at Michigan
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gradient-to-r from-gray-900 to-black">
        <p className="footer text-gray-200 text-center py-8">
          &copy; 2021 V1 | team@v1michigan.com
        </p>
      </div> */}
    </main>
  );
}
