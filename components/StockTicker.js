import Marquee from "react-marquee-slider";
import PropTypes from "prop-types";
import times from "lodash/times";

export default function StockTicker({ text }) {
  // still some unresolved issues with padding/margin
  // have to try on build server to check
  // on hot reload, the margin returns
  return (
    <div className="bg-gray-700 text-white">
      <Marquee key="marquee" velocity={15}>
        {times(10, Number).map((id) => (
          <div className="m-2" key={id}>
            {text}
          </div>
        ))}
      </Marquee>
    </div>
  );
}

StockTicker.propTypes = {
  text: PropTypes.string.isRequired,
};
