import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  const { width, height } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}>
      <Path
        d="M12 9.007a5 5 0 0 0-3.536 8.536L12 21.2l3.543-3.669A5 5 0 0 0 12 9.007Zm0 6.987a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm10.849-8.313-9-7.044a3 3 0 0 0-3.7 0l-9 7.042A2.988 2.988 0 0 0 0 10.044V24h24V10.044a2.985 2.985 0 0 0-1.151-2.363Zm-5.9 11.276L12.105 23.9l-5.047-4.935a7 7 0 1 1 9.892-.008Z"
        fill="#00C48C"
      />
    </Svg>
  );
}

const SvgHome = React.memo(SvgComponent);
export default SvgHome;
