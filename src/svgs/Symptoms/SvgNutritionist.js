import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 60 60"
      {...props}>
      <Path
        d="M31 4.2C29.9 6 29 8 29 8.7c0 .8-1.1 1-3.3.6-4.2-.6-10.6 2.5-13.3 6.4-1.2 1.8-1.8 4.6-1.8 8 0 4.8-.2 5.2-2.6 5.5l-2.5.3v27H9c1.9 0 4 .6 4.5 1.3.6.8 2.4 1.2 4 1l3-.3.3-9.2.3-9.3h17.8l.3 9.3.3 9.2 3 .3c1.6.2 3.4-.2 4-1 .5-.7 2.6-1.3 4.5-1.3h3.5v-27l-2.8-.3c-2.7-.3-2.8-.6-2.3-3.7.9-4.4-1.8-10.9-5.6-13.6-1.6-1.2-4.7-2.2-6.8-2.3-4.4-.1-4.7-.6-2.4-4.1 1.5-2.4 1.2-4.5-.7-4.5-.5 0-1.8 1.5-2.9 3.2z"
        fill="#6979F8"
      />
    </Svg>
  );
}

const SvgNutritionist = React.memo(SvgComponent);
export default SvgNutritionist;
