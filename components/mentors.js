
  const mentors = [
    {
      image: "/community/sean.jpg",
      name: "Sean Stapleton",
      role: "Alchemist @ Lumos",
      link: "https://www.linkedin.com/in/seancstapleton/",
    },
    {
      image: "/community/dar.jpg",
      name: "Dar Sleeper",
      role: "Product Manager @ Tesla",
      link: "https://www.linkedin.com/in/darsleeper/",
    },
    {
      image: "/community/david.jpg",
      name: "David Kobrosky",
      role: "CEO & Co-Founder @ Intros AI",
      link: "https://www.linkedin.com/in/davidkobrosky/",
    },
    {
      image: "/community/phillip.jpg",
      name: "Philip Ruffini",
      role: "Product & Growth @ Near Inc",
      link: "https://www.linkedin.com/in/philipruffini/",
    },
    {
      image: "/community/varun.jpg",
      name: "Varun Jindal",
      role: "Founder @ StuddyBuddies",
      link: "https://www.linkedin.com/in/varun-jindal/",
    },
    {
      image: "/community/samay.jpg",
      name: "Samay Shamdasani",
      role: "Engineering @ Ramp",
      link: "https://shamdasani.org",
    },
    {
      image: "/community/dheera.jpg",
      name: "Dheera Vuppala",
      role: "Product Management @ Squarespace",
      link: "https://www.linkedin.com/in/dheeravuppala/",
    },
    {
      image: "/community/ishaan.jpg",
      name: "Ishaan Hiranandani",
      role: "Blockchain Product @ PayPal",
      link: "https://www.linkedin.com/in/ishaanh/",
    },
    {
      image: "/community/sam.jpg",
      name: "Sam Forman",
      role: "Fellow @ Kleiner Perkins",
      link: "https://www.linkedin.com/in/sam-forman-438225118/",
    },
  ]
  const Mentors = ({ mentors }) => (
    <div className="mb-12">
        <h1 className="font-bold text-gray-900 text-4xl text-center pt-20 pb-10 w-10/12 md:w-3/4 block mx-auto">V1 Mentors</h1>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center">
            {mentors.map((member) => (
              <a className="mx-2 my-2" href={member.link}>
                <div className="h-full flex items-center border-gray-200 border px-4 py-2 rounded-lg m-2">
                  <img
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={member.image}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      {member.name}
                    </h2>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
    </div>
  );

  export const MentorComponent = () => <Mentors mentors={mentors} />;
