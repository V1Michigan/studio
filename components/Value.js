const Value = () => (
  <section className="text-gray-700 body-font bg-gray-100 py-16">
    <div className="container px-5 py-2 mx-auto">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4 ">
          <img
            className="w-24 opacity-75 animate-spin-slow text-gray-700"
            src="/atom.svg"
          />
        </div>
        <h1 className="text-5xl font-bold title-font tracking-tight text-gray-900 mb-4">
          It's time to build.
        </h1>
        <p className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 tracking-tight">
          An initiative for Michigan students to cultivate the builder’s mindset
          by building impactful software products.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-900 inline-flex"></div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-600 mb-5 flex-shrink-0 text-3xl">
            🚀
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-2xl title-font font-bold tracking-tight mb-3">
              Builder's mindset
            </h2>
            <p className="leading-relaxed text-base">
              Learn and develop a personal framework for you to apply your
              interests in either engineering, design, business, or growth, and
              take ideas from zero to one. This mindset can only be taught
              through actually <i>building</i> a product.
            </p>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-500 mb-5 flex-shrink-0 text-3xl">
            💼
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-2xl title-font font-bold tracking-tight mb-3">
              Practical experience
            </h2>
            <p className="leading-relaxed text-base">
              Gain practical skills in your field of interest by working on your
              summer-long project with a 2-3 other people with complementary
              skills. Launch your project on Product Hunt and other channels to
              thousands of people and learn from interacting with your users.
            </p>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-500 mb-5 flex-shrink-0 text-3xl">
            🤝
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-2xl title-font font-bold tracking-tight mb-3">
              Unique opportunities
            </h2>
            <p className="leading-relaxed text-base">
              We'll help connect you to any opportunity you're interested in —
              whether that's a fellowship, working on your own company, or
              joining a high-growth startup. You'll gain access to a community
              of student builders and alum at premier startups.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Value;
