import Marquee from "react-marquee-slider";
import PropTypes from "prop-types";
import times from "lodash/times";
import styled from "styled-components";

const Ticker = styled.p`
  border-color: #fff;
  margin: 10px !important;
  border-width: 10px !important;
`;

export default function StockTicker({ text }) {
  // still some unresolved issues with padding/margin
  // have to try on build server to check
  // on hot reload, the margin returns
  return (
    <div>
      <Marquee key="marquee" velocity={25}>
        {times(10, Number).map((id) => (
          <Ticker className="m-1" key={id}>{text}</Ticker>
        ))}
      </Marquee>
    </div>
  );
}

StockTicker.propTypes = {
  text: PropTypes.string.isRequired,
};
