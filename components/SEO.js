import Head from "next/head";
import PropTypes from "prop-types";

export default function SEO({ title, description, image }) {
  return (
    <Head>
      <title>{title ? title : "V1 Product Studio | University of Michigan"}</title>
      <meta
        name="og:title"
        content={title ? title : "V1 Product Studio | University of Michigan"}
      />

      <link rel="icon" href="/favicon.ico?v=1" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta
        name="description"
        content={
          description
            ? description
            : "V1 Product Studio is where you build world-class products for real users."
        }
      />
      <meta
        name="og:description"
        content={
          description
            ? description
            : "V1 Product Studio is where you build world-class products for real users."
        }
      />

      <meta property="og:image" content={image ? image : "/share.png?refresh=true"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@v1michiga" />
      <meta name="twitter:title" content={title ? title : "V1 Product Studio | University of Michigan"} />
      <meta name="twitter:description" content={
          description
            ? description
            : "V1 Product Studio is where you build world-class products for real users."
        } />
      <meta name="twitter:image" content={image ? image : "/share.png?refresh=true"} />
  
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
