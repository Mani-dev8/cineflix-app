import Svg, {Path, G, Stop, LinearGradient,} from 'react-native-svg';
type SvgProps={
    class:string,
}
export const BackSvgComponent = (props: SvgProps) => (
  <Svg
    className={props.class}
    viewBox="0 0 512 512">
    <Path
      stroke="none"
      d="M217.9 256 345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"
    />
  </Svg>
);

export const GoogleSvgComponent = (props: SvgProps) => (
  <Svg className={props.class} viewBox="0 0 48 48">
    <Path
      fill="#FFC107"
      stroke="none"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <Path
      fill="#FF3D00"
      stroke="none"
      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <Path
      fill="#4CAF50"
      stroke="none"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <Path
      fill="#1976D2"
      stroke="none"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </Svg>
);

export const OpenEyeSvgComponent = (props: SvgProps) => (
  <Svg className={props.class} viewBox="0 0 1024 1024">
    
      <Path
        stroke="none"
        d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"
      />
    
  </Svg>
);
export const CloseEyeSvgComponent = (props: SvgProps) => (
  <Svg className={props.class} viewBox="0 0 1024 1024">
    <Path
      stroke="none"
      d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"
    />
    <Path
      stroke="none"
      d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"
    />
  </Svg>
);
export const LogoSvgComponent = (props: SvgProps) => (
  <Svg
  className={props.class}

    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: 'new 0 0 269.026886 314.9963074',
    }}
    viewBox="0 0 269.027 314.996"
    {...props}>
    <G id="color_index_0" fill="#F33">
      <Path d="M146.76 75.55c-.365-1.357-1.02-2.654-1.924-3.87l73.384-48.42a12.163 12.163 0 0 0 5.273 1.207c6.756 0 12.234-5.477 12.234-12.233C235.727 5.477 230.249 0 223.493 0S211.26 5.477 211.26 12.234c0 .171.018.338.025.508l-78.02 51.481c-3.639-1.164-7.787-1.826-12.194-1.826-3.966 0-7.722.536-11.086 1.49L59.3 26.745c.034-.368.057-.738.057-1.114 0-6.756-5.477-12.234-12.234-12.234-6.756 0-12.233 5.478-12.233 12.234s5.477 12.233 12.233 12.233c1.68 0 3.28-.34 4.738-.952l46.18 33.84c-1.296 1.476-2.213 3.09-2.673 4.798h51.392z" />
      <Path d="M237.03 75.55H31.997C14.325 75.55 0 89.875 0 107.546v175.457C0 300.675 14.325 315 31.996 315h205.035c17.67 0 31.996-14.325 31.996-31.997V107.546c0-17.67-14.325-31.996-31.996-31.996zm-40.772 137.739-89.542 51.697c-13.868 8.006-31.201-2.002-31.201-18.014V143.578c0-16.013 17.333-26.02 31.2-18.014l89.543 51.697c13.867 8.006 13.867 28.022 0 36.028z" />
    </G>
    <LinearGradient
      id="SVGID_1_"
      x1={136.99}
      x2={123.774}
      y1={4.686}
      y2={116.642}
      gradientUnits="userSpaceOnUse">
      <Stop
        offset={0}
        style={{
          stopColor: '#000',
          stopOpacity: 0,
        }}
      />
      <Stop
        offset={1}
        style={{
          stopColor: '#000',
          stopOpacity: 0.6,
        }}
      />
    </LinearGradient>
    <LinearGradient
      id="SVGID_00000183218840959452776640000010256845388329293226_"
      x1={68.204}
      x2={116.945}
      y1={123.378}
      y2={286.128}
      gradientUnits="userSpaceOnUse">
      <Stop
        offset={0}
        style={{
          stopColor: '#000',
          stopOpacity: 0,
        }}
      />
      <Stop
        offset={1}
        style={{
          stopColor: '#000',
          stopOpacity: 0.6,
        }}
      />
    </LinearGradient>
    <LinearGradient
      id="SVGID_00000154383648832990096740000005031508063249957762_"
      x1={90.957}
      x2={214.136}
      y1={324.327}
      y2={229.774}
      gradientUnits="userSpaceOnUse">
      <Stop
        offset={0}
        style={{
          stopColor: '#000',
          stopOpacity: 0,
        }}
      />
      <Stop
        offset={1}
        style={{
          stopColor: '#000',
          stopOpacity: 0.6,
        }}
      />
    </LinearGradient>
    <LinearGradient
      id="SVGID_00000106143452000242977440000012360510926221196437_"
      x1={251.365}
      x2={164.506}
      y1={188.146}
      y2={73.34}
      gradientUnits="userSpaceOnUse">
      <Stop
        offset={0}
        style={{
          stopColor: '#000',
          stopOpacity: 0,
        }}
      />
      <Stop
        offset={1}
        style={{
          stopColor: '#000',
          stopOpacity: 0.6,
        }}
      />
    </LinearGradient>
    <Path
      d="M146.76 75.55c-.365-1.357-1.02-2.654-1.924-3.87l73.384-48.42a12.163 12.163 0 0 0 5.273 1.207c6.756 0 12.234-5.477 12.234-12.233C235.727 5.477 230.249 0 223.493 0S211.26 5.477 211.26 12.234c0 .171.018.338.025.508l-78.02 51.481c-3.639-1.164-7.787-1.826-12.194-1.826-3.966 0-7.722.536-11.086 1.49L59.3 26.745c.034-.368.057-.738.057-1.114 0-6.756-5.477-12.234-12.234-12.234-6.756 0-12.233 5.478-12.233 12.234s5.477 12.233 12.233 12.233c1.68 0 3.28-.34 4.738-.952l46.18 33.84c-1.296 1.476-2.213 3.09-2.673 4.798h51.392z"
      style={{
        fill: 'url(#SVGID_1_)',
      }}
    />
    <Path
      d="M75.515 246.972V143.578c0-16.013 17.333-26.02 31.2-18.014l18.703 10.798c4.171-49.642 44.474-60.809 44.474-60.809H31.998C14.33 75.553 0 89.873 0 107.541v175.467c36.065-.115 62.733-8.777 82.357-20.615-4.13-3.712-6.842-9.094-6.842-15.421z"
      style={{
        fill: 'url(#SVGID_00000183218840959452776640000010256845388329293226_)',
      }}
    />
    <Path
      d="m196.084 213.389-89.368 51.597c-8.388 4.843-18.038 3.088-24.36-2.593C62.734 274.23 36.066 282.893 0 283.008c0 17.669 14.33 31.988 31.998 31.988h205.03c17.669 0 31.999-14.32 31.999-31.988-14.898-34.56-44.992-56.32-72.943-69.62z"
      style={{
        fill: 'url(#SVGID_00000154383648832990096740000005031508063249957762_)',
      }}
    />
    <Path
      d="M237.028 75.553h-67.136s-40.303 11.167-44.474 60.809l70.84 40.899c13.867 8.006 13.867 28.022 0 36.028l-.851.491c28.146 12.967 58.61 34.415 73.62 69.228V107.541c0-17.668-14.33-31.988-31.999-31.988z"
      style={{
        fill: 'url(#SVGID_00000106143452000242977440000012360510926221196437_)',
      }}
    />
  </Svg>
);