import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  const { width, height } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={18}
      height={24}
      {...props}>
      <Path
        d="M1.172 19.119A4 4 0 0 0 0 21.947V24h2.053a4 4 0 0 0 2.828-1.172L18.224 9.485l-3.709-3.709ZM23.145.855a2.622 2.622 0 0 0-3.71 0l-3.506 3.507 3.709 3.709 3.507-3.506a2.622 2.622 0 0 0 0-3.71Z"
        fill="#F23A56"
      />
    </Svg>
  );
}

const SvgEdit = React.memo(SvgComponent);
export default SvgEdit;
