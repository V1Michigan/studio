import { MentorComponent } from "./mentors";
const Logos = () => {
  const images = [
    "https://brand.umich.edu/assets/brand/downloads/um-logos/block_m_kit/block_m-hex.png",
    "/partners/mproduct.png",
    "/partners/blockchain.png",
    "/yc.png",
    "https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd03e8a3e-ec7a-41f1-986a-b2f3b99c171d_1294x347.png",
    "https://global-uploads.webflow.com/5ffb5488d5a5678104a2fc7b/5ffd8cec34d64dd80cb3fd2a_5f97e724cef66b94b3828443_loop_black_logo.svg",
    "https://d33wubrfki0l68.cloudfront.net/37c4b346755006c32d0c3f5dfa125fba6f156c4a/34b98/img/logos/pathlight-logo.svg",
    "https://www.algorand.com/assets/media-kit/logos/full/png/algorand_full_logo_black.png",
    "https://assets.website-files.com/602e8e4411398ca20cfcafd3/602e9b9b76b7e733a5d6e66f_Ava%20Labs.%20Black%20(1).svg",
    "https://contrarycap.com/images/horizontal-color@3x.svg",
  ];
  return (
    <section className="max-w-screen-xl text-center mx-auto my-8">
      <div className="max-w-md p-4 mx-auto">
        <img className="tilt shadow-md rounded-sm border-4" src="/gif.gif"></img>
      </div>

      <div className="m-8">
        <h1 className="text-gray-900 text-4xl font-bold tracking-tighter my-4">
          We're backed by and come from the best.
        </h1>
        <p className="text-gray-700 text-xl my-2 max-w-3xl mx-auto">
          Our community members are a part of some of the top student
          organizations and are affiliated with fast-growing startups and
          venture funds.{" "}
        </p>
      </div>
      <MentorComponent />
      <div className="flex flex-wrap justify-center">
        {images.map((image) => (
          <div key={image} className="m-2">
            <img className="h-12 m-3 max-w-xs rounded-md" src={image}></img>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
