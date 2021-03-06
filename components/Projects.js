const Projects = () => {
  return (
    <section className="text-gray-700 body-font background pb-16 pt-8">
      <div className="container px-5 py-2 mx-auto">
        <div className="text-center">
          <br />
          <h1 className="text-4xl md:text-5xl font-bold title-font tracking-tight text-gray-200 mb-4">
            What's in it for you?
          </h1>
          <p className="md:text-2xl text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 tracking-tight">
            V1 Product Studio is where you can level up, rapidly.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray-100 inline-flex"></div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font px-5">
        <div className="flex flex-wrap">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-600 mb-5 flex-shrink-0 text-3xl">
              🚀
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-200 text-2xl title-font font-bold tracking-tight mb-3">
                Builder's mindset
              </h2>
              <p className="leading-relaxed text-base text-gray-100">
                Learn and develop a personal framework for you to apply your
                interests in either engineering, design, business, or growth,
                and take ideas from zero to one. This mindset can only be taught
                through actually <i>building</i> a product.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-500 mb-5 flex-shrink-0 text-3xl">
              💼
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-200 text-2xl title-font font-bold tracking-tight mb-3">
                Practical experience
              </h2>
              <p className="leading-relaxed text-base text-gray-100">
                Gain practical skills in your field of interest by working on
                your summer-long project with a 2-3 other people with
                complementary skills. Launch your project on Product Hunt and
                other channels to thousands of people and learn from interacting
                with your users.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-500 mb-5 flex-shrink-0 text-3xl">
              🤝
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-200 text-2xl title-font font-bold tracking-tight mb-3">
                Unique opportunities
              </h2>
              <p className="leading-relaxed text-base text-gray-100">
                We'll help connect you to any opportunity you're interested in —
                whether that's a fellowship, working on your own company, or
                joining a high-growth startup. You'll gain access to a community
                of student builders and alum at premier startups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
