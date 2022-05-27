import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import { heightScreen, widthScreen } from '@ultis/dimensions';

function SvgComponent(props) {
  const height = heightScreen / 3;
  const width = widthScreen / 1.2;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 295 295"
      fill="none"
      {...props}>
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={213}
        y={0}
        width={53}
        height={46}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M213.613.728h51.713v44.476h-51.713V.728z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M265.199 15.577c-.791-6.378-6.188-12.326-12.614-12.33-3.797-.002-7.406 1.982-10 4.755-1.135 1.212-1.912 2.096-2.535 3.006-.433-1.015-1.021-2.035-1.895-3.447-1.997-3.228-5.145-5.884-8.868-6.63-6.302-1.26-12.764 3.509-14.795 9.607-2.031 6.097-.34 12.944 3 18.435 3.341 5.49 9.093 12.669 19.69 16.23 7.306-.935 17.091-7.416 21.447-12.142 4.356-4.726 7.362-11.105 6.57-17.484z"
          fill="#E8505B"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M262.882 27.033c0 .008-.073.008-.212.002l-.62-.04-2.379-.196-8.742-.8.157-.097-3.642 9.495-.219.573-.144-.597-3.664-15.21-1.186-4.96.37.073a39470.97 39470.97 0 01-6.672 9.174l-.064.088-.107-.01-15.359-1.604-4.348-.485c-.477-.06-.858-.108-1.149-.143-.261-.037-.395-.06-.393-.07.001-.01.137-.008.399.009l1.155.085 4.358.38 15.374 1.452-.171.077 6.641-9.197.265-.366.105.44 1.19 4.959c1.297 5.443 2.529 10.609 3.626 15.219l-.363-.025 3.713-9.468.043-.108.115.012 8.729.936c1.002.117 1.794.21 2.37.276l.616.083c.138.021.209.036.208.043z"
        fill="#FAFAFA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128.121 59.336c-.288-.116-11.601-3.083-10.917 8.357.685 11.44 12.028 8.392 12.028 8.063 0-.33-1.111-16.42-1.111-16.42z"
        fill="#FFBE9D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125.479 71.631c-.052-.034-.191.152-.519.326-.319.17-.878.308-1.488.12-1.235-.371-2.368-2.23-2.545-4.287a6.568 6.568 0 01.386-2.887c.299-.858.805-1.476 1.407-1.62a1.017 1.017 0 011.21.476c.172.31.112.543.175.559.034.028.234-.205.113-.672a1.273 1.273 0 00-.493-.69c-.288-.207-.698-.297-1.12-.226-.878.114-1.623.973-1.975 1.899a6.77 6.77 0 00-.5 3.23c.211 2.3 1.52 4.386 3.203 4.766.816.161 1.474-.122 1.804-.412.338-.304.382-.564.342-.582z"
        fill="#AA6550"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M156.688 18.468c5.812 0 11.731 0 19.007 3.8 4.589 2.396 7.45 6.194 9.842 10.785 1.83 3.514 2.915 8.116 2.704 12.072-.211 3.956-.224 6.722-1.805 10.356"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M154.364 19.366c17.202-1.201 32.059 11.924 32.96 29.144.748 14.33 1.408 29.832 1.25 37.637-.341 16.752-17.119 19.223-17.119 19.223s.37 4.968.784 11.13c.833 12.411-8.75 23.065-21.18 23.536-12.186.461-22.435-9.05-22.885-21.236l-2.493-67.519c-.613-16.633 12.077-30.755 28.683-31.915z"
        fill="#FFBE9D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M171.455 105.37s-10.295.535-21.492-6.623c0 0 5.067 12.188 21.796 10.813l-.304-4.19z"
        fill="#FFBE9D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M180.907 57.831c.035 1.264-1.007 2.336-2.327 2.396-1.316.06-2.414-.913-2.449-2.177-.035-1.264 1.007-2.337 2.324-2.398 1.32-.06 2.418.916 2.452 2.18zM183.227 54.444c-.299.31-2.101-1.047-4.676-1.06-2.571-.05-4.47 1.26-4.748.942-.136-.141.171-.701.998-1.294.816-.59 2.201-1.16 3.805-1.14 1.603.021 2.948.623 3.718 1.234.787.613 1.051 1.18.903 1.319zM155.659 57.831c.034 1.265-1.008 2.335-2.326 2.396-1.317.06-2.415-.913-2.45-2.177-.035-1.264 1.008-2.336 2.325-2.397 1.318-.06 2.416.915 2.451 2.178zM157.916 54.722c-.298.31-2.103-1.046-4.676-1.06-2.571-.05-4.471 1.26-4.748.942-.135-.14.168-.701.998-1.293.815-.59 2.201-1.16 3.805-1.14 1.603.021 2.948.622 3.718 1.233.785.614 1.05 1.18.903 1.318zM167.108 73.89c-.011-.147 1.592-.41 4.188-.72.657-.063 1.28-.189 1.395-.636.159-.474-.111-1.185-.424-1.953l-1.903-5.021c-2.644-7.15-4.551-13.026-4.263-13.13.289-.104 2.666 5.607 5.309 12.755.636 1.763 1.244 3.444 1.822 5.052.244.748.664 1.6.321 2.582-.18.49-.666.843-1.09.953-.421.125-.791.129-1.116.147-2.612.119-4.23.118-4.239-.029zM159.517 75.61c.419-.02.402 2.774 2.778 4.777 2.372 2.01 5.353 1.719 5.372 2.11.037.176-.668.537-1.925.562-1.234.032-3.032-.379-4.486-1.604-1.45-1.228-2.064-2.856-2.15-4.003-.098-1.169.22-1.858.411-1.841zM158.662 44.639c-.259.697-2.827.345-5.851.685-3.03.279-5.474 1.144-5.869.513-.176-.302.253-.957 1.244-1.627.982-.669 2.544-1.3 4.359-1.487 1.814-.183 3.473.117 4.57.574 1.105.456 1.659 1.01 1.547 1.342zM182.866 45.279c-.456.581-2.225-.04-4.359-.085-2.13-.121-3.94.36-4.351-.254-.18-.299.108-.882.902-1.43.782-.545 2.086-.985 3.552-.93 1.464.06 2.73.6 3.467 1.203.749.608.992 1.212.789 1.496z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125.878 56.51s.727 3.873.923 5.622c.072.638-.012 7.737 1.712 8.092 1.483.305 4.431-1.046 5.743-3.981 1.312-2.936 3.809-9.98 3.539-13.184-.368-4.37-.572-8.809.302-13.106.873-4.297 2.927-8.489 6.382-11.19 3.453-2.701 8.432-3.648 12.352-1.682 2.419 1.214 4.229 3.364 6.483 4.862 2.028 1.346 4.501 2.155 6.91 1.797 2.407-.357 4.682-2.035 5.34-4.378.717-2.557-.601-5.358-2.646-7.052-2.046-1.693-4.691-2.47-7.296-2.987-7.225-1.436-14.884-1.15-21.751 1.519-6.864 2.668-12.956 7.792-15.89 14.548-3.394 7.813-2.999 12.604-2.103 21.12z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M164.174 57.94c-.064.006.008-1.015-.435-2.76a11.345 11.345 0 00-4.151-6.17c-1.275-.951-2.879-1.758-4.729-2.08-1.837-.312-3.91-.252-5.88.5a10.51 10.51 0 00-2.829 1.527 10.525 10.525 0 00-2.362 2.376c-1.374 1.83-2.149 4.182-2.171 6.605.022 2.424.796 4.777 2.171 6.608.665.93 1.472 1.73 2.361 2.377.879.658 1.837 1.18 2.83 1.526 1.97.753 4.043.813 5.881.501 1.849-.323 3.454-1.13 4.728-2.08a11.34 11.34 0 004.151-6.171c.443-1.744.371-2.765.435-2.76.008 0 .012.063.013.186l-.007.543c.001.24-.011.535-.069.882-.046.347-.088.75-.213 1.19-.395 1.745-1.513 4.339-4.129 6.368-1.296.99-2.94 1.837-4.845 2.186-1.892.338-4.033.289-6.078-.478a10.863 10.863 0 01-2.936-1.569 10.915 10.915 0 01-2.456-2.456c-1.429-1.894-2.239-4.338-2.26-6.853.022-2.514.831-4.956 2.261-6.85a10.89 10.89 0 012.456-2.456 10.818 10.818 0 012.935-1.567c2.045-.767 4.186-.817 6.078-.48 1.904.35 3.549 1.196 4.844 2.187 2.617 2.029 3.735 4.622 4.13 6.368.125.44.167.843.213 1.19.058.346.07.642.069.882l.007.543c-.001.122-.005.185-.013.185zM193.664 57.94c-.065.006.007-1.015-.436-2.76a11.345 11.345 0 00-4.151-6.17c-1.275-.951-2.88-1.758-4.729-2.08-1.837-.312-3.909-.252-5.881.5a10.52 10.52 0 00-2.828 1.527 10.521 10.521 0 00-2.361 2.376c-1.376 1.83-2.15 4.182-2.172 6.605.021 2.424.796 4.777 2.17 6.608.667.93 1.474 1.73 2.363 2.377a10.52 10.52 0 002.828 1.526c1.972.753 4.044.813 5.882.501 1.849-.323 3.453-1.13 4.728-2.08a11.346 11.346 0 004.151-6.171c.443-1.744.371-2.765.436-2.76.007 0 .011.063.012.186l-.006.543c0 .24-.013.535-.069.882-.047.347-.09.75-.214 1.19-.395 1.745-1.512 4.339-4.129 6.368-1.295.99-2.941 1.837-4.845 2.186-1.892.338-4.033.289-6.078-.478a10.878 10.878 0 01-2.936-1.569 10.89 10.89 0 01-2.455-2.456c-1.43-1.894-2.24-4.338-2.26-6.853.021-2.514.831-4.956 2.26-6.85a10.907 10.907 0 012.455-2.456 10.853 10.853 0 012.936-1.567c2.044-.767 4.185-.817 6.077-.48 1.904.35 3.55 1.196 4.845 2.187 2.617 2.029 3.735 4.622 4.13 6.368.124.44.167.843.214 1.19.056.346.069.642.069.882l.006.543c-.001.122-.005.185-.012.185z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M171.164 56.725c-.036.058-.412-.151-1.051-.363a6.916 6.916 0 00-2.581-.33 6.938 6.938 0 00-2.515.669c-.606.295-.949.551-.994.5-.032-.035.248-.38.85-.762.598-.381 1.54-.752 2.631-.827 1.092-.07 2.076.173 2.717.472.647.297.971.603.943.641zM175.732 28.461c.165-.87-.12-1.356.368-1.712.558-.405 1.614.66 2 1.084.124.136.519-.394.67-.495.123-.082.312-.964.294-1.112-.072-.604-1.024-.769-1.471-1.181-.449-.413-1.004-.694-1.579-.896-.501-.177-1.123-.273-1.513.089-.298.277-.348.726-.337 1.133.012.403.067.81.229 1.18.162.37.439.7.807.865"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125.255 47.605s8.213 3.013 12.489 4.823l-.241-4.2-11.95-4.726s-.304 3.12-.298 4.103zM126.022 41.08c.046-.108 2.649.89 5.814 2.23 3.167 1.338 5.697 2.51 5.651 2.618-.045.108-2.648-.89-5.814-2.23-3.166-1.339-5.697-2.511-5.651-2.618z"
        fill="#EBEBEB"
      />
      <Path
        d="M128.498 129.573l-.635-19.881s3.95 18.194 24.637 17.958c19.77-.227 19.408-16.03 19.408-16.03l.705 8.013v32.369l-12.895 52.805-16.467 2.089-18.199-72.182 3.446-5.141z"
        fill="#4B66EA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M170.069 123.21c.013.008-.07.152-.238.423-.181.261-.396.687-.785 1.153-.712.98-1.925 2.282-3.681 3.565-1.75 1.291-4.105 2.464-6.879 3.23a24.302 24.302 0 01-9.281.642c-3.292-.443-6.325-1.451-8.913-2.683a38.653 38.653 0 01-6.51-3.924 44.619 44.619 0 01-3.943-3.266c-.449-.405-.774-.745-1-.968-.223-.226-.336-.35-.326-.361.01-.01.142.093.383.299l1.051.908c.913.786 2.26 1.896 4.01 3.146a40.41 40.41 0 006.5 3.814c2.568 1.199 5.562 2.18 8.803 2.616 3.241.401 6.392.122 9.125-.6 2.734-.731 5.062-1.857 6.807-3.097 1.752-1.232 2.981-2.483 3.725-3.423.755-.933 1.115-1.498 1.152-1.474z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M155.713 292.917l-.298-93.833-26.647-68.483-.895-20.611-16.237 12.28s-23.641 81.361-24.005 78.541c-.364-2.821-.009 92.106-.009 92.106h68.091z"
        fill="#EBEBEB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M155.073 292.657c-.116 0-.211-21.144-.211-47.22 0-26.086.095-47.225.211-47.225.117 0 .212 21.139.212 47.225 0 26.076-.095 47.22-.212 47.22z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.873 135.673l3.295 2.494-2.316 15.18 38.897 40.743-35.328-46.391 3.01-12.026h-7.558z"
        fill="#E0E0E0"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M157.172 244.848L97.48 227.346l-1.978-45.341 16.372-59.735s-39.026 19.47-41.681 31.86c-2.656 12.389-9.058 42.509-9.74 64.278-.61 19.465-.698 32.478 3.745 38.691 12.73 17.794 96.615 20.972 130.129-.025"
        fill="#EBEBEB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.499 195.075c-.005.004-.071-.07-.193-.22l-.536-.668-2.028-2.598-7.395-9.598c-6.223-8.148-14.798-19.37-24.267-31.766l-1.827-2.399-.061-.08.025-.098 3.017-12.025.197.253-7.558-.011h-.193l.001-.193.032-13.402v-.08l.062-.048 11.733-8.916 3.22-2.416.846-.621c.193-.138.294-.206.299-.199.005.006-.087.086-.269.236l-.819.658-3.167 2.486-11.647 9.027.064-.127.032 13.402-.194-.192 7.558-.011h.261l-.064.253c-.959 3.843-1.964 7.872-3.003 12.028l-.036-.179 1.826 2.398c9.433 12.425 17.971 23.674 24.17 31.841l7.288 9.68 1.965 2.645.502.694c.111.159.165.241.159.246z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M179.111 118.739c-4.762-8.327-7.231-7.46-7.231-7.46l.248 2.967.005 6.237-2.256 26.756-14.463 58.139.299 87.539h54.668l6.805-106.857-.618-46.034-37.457-21.287z"
        fill="#EBEBEB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M216.567 140.026s14.151 10.446 15.376 27.251c.995 13.651 3.281 51.026 3.694 59.162.643 12.672-9.224 42.345-34.913 33.939-15.405-5.04-72.324-24.388-72.324-24.388l3.786-24.172 67.559 4.026 1.341-56.348 15.481-19.47z"
        fill="#EBEBEB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M131.417 214.602s-19.12-2.067-23.549-.998c-4.256 1.027-10.316 6.234-10.316 6.234l.085 7.554 30.763 8.598 3.017-21.388z"
        fill="#FFBE9D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M155.415 196.639c-.007-.003.022-.091.084-.26l.288-.747 1.144-2.858 4.279-10.479 6.395-15.518c.607-1.454 1.208-2.971 1.958-4.453.722-1.497 1.572-2.964 2.45-4.447a97.686 97.686 0 016.071-8.763 98.256 98.256 0 013.364-4.135l-.037.214-2.383-6.057-.078-.201.203-.069 9.966-3.388-.102.279-11.298-18.864c-1.368-2.288-2.536-4.117-3.775-4.868a4.961 4.961 0 00-1.511-.612c-.364-.088-.555-.121-.553-.134 0 0 .196.005.567.073.367.069.925.198 1.561.569.64.366 1.287 1.02 1.916 1.859.63.84 1.302 1.837 1.987 2.988l11.434 18.794.123.202-.226.077c-3.134 1.075-6.469 2.218-9.955 3.415l.125-.27 2.389 6.054.047.118-.084.098a99.819 99.819 0 00-3.346 4.116 99.045 99.045 0 00-6.053 8.72c-.874 1.473-1.722 2.928-2.44 4.411-.748 1.467-1.345 2.963-1.959 4.421l-6.48 15.486-4.403 10.428c-.521 1.208-.929 2.155-1.217 2.827l-.326.73c-.076.163-.118.247-.125.244zM224.33 255.675c.006.006-.075.09-.237.252l-.726.706c-.65.61-1.675 1.442-3.105 2.355a21.037 21.037 0 01-5.685 2.382c-2.334.607-5.118.839-8.14.517a25.813 25.813 0 01-4.661-.987c-1.587-.505-3.175-1.124-4.853-1.716a1126.245 1126.245 0 00-10.686-3.795 1320.967 1320.967 0 00-24.61-8.338c-17.52-5.755-33.494-10.605-45.071-14.062a47652.21 47652.21 0 00-13.722-4.059l-3.73-1.109-.966-.298c-.218-.07-.328-.109-.326-.115.002-.007.117.017.338.073l.977.259c.88.242 2.14.587 3.752 1.031 3.255.907 7.959 2.244 13.761 3.931 11.601 3.384 27.593 8.19 45.118 13.947a1161.698 1161.698 0 0124.608 8.374 962.112 962.112 0 0110.677 3.832c1.67.595 3.277 1.231 4.831 1.735 1.563.486 3.106.825 4.597 1.001 2.983.335 5.735.128 8.049-.45a21.202 21.202 0 005.657-2.294c1.432-.884 2.468-1.691 3.132-2.278l.754-.674c.171-.15.262-.225.267-.22zM97.637 227.528c-.013.087-1.073-.143-2.786-.076-.855.038-1.869.176-2.954.488a13.615 13.615 0 00-3.326 1.516c-2.202 1.414-3.713 3.307-4.624 4.752-.907 1.46-1.297 2.465-1.373 2.433-.026-.01.055-.266.227-.722.16-.462.465-1.101.89-1.865.86-1.51 2.377-3.493 4.653-4.955a13.244 13.244 0 013.448-1.534 11.96 11.96 0 013.052-.411c.875.006 1.583.074 2.06.184.48.095.739.161.733.19zM78.833 221.604c-.013-.007.013-.08.077-.214.063-.133.178-.325.375-.53.375-.43 1.127-.864 2.12-1.053.994-.211 2.205-.162 3.506.008 1.306.17 2.726.496 4.159 1.01 2.878 1.015 5.184 2.637 6.595 4.037.704.706 1.21 1.335 1.53 1.79.308.462.467.724.442.74-.067.051-.735-.987-2.177-2.313-1.438-1.32-3.712-2.861-6.533-3.856a21.305 21.305 0 00-4.07-1.022c-1.279-.189-2.444-.265-3.399-.101-.954.146-1.67.508-2.058.878-.397.363-.531.647-.567.626zM101.119 169.53c-.029.002-.126-.441-.273-1.231-.12-.384-.297-.848-.481-1.388-.258-.51-.513-1.115-.884-1.732-.726-1.248-1.756-2.635-3.042-4.047-1.32-1.38-2.86-2.825-4.663-4.101-3.587-2.583-7.366-4.095-10.192-4.683-1.42-.254-2.583-.437-3.394-.431-.81-.039-1.26-.074-1.262-.103-.002-.03.447-.05 1.266-.062.82-.056 2 .083 3.448.303 2.882.519 6.745 2.015 10.38 4.633 1.828 1.294 3.38 2.767 4.704 4.18 1.29 1.448 2.31 2.876 3.017 4.164.36.639.6 1.265.842 1.793.167.56.324 1.039.421 1.437.101.82.142 1.267.113 1.268zM214.449 238.86c-.007 0-.014-.098-.02-.288l-.018-.849c-.023-.744-.052-1.844-.161-3.254-.231-2.807-.712-6.917-2.4-11.685-.42-1.188-.896-2.429-1.638-3.572a7.001 7.001 0 00-3.162-2.681c-2.717-1.171-5.986-1.016-9.31-1.204l-21.77-.914c-17.988-.782-33.988-1.458-44.041-1.996l.134-.108-1.423 8.654-.395 2.294-.111.588a.96.96 0 01-.048.198c-.007 0-.002-.069.013-.202l.076-.593.327-2.304 1.306-8.677.016-.113.119.005 44.045 1.832 21.768.948c1.673.083 3.302.122 4.894.252 1.586.138 3.147.402 4.541 1.019a7.344 7.344 0 013.295 2.826c.76 1.188 1.232 2.45 1.646 3.649 1.664 4.816 2.099 8.953 2.282 11.773.084 1.416.086 2.519.082 3.265l-.024.849c-.008.191-.015.288-.023.288z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M201.566 185.972c.117 0 .212 6.543.212 14.613 0 8.073-.095 14.615-.212 14.615-.117 0-.212-6.542-.212-14.615 0-8.07.095-14.613.212-14.613zM70.663 152.666s-.05.185-.167.54c-.108.357-.317.872-.489 1.582-.393 1.404-.892 3.502-1.452 6.235-1.13 5.464-2.52 13.459-4.08 23.469a922.283 922.283 0 00-2.412 16.467c-.413 2.973-.668 6.075-.884 9.283a331.447 331.447 0 00-.507 9.931c-.246 6.817-.391 14.02-.194 21.523.057 1.874.126 3.77.283 5.674.048.957.204 1.898.322 2.85.2.937.372 1.887.692 2.8.583 1.838 1.464 3.605 2.686 5.136 1.215 1.515 2.803 2.829 4.611 3.551l.026.01.008.005c3.742 1.932 7.84 3.333 12.025 4.592 4.19 1.256 8.522 2.269 12.92 3.174 9.843 2.01 19.605 3.192 29.033 3.535 4.718.142 9.343-.035 13.86-.362 4.515-.311 8.917-.783 13.175-1.416 8.523-1.231 16.471-3.124 23.649-5.497a121.234 121.234 0 0019.122-8.204l.021.263-26.233-9.287-7.064-2.523-1.826-.662c-.41-.151-.616-.239-.616-.239s.215.061.631.2l1.839.625 7.088 2.45 26.277 9.163.309.109-.289.155a120.845 120.845 0 01-19.15 8.277c-7.193 2.394-15.16 4.306-23.702 5.553a168.993 168.993 0 01-13.203 1.434c-4.52.332-9.169.514-13.901.374-9.457-.339-19.238-1.519-29.104-3.535-4.409-.906-8.75-1.922-12.956-3.184-4.2-1.265-8.311-2.67-12.1-4.63l.033.014c-1.945-.777-3.54-2.122-4.803-3.688-1.257-1.576-2.16-3.392-2.754-5.269-.324-.934-.5-1.901-.702-2.856-.12-.967-.277-1.928-.324-2.886-.155-1.916-.222-3.816-.277-5.696-.19-7.517-.034-14.724.225-21.548.13-3.411.308-6.728.527-9.94.223-3.21.487-6.322.91-9.302a861.548 861.548 0 012.462-16.466c1.595-10.007 3.028-17.998 4.204-23.457.582-2.73 1.105-4.826 1.523-6.227.183-.707.405-1.221.525-1.574.128-.35.203-.526.203-.526z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M97.552 221.924c9.981-11.051 9.542-30.704 3.814-44.649-.528 15.107-2.31 28.502-3.676 43.182"
        fill="#E0E0E0"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.387 180.105c.015.002.013.168-.003.484l-.09 1.38-.398 5.067-1.377 16.713-1.31 16.719c-.157 2.098-.287 3.816-.382 5.068l-.12 1.378c-.03.314-.054.479-.07.479-.014-.001-.018-.168-.014-.484l.04-1.382c.04-1.2.127-2.935.248-5.078.246-4.287.655-10.204 1.188-16.734a974.018 974.018 0 011.499-16.705l.533-5.057.169-1.372c.042-.313.072-.477.087-.476zM125.995 160.137c.117 0 .212 3.836.212 8.568 0 4.734-.095 8.571-.212 8.571-.117 0-.212-3.837-.212-8.571 0-4.732.095-8.568.212-8.568z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.492 188.609c.149 1.749.9 3.326 1.838 4.545.936 1.219 2.844 2.412 4.38 2.325 0 0 3.831.327 5.893-2.958 1.868-2.974 2.329-9.161.831-12.818-1.03-2.516-3.345-4.855-6.063-4.919-3.567-.084-5.804 2.493-6.566 5.103"
        fill="#E0E0E0"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.805 179.887s.08-.68.66-1.749a7.147 7.147 0 011.339-1.755 6.227 6.227 0 012.525-1.482 6.31 6.31 0 011.697-.272c.595-.03 1.238.04 1.855.244 1.244.401 2.397 1.258 3.313 2.375.928 1.111 1.611 2.522 1.947 4.055.347 1.53.453 3.156.363 4.806-.166 2.54-.664 5.067-2.07 6.999-.71.946-1.683 1.63-2.691 2.03a7.324 7.324 0 01-3.048.512h.024c-.817.032-1.549-.234-2.184-.54a7.204 7.204 0 01-1.643-1.147c-.921-.88-1.426-1.859-1.789-2.665a7.824 7.824 0 01-.566-1.969 4.95 4.95 0 01-.052-.536c-.004-.121-.001-.183.007-.184.062-.015.06 1.019.791 2.608.378.772.911 1.73 1.798 2.541.449.401.984.772 1.593 1.069.607.284 1.304.518 2.026.479l.005-.001.019.001c1.828.065 4.049-.64 5.39-2.442 1.31-1.809 1.813-4.294 1.968-6.778.174-3.208-.363-6.441-2.19-8.592-.869-1.077-1.959-1.899-3.119-2.288a4.815 4.815 0 00-1.739-.251 6.076 6.076 0 00-4.069 1.602 7.295 7.295 0 00-1.357 1.662c-.612 1.022-.756 1.685-.803 1.668z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M117.594 188.77c.147 1.748.898 3.326 1.837 4.545.937 1.218 2.844 2.411 4.38 2.324 0 0 3.832.327 5.894-2.957 1.867-2.975 2.329-9.162.83-12.819-1.03-2.516-3.345-4.854-6.063-4.918-3.567-.085-5.804 2.493-6.566 5.102"
        fill="#E0E0E0"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M117.906 180.047s.081-.679.66-1.748a7.172 7.172 0 011.339-1.755 6.217 6.217 0 012.525-1.483 6.316 6.316 0 011.697-.271 5.137 5.137 0 011.856.243c1.244.401 2.396 1.259 3.313 2.375.927 1.112 1.61 2.522 1.947 4.056.347 1.53.452 3.155.362 4.806-.165 2.54-.664 5.067-2.069 6.998a6.26 6.26 0 01-2.693 2.03 7.313 7.313 0 01-3.046.513h.023c-.817.032-1.548-.234-2.184-.541a7.192 7.192 0 01-1.643-1.146c-.92-.88-1.425-1.86-1.789-2.666a7.898 7.898 0 01-.567-1.969 5.444 5.444 0 01-.051-.535c-.003-.122-.001-.184.008-.184.06-.015.059 1.019.79 2.608.378.772.911 1.729 1.798 2.54.449.402.985.773 1.593 1.07.608.284 1.305.518 2.027.479l.004-.001.02.001c1.828.064 4.049-.64 5.39-2.442 1.309-1.809 1.812-4.294 1.968-6.778.174-3.209-.364-6.441-2.19-8.592-.87-1.077-1.959-1.899-3.12-2.288a4.833 4.833 0 00-1.738-.252 6.072 6.072 0 00-4.071 1.602 7.367 7.367 0 00-1.356 1.663c-.613 1.022-.755 1.685-.803 1.667z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M121.036 179.135c-1.774-.354-3.605.864-4.355 2.51-.75 1.644-.584 3.584.01 5.291.302.87.718 1.716 1.351 2.385.631.669 1.498 1.149 2.419 1.176 1.349.042 2.562-.88 3.348-1.978a7.55 7.55 0 001.143-6.221c-.37-1.407-1.405-2.848-2.858-2.886"
        fill="#E0E0E0"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M122.094 179.412c0-.012.111-.025.322-.009.211.021.525.095.88.298.712.395 1.524 1.372 1.855 2.792.344 1.394.304 3.211-.501 4.964-.404.864-.98 1.728-1.817 2.386-.811.659-1.997 1.082-3.13.749-1.119-.314-1.971-1.145-2.5-2.043-.536-.909-.846-1.868-1.041-2.802-.391-1.866-.074-3.715.81-4.899.867-1.193 2.037-1.694 2.828-1.798.402-.064.718-.029.926-.003.206.044.313.074.309.088-.004.048-.444-.083-1.205.076-.747.148-1.831.668-2.615 1.809-.792 1.123-1.066 2.865-.673 4.649.196.89.508 1.823 1.014 2.665.5.837 1.277 1.576 2.26 1.851.979.286 2.005-.066 2.762-.668.774-.599 1.327-1.407 1.72-2.226.783-1.654.856-3.388.561-4.732-.277-1.358-1.008-2.308-1.649-2.718-.652-.422-1.128-.379-1.116-.429z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125.126 192.466c-.064.017-.153-.255-.431-.581-.272-.327-.76-.692-1.385-.888-.63-.195-1.251-.228-1.703-.264-.451-.033-.738-.07-.74-.129-.002-.057.276-.126.739-.17.459-.038 1.121-.058 1.831.16.714.223 1.256.693 1.501 1.118.253.429.237.748.188.754zM125.763 178.03c.037.037-.125.29-.503.589-.374.298-.981.613-1.709.746-.729.131-1.408.047-1.862-.101-.459-.148-.699-.329-.677-.375.043-.118 1.122.319 2.464.061 1.348-.227 2.204-1.015 2.287-.92zM181.487 119.941c.006-.013.098.021.267.099.168.077.417.193.721.372.613.347 1.477.904 2.43 1.737 1.914 1.63 4.15 4.516 5.22 8.26 1.12 3.672 1.726 7.118 1.989 9.615.138 1.249.215 2.262.262 2.962.042.701.05 1.089.021 1.093-.029.002-.093-.381-.184-1.076l-.397-2.941a61.98 61.98 0 00-2.096-9.533c-1.048-3.661-3.183-6.496-5.015-8.157-1.834-1.691-3.266-2.355-3.218-2.431zM171.386 209.209c2.35-.089 4.228-2.433 6.577-2.308 1.743.094 3.23 1.8 3.082 3.54-.147 1.737-1.9 3.171-3.633 2.97-2.467-.287-3.912-3.179-6.333-3.735"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M191.317 211.211c-.704 0-1.438-.061-2.201-.183l.128-.801c2.906.466 5.345-.012 7.254-1.415 2.4-1.764 3.947-4.919 4.598-9.379l.025-.17c.265-1.767.632-36.454.633-43.039.001-10.285-9.029-11.69-9.413-11.744-.365-.068-8.573-1.439-12.928 9.796-4.559 11.766-11.848 34.438-12.331 37.095-.059.326-.148.729-.252 1.197-.758 3.402-2.335 10.481 2.387 14.559 5.263 4.544 9.414 2.785 9.588 2.71l.332.74c-.193.085-4.774 2.066-10.45-2.837-5.089-4.394-3.441-11.793-2.649-15.349.101-.455.19-.848.246-1.165.486-2.678 7.802-25.446 12.374-37.243 4.606-11.888 13.723-10.322 13.814-10.303.083.011 10.094 1.543 10.093 12.544-.001 5.425-.36 41.283-.643 43.159l-.024.167c-.683 4.682-2.339 8.019-4.921 9.916-1.581 1.161-3.478 1.745-5.66 1.745z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M202.159 162.859c-.107.037-.237-1.73-1.688-4.042-.724-1.142-1.789-2.381-3.205-3.471-1.421-1.079-3.199-1.999-5.208-2.461-4.053-.932-7.903.079-10.267 1.339-2.421 1.259-3.502 2.637-3.569 2.556-.011-.009.053-.095.185-.249.138-.146.319-.391.606-.647.546-.545 1.429-1.248 2.638-1.924 1.205-.677 2.763-1.286 4.569-1.61 1.8-.329 3.862-.36 5.934.123a13.856 13.856 0 015.349 2.565c1.443 1.138 2.514 2.432 3.222 3.622.704 1.196 1.083 2.264 1.25 3.018.11.37.13.673.165.872.027.201.034.307.019.309zM222.811 227.692c-.087.018-.225-1.397-1.113-3.46-.873-2.036-2.631-4.74-5.501-6.601-1.419-.923-3.014-1.352-4.464-1.61-1.46-.243-2.802-.331-3.927-.408l-2.672-.184c-.63-.058-.978-.105-.975-.134.002-.029.352-.037.984-.03l2.677.05c1.131.039 2.484.095 3.977.322 1.481.241 3.14.672 4.628 1.638 2.968 1.926 4.728 4.736 5.549 6.843.415 1.064.64 1.963.741 2.591.105.628.12.979.096.983z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M181.904 214.156s7.973-12.08 10.012-13.662c2.038-1.582 19.444-9.441 21.483-8.177 2.038 1.263.784 4.005.784 4.005s7.369-2.582 8.153-1.564c.784 1.018.941 2.742 0 4.154 0 0 4.077-.627 4.077.627s-.47 2.822-2.353 4.233c-1.881 1.412-14.115 9.557-15.097 11.807l-3.963-.241-23.096-1.182z"
        fill="#FFBE9D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M204.854 210.702c-.023-.013.096-.288.363-.761.266-.473.7-1.132 1.311-1.889 1.212-1.522 3.235-3.351 5.784-4.869 2.549-1.52 5.041-2.524 6.841-3.215a60.207 60.207 0 012.152-.775c.512-.171.8-.252.811-.225.01.027-.258.16-.752.378l-2.098.899c-1.769.76-4.224 1.8-6.736 3.301-2.513 1.496-4.524 3.252-5.773 4.699-1.264 1.44-1.837 2.496-1.903 2.457zM194.738 210.506c-.025-.015.113-.329.387-.889.274-.557.678-1.361 1.226-2.333.554-.967 1.245-2.111 2.198-3.254.491-.567.985-1.149 1.671-1.656a44.097 44.097 0 012.112-1.314c2.936-1.715 5.706-3.074 7.786-3.884a22.895 22.895 0 012.506-.838c.611-.137.949-.199.955-.171.018.072-1.322.382-3.347 1.286-2.033.871-4.765 2.266-7.685 3.971-.726.431-1.438.855-2.093 1.292-.604.435-1.136 1.029-1.608 1.564-.946 1.103-1.656 2.217-2.237 3.156-.532.894-.978 1.65-1.34 2.26-.317.534-.506.824-.531.81z"
        fill="#AA6550"
      />
      <Path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M295 293.739c0 .145-66.044.261-147.493.261C66.029 294 0 293.884 0 293.739c0-.144 66.029-.26 147.507-.26 81.449 0 147.493.116 147.493.26z"
        fill="#263238"
      />
    </Svg>
  );
}

const SvgDoctor1 = React.memo(SvgComponent);
export default SvgDoctor1;