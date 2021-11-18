const products = [
  {
    name: "Decode",
    description:
      "Finding the best SWE internships beyond Big Tech is difficult. Find startup SWE roles and bring you clarity to the recruiting process.",
    link: "https://decode.so",
  },

  {
    name: "Rally",
    description:
      "We all struggle with staying accountable. As your accountability buddy, Rally grew and was used by several active users.",
    link: "https://rallyyy.com",
  },
  {
    name: "Feedbee",
    description:
      "The Latest Buzz on your Newsletter! FeedBee provides Newsletter Writers with detailed analytics.",
    link: "https://welcome.tryfeedbee.com",
  },
  {
    name: "College Chats",
    description:
      "Connecting high school and college students to help high schoolers find their dream college.",
    link: "",
  },
];

const Value = () => (
  <section className="text-gray-700 body-font bg-gray-100 py-16">
    <div className="container px-5 py-2 mx-auto">
      <div className="text-center mb-8">
        <div className="max-w-md p-4 mx-auto">
          <img
            className="tilt2 shadow-md rounded-sm border-4"
            src="/products.gif"
          ></img>
        </div>
        <br />
        <h1 className="text-4xl md:text-5xl font-bold title-font tracking-tight text-gray-900 mb-4">
          It's time to design real world products.
        </h1>
        <p className="md:text-2xl text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 tracking-tight">
          An initiative for Michigan students to cultivate the builder’s mindset
          by building impactful software products. Let's check out last cohort's
          products.
        </p>
        <div className="md:flex md:flex-wrap mt-6 justify-center">
          {products.map((product) => (
            <div className="mx-auto w-1/2">
              <div className="border rounded-sm m-4">
                <h1 className="py-4 font-bold text-3xl tracking-tighter ">
                  <a
                    href={product.link}
                    target="_blank"
                    className="hover:opacity-50 cursor-pointer"
                  >
                    {product.name} ›
                  </a>
                </h1>
                <p className="px-8 text-gray-800 mb-6">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Value;
