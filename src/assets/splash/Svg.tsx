import Svg, {Path, Circle, G, Ellipse} from 'react-native-svg';
type SvgProps = {
  class: string;
};
export const IntroductionSvg = (props: SvgProps) => (
  <Svg
      className={props.class}
      viewBox='-60 0 1000 500'
    {...props}>
    <Path
      fill="#EF4444"
      d="M823.09 288.48 681.93 661.07H163.76a41.26 41.26 0 0 1-40.33-32.55L40.48 245a45.37 45.37 0 0 1 28.4-52.08L337 92.26l9.46-3.55 10.81-4.07 127-47.7 4.05-1.51 29-10.89A42.54 42.54 0 0 1 559 31.27l74.62 60.25 8.38 6.76.38.31L664 116l143.85 116.22a49.68 49.68 0 0 1 15.24 56.26Z"
      data-primary="true"
    />
    <Path
      fill="#fff"
      d="M823.09 288.48 681.93 661.07H163.76a41.26 41.26 0 0 1-40.33-32.55L40.48 245a45.37 45.37 0 0 1 28.4-52.08L337 92.26l9.46-3.55 10.81-4.07 127-47.7 4.05-1.51 29-10.89A42.54 42.54 0 0 1 559 31.27l74.62 60.25 8.38 6.76.38.31L664 116l143.85 116.22a49.68 49.68 0 0 1 15.24 56.26Z"
      opacity={0.7}
    />
    <Path
      fill="#2f2e41"
      d="M568.85 494.5h125.33v57.1H568.85z"
      data-secondary="true"
    />
    <Path d="M568.85 494.5h125.33v57.1H568.85z" opacity={0.2} />
    <Path
      fill="#2f2e41"
      d="M570.27 453c-.23-6 1-7.08 1.71-8.19a5.28 5.28 0 0 0 1.2-3c0-1.32.29-7.07.34-8.91a51.09 51.09 0 0 0 .43-5.52v-.19a3.3 3.3 0 0 1 2.34-.54 2.68 2.68 0 0 1 .49.11 2.22 2.22 0 0 0 1.2 0l.55-.17a3.21 3.21 0 0 1 1.11-.2 2.42 2.42 0 0 1 .7.19 4.21 4.21 0 0 1-.11.6 53.1 53.1 0 0 0 .68 5.49c.14 1.85.65 7.55.73 8.89a5.38 5.38 0 0 0 1.34 3c.73 1.08 2 2 2.07 8.11s.26 19.62.26 19.62v2a6.34 6.34 0 0 1-1.09 3.76 3.1 3.1 0 0 1-2.37.94c-.92 0-2.25.07-3.59.1h-3.6a3.29 3.29 0 0 1-2.28-.69c-1.51-1.51-1.4-3.89-1.51-5.81 0-.01-.37-13.59-.6-19.59Z"
      data-secondary="true"
    />
    <Path
      fill="#2f2e41"
      d="m573.12 445.41.25-.4a5.76 5.76 0 0 0 1.14-3.29c0-.68.09-2.69.17-4.62 0-1.66.13-3.37.16-4.23v-.95l4.67-.09c0 .33.09.65.1.94 0 .86.2 2.56.35 4.21.17 1.93.33 3.92.38 4.62a5.76 5.76 0 0 0 1.28 3.24l.26.38.32.44c.63.84 1.51 2 1.51 7v6.57c0 3.87 0 7.73.18 11.59a7.71 7.71 0 0 1-.74 4.53c-.79 1.25-2.74 1.22-4 1.27a37.84 37.84 0 0 1-4.26 0 3.72 3.72 0 0 1-2-.74c-1-.85-.8-3.12-.83-4.26-.09-2.88-.16-5.76-.25-8.65-.11-3.32-.2-6.64-.32-10-.18-5 .63-6.16 1.22-7Z"
      data-secondary="true"
    />
    <Path
      fill="#EF4444"
      d="m580.76 467.2 4.53-.11-.29-13.69-4.53.12a6.84 6.84 0 0 0-6.69 7 6.85 6.85 0 0 0 7 6.68ZM574.48 428l5.21-.12a1 1 0 0 0 .89-1 1 1 0 0 0-.94-.95l-5.2.12a1 1 0 0 0-.89 1 1 1 0 0 0 .93.95Z"
      data-primary="true"
    />
    <Path
      fill="#2f2e41"
      d="M675.51 452.72c-.23-6 1-7.08 1.71-8.2a5.23 5.23 0 0 0 1.2-3c0-1.31.29-7.06.34-8.9a51.07 51.07 0 0 0 .43-5.53v-.18a3.3 3.3 0 0 1 2.34-.54 3.86 3.86 0 0 1 .49.09 2 2 0 0 0 1.2 0 2.64 2.64 0 0 0 .55-.15 3 3 0 0 1 1.11-.2 2.77 2.77 0 0 1 .7.18 1.61 1.61 0 0 1-.09.61 44 44 0 0 0 .68 5.49c.12 1.84.65 7.55.71 8.89a5.25 5.25 0 0 0 1.34 3c.72 1.09 2 2 2.07 8.12s.25 19.63.25 19.63v2a6.3 6.3 0 0 1-1.08 3.76 3.13 3.13 0 0 1-2.37.93l-3.59.11h-3.6a3.3 3.3 0 0 1-2.28-.7c-1.51-1.51-1.4-3.89-1.51-5.81 0 .04-.37-13.5-.6-19.6Z"
      data-secondary="true"
    />
    <Path
      fill="#2f2e41"
      d="m678.42 445.19.25-.41a5.74 5.74 0 0 0 1.14-3.29c0-.69.09-2.69.17-4.62.07-1.66.13-3.37.16-4.23v-.95l4.67-.1c0 .34.09.66.1 1 0 .86.22 2.56.35 4.21.17 1.93.33 3.92.38 4.6a5.63 5.63 0 0 0 1.28 3.25c.08.14.17.26.26.39l.32.44c.63.84 1.51 2 1.51 7V459c0 3.87.07 7.73.18 11.6a7.7 7.7 0 0 1-.73 4.53c-.8 1.25-2.75 1.22-4 1.26a33.64 33.64 0 0 1-4.26 0 3.62 3.62 0 0 1-2-.72c-1-.85-.8-3.13-.83-4.26-.09-2.88-.16-5.76-.25-8.65-.11-3.32-.2-6.64-.32-10-.18-5 .63-6.16 1.22-7 .15-.35.25-.35.4-.57Z"
      data-secondary="true"
    />
    <Path
      fill="#EF4444"
      d="m686 467 4.53-.1-.33-13.69-4.53.1a6.86 6.86 0 0 0-6.69 7 6.85 6.85 0 0 0 7 6.68ZM679.72 427.77l5.21-.12a1 1 0 0 0 .89-1 .93.93 0 0 0-.92-.95l-5.2.12a1 1 0 0 0-.89 1 1 1 0 0 0 .91.95Z"
      data-primary="true"
    />
    <Path
      fill="#e6e6e6"
      d="M658.18 444.7a4.73 4.73 0 0 0-4-1.5 4.2 4.2 0 0 0-7.25-3 6.6 6.6 0 0 0-2.31-2.58 3.58 3.58 0 0 0-3.33-.31 2.52 2.52 0 0 0-1.39 2.9 3.4 3.4 0 0 0-5 4 4.81 4.81 0 0 0-6 5.93l30.26-1.14a4.74 4.74 0 0 0-.98-4.3Z"
    />
    <Path
      fill="#e6e6e6"
      d="M628.75 444.57a5.33 5.33 0 0 0-5.23-.79 3.69 3.69 0 0 0-5.2-3.17 2.92 2.92 0 0 0-5.5 2 4.82 4.82 0 0 0-5.34 5.84l23.08 1.17a5.34 5.34 0 0 0-1.81-5.05Z"
    />
    <Path
      fill="#e6e6e6"
      d="M612.2 447.1a2.83 2.83 0 0 0-2.64-.92 3.13 3.13 0 0 0-4.16-1.18 2.13 2.13 0 1 0-4.26.12 2.05 2.05 0 0 0 .32 1 2.6 2.6 0 0 0-3.12 1.94 2.34 2.34 0 0 0-.07.45l14.37 1.28a2.83 2.83 0 0 0-.44-2.69Z"
    />
    <Path
      fill="#EF4444"
      d="M597.09 447.94s-2.15 30.68 28.26 30.68h12.89s23-3 23-30.67Z"
      data-primary="true"
    />
    <Path
      fill="#e6e6e6"
      d="M633.35 435.69a1.22 1.22 0 0 0-1.7-.17 1.37 1.37 0 0 0-.17.17 1.9 1.9 0 0 0-.11-2 1.66 1.66 0 0 0-1.84-.62 1.52 1.52 0 0 0-.92 1.77c-1.37-.42-1.93 1.07-1.73 1.85a1.51 1.51 0 0 0 1.92.93 1.66 1.66 0 0 0-.42 2.2 1.68 1.68 0 0 0 2.18.48 1.65 1.65 0 0 0 .53-2.17 2.12 2.12 0 0 0 2-.41 1.52 1.52 0 0 0 .26-2.03Z"
    />
    <Path
      d="M661.2 451.87c0 .23-14.29.4-31.92.4s-31.93-.17-31.93-.4 14.3-.39 31.93-.39 31.92.18 31.92.39ZM661.2 455.18c0 .21-14.25.39-31.83.39s-31.82-.18-31.82-.39 14.25-.39 31.82-.39 31.83.21 31.83.39Z"
      opacity={0.2}
    />
    <Path
      fill="#2f2e41"
      d="M558.97 492.16h11.58v140.32h-11.58zM692.43 492.16h11.58v140.32h-11.58z"
      data-secondary="true"
    />
    <Path
      fill="#2f2e41"
      d="M566.63 589.7h127.56v10.26H566.63zM546.04 478.61h168.73v19.56H546.04z"
      data-secondary="true"
    />
    <Path fill="#fff" d="M546.04 478.61h168.73v19.56H546.04z" opacity={0.2} />
    <Path
      fill="#2f2e41"
      d="M537.39 247.91h48.51v98.21h-48.51z"
      data-secondary="true"
    />
    <Path
      fill="#fff"
      d="M541.56 247.89a25.3 25.3 0 0 1 1.06 3.71 42 42 0 0 1 .79 10.49 132.49 132.49 0 0 1-1.81 15.51c-.85 5.79-1.75 12.27-.93 19s3 12.9 3.69 18.76a76.73 76.73 0 0 1 .34 15.6c-.3 4.44-.75 8-1.05 10.48-.16 1.2-.29 2.11-.37 2.84s-.15 1-.15 1a7.3 7.3 0 0 1 .1-1c.11-.66.19-1.64.33-2.85.28-2.46.7-6 1-10.47a77.91 77.91 0 0 0-.39-15.57c-.73-5.82-2.83-12-3.71-18.76s.09-13.27.95-19a136.47 136.47 0 0 0 1.85-15.48 42.78 42.78 0 0 0-.72-10.47 26.68 26.68 0 0 0-.69-2.77ZM548.23 346.16a10.73 10.73 0 0 0-.09-1.14c0-.37-.09-.84-.1-1.39s0-1.18 0-1.89a52.49 52.49 0 0 1 2.26-11.84c.68-2.46 1.5-5.12 2.23-8a42.72 42.72 0 0 0 1.41-9.41 21.72 21.72 0 0 0-.07-2.55 20.63 20.63 0 0 0-.31-2.58 42.11 42.11 0 0 1-.66-5.37 9.86 9.86 0 0 1 1.31-5.41 6 6 0 0 1 2-2.05 5.6 5.6 0 0 1 2.82-.76 7.33 7.33 0 0 1 5.29 2.18 10.75 10.75 0 0 1 2.66 4.91c.91 3.63.36 7.22.07 10.57-.65 6.7-1.23 12.69-1.73 17.82s-.9 9.13-1.17 12c-.15 1.39-.25 2.48-.34 3.26s-.13 1.14-.13 1.14a10.73 10.73 0 0 1 .09-1.14c.08-.75.17-1.88.3-3.27.26-2.87.64-7 1.11-12s1-11.12 1.67-17.83c.29-3.33.82-6.91-.08-10.46a10.62 10.62 0 0 0-2.6-4.82 7.16 7.16 0 0 0-5.1-2.11 5.56 5.56 0 0 0-2.7.74 5.86 5.86 0 0 0-2 2 9.74 9.74 0 0 0-1.28 5.28 39 39 0 0 0 .66 5.29 20.84 20.84 0 0 1 .29 2.61 21.9 21.9 0 0 1 .08 2.56 43 43 0 0 1-1.44 9.45c-.74 2.91-1.57 5.59-2.26 8a52.64 52.64 0 0 0-2.34 11.79v1.89c0 .55.05 1.06.07 1.39.07.75.08 1.14.08 1.14ZM576.78 249.08s-.14.37-.44 1.06-.74 1.74-1.25 3.11a30.72 30.72 0 0 0-1.49 5.07 15.93 15.93 0 0 0 0 6.94 25.9 25.9 0 0 0 3.7 7.6c.82 1.29 1.68 2.61 2.48 4.05a32.09 32.09 0 0 1 2 4.61 29.91 29.91 0 0 1 1.32 5.21 22.62 22.62 0 0 1 .3 5.51 7.54 7.54 0 0 1-2.38 5.12 4.83 4.83 0 0 1-2.69 1.2 5.05 5.05 0 0 1-2.92-.63 10 10 0 0 1-3.9-4.37c-.86-1.75-1.45-3.57-2.3-5.23a9.41 9.41 0 0 0-3.45-4.15c-1.45-1.06-3-1.91-4.41-2.92a16.84 16.84 0 0 1-5.65-7.87 47 47 0 0 1-2.11-8.26c-.46-2.56-.87-4.87-1.39-6.88a27.51 27.51 0 0 0-1.72-5 19.53 19.53 0 0 0-1.75-2.91l-.69-.93s.27.3.74.91a19 19 0 0 1 1.69 2.89 26.84 26.84 0 0 1 1.76 5c.53 2 1 4.31 1.43 6.88a45.64 45.64 0 0 0 2.12 8.21 16.4 16.4 0 0 0 5.6 7.77c1.38 1.06 2.94 1.84 4.41 2.92a10.69 10.69 0 0 1 3.57 4.23c.86 1.67 1.45 3.5 2.31 5.22a9.61 9.61 0 0 0 3.8 4.23 4.8 4.8 0 0 0 2.8.6 4.43 4.43 0 0 0 2.55-1.13 7.39 7.39 0 0 0 2.33-5 22.8 22.8 0 0 0-.3-5.47 30.24 30.24 0 0 0-3.29-9.68c-.78-1.43-1.63-2.76-2.46-4a26 26 0 0 1-3.69-7.66 16.2 16.2 0 0 1 0-7 31.29 31.29 0 0 1 1.54-5.08c1.13-2.73 1.83-4.17 1.83-4.17Z"
      opacity={0.35}
    />
    <Path
      fill="#fff"
      d="M568.49 247.39a11.68 11.68 0 0 0-1 1.06 9.45 9.45 0 0 0-1.76 3.7 29.07 29.07 0 0 0-.59 6.1 24.65 24.65 0 0 1-.35 3.64 6.48 6.48 0 0 1-1.6 3.57 2.09 2.09 0 0 1-1.92.53 2.59 2.59 0 0 1-1.52-1.25 10.58 10.58 0 0 1-.83-3.55c-.3-2.27-.58-4.34-.82-6.11s-.4-3.05-.54-4.12a8.29 8.29 0 0 0-.14-1.13v-.39l.08.39a7.48 7.48 0 0 0 .17 1.06l.61 4.11c.25 1.78.55 3.83.87 6.1a10.41 10.41 0 0 0 .82 3.48 2.41 2.41 0 0 0 1.38 1.15 1.85 1.85 0 0 0 1.73-.49 6.24 6.24 0 0 0 1.53-3.45 24.13 24.13 0 0 0 .36-3.59 27.61 27.61 0 0 1 .65-6.14 9.33 9.33 0 0 1 1.83-3.72 5.81 5.81 0 0 1 1.04-.95ZM582.26 247.49l-.44.92a19.14 19.14 0 0 0-1.06 2.72 26.33 26.33 0 0 0-.7 10.67 51.78 51.78 0 0 0 1.39 7.31c.66 2.6 1.48 5.29 2.25 8.26a52.5 52.5 0 0 1 1.71 9.3 27.7 27.7 0 0 1-1.06 10.08c-1.93 6.72-5.39 12.48-7.45 18.13a53.14 53.14 0 0 0-2.62 26.34c.21 1.26.39 2.23.54 2.89s.2 1 .2 1-.39-1.35-.83-3.87a52 52 0 0 1 2.55-26.43c2-5.68 5.5-11.44 7.4-18.13a27.7 27.7 0 0 0 1.06-10 53 53 0 0 0-1.7-9.26c-.76-2.92-1.58-5.66-2.23-8.26a52.14 52.14 0 0 1-1.37-7.34 26.36 26.36 0 0 1 .77-10.71 18 18 0 0 1 1.12-2.73ZM585.42 317.19a1.31 1.31 0 0 1 0 .28l-.17.79c-.16.68-.36 1.68-.58 2.91a72.52 72.52 0 0 0-1.06 9.74 71 71 0 0 0 .32 9.78c.13 1.25.26 2.27.35 2.95a4.8 4.8 0 0 0 .11.81v.28a1.38 1.38 0 0 1-.08-.27l-.15-.8c-.12-.69-.27-1.7-.42-3a64.25 64.25 0 0 1-.38-9.81 62.76 62.76 0 0 1 1.13-9.76c.25-1.22.47-2.22.65-2.89.07-.29.15-.55.21-.79a.9.9 0 0 1 .07-.22Z"
      opacity={0.35}
    />
    <Circle
      cx={561.85}
      cy={278.21}
      r={16.35}
      fill="#2f2e41"
      data-secondary="true"
    />
    <Circle cx={561.85} cy={278.21} r={16.35} opacity={0.3} />
    <Circle cx={561.86} cy={278.23} r={12.74} opacity={0.3} />
    <Path d="M558 278.27a3.84 3.84 0 1 1 3.84 3.83 3.84 3.84 0 0 1-3.84-3.83Z" />
    <Circle
      cx={561.85}
      cy={318.39}
      r={16.35}
      fill="#2f2e41"
      data-secondary="true"
    />
    <Circle cx={561.85} cy={318.39} r={16.35} opacity={0.3} />
    <Circle cx={561.86} cy={318.41} r={12.74} opacity={0.3} />
    <Path d="M558 318.45a3.84 3.84 0 1 1 3.84 3.83 3.84 3.84 0 0 1-3.84-3.83Z" />
    <Path
      fill="#2f2e41"
      d="M170.48 247.91h48.51v98.21h-48.51z"
      data-secondary="true"
    />
    <Path
      fill="#fff"
      d="M174.65 247.89a25.3 25.3 0 0 1 1.06 3.71 42 42 0 0 1 .79 10.49 132.49 132.49 0 0 1-1.81 15.51c-.85 5.79-1.75 12.27-.93 19s3 12.9 3.69 18.76a76.73 76.73 0 0 1 .34 15.6c-.3 4.44-.75 8-1 10.48-.16 1.2-.29 2.11-.37 2.84s-.15 1-.15 1a7.3 7.3 0 0 1 .1-1c.11-.66.19-1.64.33-2.85.28-2.46.7-6 1-10.47a77.91 77.91 0 0 0-.39-15.57c-.73-5.82-2.83-12-3.71-18.76s.09-13.27.95-19a136.47 136.47 0 0 0 1.85-15.48 42.78 42.78 0 0 0-.72-10.47 26.68 26.68 0 0 0-.69-2.77ZM181.32 346.16a10.73 10.73 0 0 0-.09-1.14c0-.37-.09-.84-.1-1.39s0-1.18 0-1.89a52.49 52.49 0 0 1 2.26-11.84c.68-2.46 1.5-5.12 2.23-8a42.72 42.72 0 0 0 1.41-9.41 21.72 21.72 0 0 0-.07-2.55 20.63 20.63 0 0 0-.31-2.58A42.11 42.11 0 0 1 186 302a9.86 9.86 0 0 1 1.31-5.41 6 6 0 0 1 2-2.05 5.6 5.6 0 0 1 2.82-.76 7.33 7.33 0 0 1 5.29 2.18 10.75 10.75 0 0 1 2.66 4.91c.91 3.63.36 7.22.07 10.57-.65 6.7-1.23 12.69-1.73 17.82s-.9 9.13-1.17 12c-.15 1.39-.25 2.48-.34 3.26s-.13 1.14-.13 1.14a10.73 10.73 0 0 1 .09-1.14c.08-.75.17-1.88.3-3.27.26-2.87.64-7 1.11-12s1-11.12 1.67-17.83c.29-3.33.82-6.91-.08-10.46a10.62 10.62 0 0 0-2.6-4.82 7.16 7.16 0 0 0-5.1-2.11 5.56 5.56 0 0 0-2.7.74 5.86 5.86 0 0 0-2 2 9.74 9.74 0 0 0-1.28 5.28 39 39 0 0 0 .66 5.29 20.84 20.84 0 0 1 .29 2.61 21.9 21.9 0 0 1 .08 2.56 43 43 0 0 1-1.44 9.45c-.74 2.91-1.57 5.59-2.26 8a52.64 52.64 0 0 0-2.34 11.79v1.89c0 .55 0 1.06.07 1.39.06.74.07 1.13.07 1.13ZM209.87 249.08s-.14.37-.44 1.06-.74 1.74-1.25 3.11a30.72 30.72 0 0 0-1.49 5.07 15.93 15.93 0 0 0 0 6.94 25.9 25.9 0 0 0 3.7 7.6c.82 1.29 1.68 2.61 2.48 4.05a32.09 32.09 0 0 1 2 4.61 29.91 29.91 0 0 1 1.32 5.21 22.62 22.62 0 0 1 .3 5.51 7.51 7.51 0 0 1-2.39 5.12 4.77 4.77 0 0 1-2.68 1.2 5.05 5.05 0 0 1-2.92-.63 10 10 0 0 1-3.9-4.37c-.86-1.75-1.45-3.57-2.3-5.23a9.41 9.41 0 0 0-3.45-4.15c-1.45-1.06-3-1.91-4.41-2.92a16.84 16.84 0 0 1-5.65-7.87 47 47 0 0 1-2.11-8.26c-.46-2.56-.87-4.87-1.39-6.88a27.51 27.51 0 0 0-1.72-5 19.53 19.53 0 0 0-1.75-2.91l-.69-.93s.27.3.74.91a19 19 0 0 1 1.69 2.89 26.84 26.84 0 0 1 1.76 5c.53 2 1 4.31 1.43 6.88a45.64 45.64 0 0 0 2.12 8.21 16.4 16.4 0 0 0 5.6 7.77c1.38 1.06 2.94 1.84 4.41 2.92a10.69 10.69 0 0 1 3.57 4.23c.86 1.67 1.45 3.5 2.31 5.22a9.61 9.61 0 0 0 3.8 4.23 4.8 4.8 0 0 0 2.8.6 4.43 4.43 0 0 0 2.55-1.13 7.39 7.39 0 0 0 2.33-5 22.8 22.8 0 0 0-.3-5.47 30.24 30.24 0 0 0-3.29-9.68c-.78-1.43-1.63-2.76-2.46-4a26 26 0 0 1-3.69-7.66 16.2 16.2 0 0 1 0-7 31.29 31.29 0 0 1 1.54-5.08c1.13-2.73 1.83-4.17 1.83-4.17Z"
      opacity={0.35}
    />
    <Path
      fill="#fff"
      d="M201.58 247.39a10.51 10.51 0 0 0-1.05 1.06 9.45 9.45 0 0 0-1.76 3.7 29.07 29.07 0 0 0-.59 6.1 24.65 24.65 0 0 1-.35 3.64 6.48 6.48 0 0 1-1.6 3.57 2.09 2.09 0 0 1-1.92.53 2.59 2.59 0 0 1-1.52-1.25 10.58 10.58 0 0 1-.83-3.55c-.3-2.27-.58-4.34-.82-6.11s-.4-3.05-.54-4.12a8.29 8.29 0 0 0-.14-1.13v-.39l.08.39a7.48 7.48 0 0 0 .17 1.06l.61 4.11c.25 1.78.55 3.83.87 6.1a10.41 10.41 0 0 0 .82 3.48 2.41 2.41 0 0 0 1.38 1.15 1.85 1.85 0 0 0 1.73-.49 6.24 6.24 0 0 0 1.53-3.45 24.13 24.13 0 0 0 .36-3.59 28.21 28.21 0 0 1 .64-6.14 9.49 9.49 0 0 1 1.84-3.72 5.81 5.81 0 0 1 1.09-.95ZM215.35 247.49l-.44.92a19.14 19.14 0 0 0-1.06 2.72 26.33 26.33 0 0 0-.7 10.67 51.78 51.78 0 0 0 1.39 7.31c.66 2.6 1.48 5.29 2.25 8.26a52.5 52.5 0 0 1 1.71 9.3 27.7 27.7 0 0 1-1.06 10.08c-1.93 6.72-5.39 12.48-7.45 18.13a53.14 53.14 0 0 0-2.62 26.34c.21 1.26.39 2.23.54 2.89s.2 1 .2 1-.39-1.35-.83-3.87a52 52 0 0 1 2.55-26.43c2-5.68 5.5-11.44 7.4-18.13a27.7 27.7 0 0 0 1.06-10 53 53 0 0 0-1.7-9.26c-.76-2.92-1.58-5.66-2.23-8.26a52.14 52.14 0 0 1-1.37-7.34 26.36 26.36 0 0 1 .77-10.71 18 18 0 0 1 1.12-2.73ZM218.51 317.19a1.31 1.31 0 0 1 0 .28l-.17.79c-.16.68-.36 1.68-.58 2.91a72.52 72.52 0 0 0-1.06 9.74 71 71 0 0 0 .32 9.78c.13 1.25.26 2.27.35 2.95a4.8 4.8 0 0 0 .11.81v.28a1.38 1.38 0 0 1-.08-.27l-.15-.8c-.12-.69-.27-1.7-.42-3a64.25 64.25 0 0 1-.38-9.81 62.76 62.76 0 0 1 1.13-9.76c.25-1.22.47-2.22.65-2.89.07-.29.15-.55.21-.79a.9.9 0 0 1 .07-.22Z"
      opacity={0.35}
    />
    <Circle
      cx={194.94}
      cy={278.21}
      r={16.35}
      fill="#2f2e41"
      data-secondary="true"
    />
    <Circle cx={194.94} cy={278.21} r={16.35} opacity={0.3} />
    <Circle cx={194.95} cy={278.23} r={12.74} opacity={0.3} />
    <Path d="M191.09 278.27a3.84 3.84 0 1 1 3.84 3.83 3.84 3.84 0 0 1-3.84-3.83Z" />
    <Circle
      cx={194.94}
      cy={318.39}
      r={16.35}
      fill="#2f2e41"
      data-secondary="true"
    />
    <Circle cx={194.94} cy={318.39} r={16.35} opacity={0.3} />
    <Circle cx={194.95} cy={318.41} r={12.74} opacity={0.3} />
    <Path d="M191.09 318.45a3.84 3.84 0 1 1 3.84 3.83 3.84 3.84 0 0 1-3.84-3.83Z" />
    <Path fill="#3f4347" d="M235.53 192.16h289.46v201.67H235.53z" />
    <Path fill="#f5f5f5" d="M241.84 197.32H518.7v190.45H241.84z" />
    <Path
      fill="#e0e0e0"
      d="M341.11 197.32c.36.06 44.55 95.22 44.55 95.22l-.11-95.22Z"
    />
    <Path
      fill="#2e3135"
      d="M448 292.54s0-.34-.06-1.05 0-1.67-.14-3a62.3 62.3 0 0 0-66.8-58 61.39 61.39 0 0 0-8.33 1.17 66.5 66.5 0 0 0-8.33 2.37 62.24 62.24 0 0 0 0 117 64.89 64.89 0 0 0 8.33 2.38 63 63 0 0 0 8.33 1.17 62.37 62.37 0 0 0 66.8-58.05c.12-1.3.1-2.3.14-3l.06-1s0 1.38-.08 4a61.52 61.52 0 0 1-8.57 28 63.06 63.06 0 0 1-15.86 17.84 62.3 62.3 0 0 1-26.36 11.74 63.1 63.1 0 0 1-24.57-.25 66.22 66.22 0 0 1-8.39-2.38 62.72 62.72 0 0 1 0-117.91 68.42 68.42 0 0 1 8.39-2.38 63.83 63.83 0 0 1 24.56-.25 62.2 62.2 0 0 1 50.8 57.6c.13 2.63.08 4 .08 4Z"
    />
    <Path
      fill="#2e3135"
      d="M440.59 292.35s0-.29-.06-.88-.1-1.48-.17-2.62c0-.58-.06-1.21-.11-1.92s-.22-1.47-.35-2.31-.26-1.72-.41-2.67a10.4 10.4 0 0 0-.32-1.47c-.12-.5-.26-1.06-.4-1.53a52.12 52.12 0 0 0-6.07-14.63 54.7 54.7 0 0 0-13.94-15.56l-2.37-1.76c-.84-.55-1.72-1.05-2.58-1.58s-1.73-1.06-2.68-1.55l-2.84-1.36c-.48-.23-1-.47-1.45-.69l-1.51-.56-3.09-1.12c-1.06-.35-2.11-.57-3.24-.87a30.89 30.89 0 0 0-3.3-.75 52.3 52.3 0 0 0-6.94-.8c-1.18 0-2.37-.16-3.56-.14l-3.63.19a9.49 9.49 0 0 0-1.84.12l-1.82.27c-1.23.21-2.46.35-3.69.61a56.48 56.48 0 0 0-7.31 2.11l-1.82.67c-.29.1-.61.21-.9.33l-.88.43-3.57 1.69c-1.15.64-2.26 1.37-3.4 2-.56.36-1.16.67-1.69 1.06l-1.65 1.3a60.24 60.24 0 0 0-6.22 5.28l-2.78 3.07-.7.77-.63.84-1.22 1.68-1.27 1.69-1.05 1.8-1.06 1.82-.55.91c-.17.3-.32.63-.48 1-.61 1.29-1.23 2.57-1.85 3.87l-1.49 4.05a54.35 54.35 0 0 0 0 34.56l1.48 4.06 1.86 3.86.47 1 .56.91 1.06 1.81 1.05 1.81 1.26 1.68 1.26 1.68.62.84.71.77 2.78 3.07a60.24 60.24 0 0 0 6.22 5.28l1.61 1.22c.54.4 1.13.71 1.69 1.06 1.15.67 2.26 1.4 3.41 2l3.55 1.7.87.42c.3.13.61.23.91.34l1.82.68a58.11 58.11 0 0 0 7.31 2.11c1.23.26 2.46.4 3.69.6l1.83.28c.6.08 1.21.07 1.83.12l3.62.19c1.2 0 2.39-.1 3.58-.14a51.81 51.81 0 0 0 6.92-.8 29 29 0 0 0 3.32-.76c1.06-.29 2.18-.51 3.23-.86l3.09-1.12 1.52-.56 1.45-.69 2.84-1.37c.95-.43 1.79-1.05 2.68-1.54s1.74-1.06 2.57-1.58l2.38-1.77a54.85 54.85 0 0 0 13.95-15.55 52.17 52.17 0 0 0 6.09-14.63c.14-.53.28-1.06.41-1.53a10.37 10.37 0 0 0 .31-1.47c.15-.95.29-1.84.42-2.68s.27-1.59.34-2.3.08-1.34.11-1.93c.07-1.13.13-2 .17-2.61l.06-.89v.89c0 .58-.06 1.48-.1 2.62 0 .59-.06 1.23-.09 1.94s-.2 1.47-.32 2.3-.25 1.74-.4 2.7a9.1 9.1 0 0 1-.29 1.47c-.13.5-.27 1.06-.39 1.54a52.3 52.3 0 0 1-6 14.72 54.78 54.78 0 0 1-14 15.73l-2.44 1.68c-.84.56-1.73 1.06-2.59 1.61a24.72 24.72 0 0 1-2.7 1.57l-2.86 1.38-1.45.7-1.54.56-3.1 1.14c-1.06.35-2.12.58-3.26.88a27.35 27.35 0 0 1-3.34.76 48.46 48.46 0 0 1-7 .82c-1.2.06-2.39.17-3.61.15l-3.66-.18a10.39 10.39 0 0 1-1.84-.11l-1.85-.28c-1.22-.2-2.48-.35-3.72-.6a57.81 57.81 0 0 1-7.4-2.12l-1.84-.67c-.31-.12-.61-.21-.92-.34l-.89-.43-3.57-1.72c-1.16-.63-2.29-1.37-3.45-2.05-.56-.37-1.17-.68-1.71-1.06l-1.63-1.22a61 61 0 0 1-6.28-5.29l-2.81-3.1-.71-.78-.64-.84-1.21-1.65-1.26-1.7-1.09-1.9-1.06-1.84-.56-.92-.48-1-1.87-3.91c-.51-1.36-1.06-2.72-1.51-4.1a54.82 54.82 0 0 1 0-34.89c.5-1.38 1-2.74 1.5-4.11l1.88-3.9c.16-.31.31-.64.48-1l.55-.92 1.07-1.84 1.11-1.82 1.28-1.7 1.25-1.69.65-.85.7-.77 2.82-3.1a61.88 61.88 0 0 1 6.27-5.28l1.64-1.23c.54-.4 1.14-.71 1.7-1.06 1.17-.68 2.29-1.42 3.45-2.05l3.57-1.71.89-.44.92-.33 1.84-.67a57.81 57.81 0 0 1 7.4-2.12c1.24-.25 2.5-.39 3.72-.59l1.86-.28c.61-.08 1.22-.08 1.83-.12l3.66-.18c1.22 0 2.41.11 3.61.15a51.26 51.26 0 0 1 7 .82 29.34 29.34 0 0 1 3.34.76c1.06.3 2.2.53 3.26.88l3.09 1.14 1.54.56 1.46.7 2.86 1.39c.95.44 1.8 1.06 2.69 1.56s1.75 1.06 2.59 1.61l2.39 1.79a54.89 54.89 0 0 1 14 15.58 52 52 0 0 1 6 14.73l.41 1.55a10.33 10.33 0 0 1 .29 1.47c.15 1 .28 1.86.4 2.69s.26 1.6.32 2.31.06 1.35.08 1.93c0 1.14.09 2 .11 2.62s-.06 1-.06 1Z"
    />
    <Path
      fill="#2e3135"
      d="M518.69 292.54c0 .15-62 .28-138.42.28s-138.43-.13-138.43-.28 62-.27 138.43-.27 138.42.12 138.42.27Z"
    />
    <Path
      fill="#2e3135"
      d="M385.55 387.77c-.14 0-.27-42.16-.27-94.1s.13-94.11.27-94.11.28 42.14.28 94.11-.13 94.1-.28 94.1Z"
    />
    <Path
      fill="#2f2e41"
      d="M388.58 269.1v44.78h-6.35v-39.17h-10.1v-5.61Z"
      data-secondary="true"
    />
    <Path
      fill="#EF4444"
      d="M127.26 473a16 16 0 0 1-1.35-4.23 63.7 63.7 0 0 0-7.61-20.92c-8.65-14.55-24.94-37.92-48.08-54.07 0 0-2-1.8-11.55-6 0 0-12.24-2.69-5.06-5 0 0 28.32-6 34.14 9 0 0 3.1 12.34 5 8.94 0 0 2.94-1.28-2.35-12.92 0 0 19 4.23 18 13.75 0 0 0 13.75 2.64 6.34l.53-8.45s9.26.14 9.61 13.83a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-7.49s35.54 15.86 26.23 52.87a33.4 33.4 0 0 1-11.69 16.87 7 7 0 0 1-10.46-2.52Z"
      data-primary="true"
    />
    <Path
      d="M127.26 473a16 16 0 0 1-1.35-4.23 63.7 63.7 0 0 0-7.61-20.92c-8.65-14.55-24.94-37.92-48.08-54.07 0 0-2-1.8-11.55-6 0 0-12.24-2.69-5.06-5 0 0 28.32-6 34.14 9 0 0 3.1 12.34 5 8.94 0 0 2.94-1.28-2.35-12.92 0 0 19 4.23 18 13.75 0 0 0 13.75 2.64 6.34l.53-8.45s9.26.14 9.61 13.83a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-7.49s35.54 15.86 26.23 52.87a33.4 33.4 0 0 1-11.69 16.87 7 7 0 0 1-10.46-2.52Z"
      opacity={0.2}
    />
    <Path
      fill="#2f2e41"
      d="M127.93 535.8c0-.2-2.64-21.29 2.9-49.46 5.11-26 18.4-63.57 52.69-94.8l.71.79c-34.08 31-47.28 68.36-52.36 94.21-5.51 28-2.92 48.92-2.89 49.13Z"
      data-secondary="true"
    />
    <Path
      fill="#EF4444"
      d="M136.36 536.16c4-5.53 18.64-20 64.61-26.78 0 0-2.33-8.12-9.25-9.22a9.63 9.63 0 0 0-8.17 2.77l-4.72 4.65a1.18 1.18 0 0 1-1.47.15 1.18 1.18 0 0 1-.21-1.79l4.85-5.17s-10.6-6.19-14.62 2.76l-2.14 4.16a1.33 1.33 0 0 1-2.12.33 1.33 1.33 0 0 1-.1-1.75l4.36-5.5s-48.44-4.16-42.1 32.85a9 9 0 0 0 1.7 3 6 6 0 0 0 9.38-.46Z"
      data-primary="true"
    />
    <Path
      d="M136.36 536.16c4-5.53 18.64-20 64.61-26.78 0 0-2.33-8.12-9.25-9.22a9.63 9.63 0 0 0-8.17 2.77l-4.72 4.65a1.18 1.18 0 0 1-1.47.15 1.18 1.18 0 0 1-.21-1.79l4.85-5.17s-10.6-6.19-14.62 2.76l-2.14 4.16a1.33 1.33 0 0 1-2.12.33 1.33 1.33 0 0 1-.1-1.75l4.36-5.5s-48.44-4.16-42.1 32.85a9 9 0 0 0 1.7 3 6 6 0 0 0 9.38-.46Z"
      opacity={0.2}
    />
    <Path
      fill="#f9b499"
      d="M438.27 434.23v-11.62l7.4-3.18 1.06 15.86-8.46-1.06z"
    />
    <Path
      fill="#EF4444"
      d="m416.06 455.38 2.12-16.92s-.83-10.71 16-8l36.44 3.16s3.63-.45 3.63 12.24v14.49l-29.61 8.84ZM253.11 453.08s.69-16.87 3.58-19.45 34.66-14.2 34.66-14.2 20.2-1.06 34.39 7.93c0 0 20.61 6.86 23.21 12.15 0 0 2.61 13.75 2.61 19 0 .04-78.48-9.85-98.45-5.43Z"
      data-primary="true"
    />
    <Path
      fill="none"
      stroke="red"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M534 530.18c-3.58 32-7.52 64.77-7.52 64.77h-309.2c-4.21-11.36-7.66-35.27-10.27-59.94 0 0 19.78 46.19 58.9 50.42 0 0 143.81 19 219.94-6.34 0 0 32.83-10.09 48.15-48.91Z"
    />
    <Path
      fill="#ccc"
      d="M208.82 604.47h331v14.81a10.57 10.57 0 0 1-10.57 10.57H219.39a10.57 10.57 0 0 1-10.57-10.57v-14.81Z"
    />
    <Path
      fill="#999"
      d="M208.82 611.49s-22.21 2.49-29.61-31.34l-9.52-29.61s-15.56-41.73 34-52l333.54 2s35.18 2.15 34.95 34a43.89 43.89 0 0 1-1.59 11L561 581.32a46.35 46.35 0 0 1-4.46 10.92c-3.34 5.87-9.08 13.87-16.73 16.83ZM208.82 660.11h30.93l12.42-14.4h237.91l9.66 14.4 31.58.4-7.95-30.67H219.99l-11.17 30.27z"
    />
    <Ellipse cx={431.92} cy={397.22} fill="#f9b499" rx={12.69} ry={24.32} />
    <Path
      fill="#2f2e41"
      d="M426 375.68s-12.08 2.51-13.14 12a14.17 14.17 0 0 0 6.34 12.89s-10.57-2.31-7.4-18.17c0 0 0-10.58 23.27-18 0 0 25.61-9.51 30.78 8.46 0 0 8.34 55 3.05 74 0 0-2.11 11.63-4.23 13.74 0 0-20.09 5.29-22.2-9.51a100 100 0 0 1 0-27.49s-1.06 8.45-8.46 8.45c0 0 .85-12 1-20.53a44.17 44.17 0 0 0-.19-5l-3-31.53s-4.23 7.8 0 24c.1.01-8.51-6.78-5.82-23.31Z"
      data-secondary="true"
    />
    <Path
      d="M453.07 366.56c9.57 12.4 14.12 34.73 16.6 50.14.32 2.51.68 5 1 7.53-.52-2.48-1-5-1.48-7.44-1.44-7.14-3.15-15.14-5.09-22.16-2.71-9.66-5.47-19.61-11-28.07ZM448.84 364.44c10 27 7.77 56.61 6.38 84.82l-.69 12.21.18-12.23c.63-28.25 2.78-57.48-5.87-84.8ZM446.73 368.57q1 20.39 1 42.4c.05 16.6-.34 32.55-1 47.8l3.49 1.81s.78-84.71-3.49-92.01ZM434 432.11s11.28-18.56 10.4-38.88c0 0 2.29 17.74-1.94 30.43.04 0 .04 7.4-8.46 8.45Z"
      opacity={0.2}
    />
    <Ellipse
      cx={329.2}
      cy={383.35}
      fill="#f9b499"
      rx={26.78}
      ry={14.21}
      transform="rotate(-82.71 329.167 383.347)"
    />
    <Path
      d="M345.24 360.34a27.84 27.84 0 0 1-.44 3.75c-2.54-4.56-16.48-12.34-16.48-12.34 0-2.06 9.38 1.34 9.83 1.49l5.39 3.69a3.9 3.9 0 0 1 1.7 3.41Z"
      opacity={0.2}
    />
    <Path
      fill="#f9b499"
      d="M322.79 407.05v12.38c-6.57-3.18-24.82-6.21-24.82-6.21l4.37-16s13.8-1.58 21.73-5.29Z"
    />
    <Path
      fill="#f7a48b"
      d="M317.49 394.72s5.9-2.49 8.36-3.7c0 0 2.13 2.81 3.35 4.5 0 0-1.77 11.16 1.84 13.3 0 0-4.4 3.15-8.33 0l.08-11.6a13.66 13.66 0 0 1-5.3-2.5Z"
    />
    <Path
      fill="#2f2e41"
      d="M345.24 360.34a27.84 27.84 0 0 1-.44 3.75 29.89 29.89 0 0 1-1.94 6.26s-.47-1.38-1.16-4.17c0 0-2.52-.68-3.21 6.72 0 0-.48 3-1.27 5.88a23.91 23.91 0 0 0-.89 5.18 13.57 13.57 0 0 0 .43 4.8s-2.8 2.12-5.82-4.76l-3.59-.22c.09 8.77-3.28 8.15-3.28 8.15-7.4 4.23-21.74 5.29-21.74 5.29s-9-23-6.85-35.29l25.42-12.29s5-4.23 12 0l5.24 3.6 5.39 3.69a3.9 3.9 0 0 1 1.71 3.41Z"
      data-secondary="true"
    />
    <Ellipse
      cx={328.37}
      cy={386.78}
      fill="#f9b499"
      rx={5.77}
      ry={3.7}
      transform="rotate(-86.51 328.342 386.782)"
    />
    <Path
      fill="#2f2e41"
      d="m291.35 419.43 1.93-6.76s27.62 2.53 34 9.93l-1.5 4.76s-18.51-6.88-34.43-7.93Z"
      data-secondary="true"
    />
    <Path
      fill="#ccc"
      d="M539.78 471.24c0 5.79-2.79 32.08-5.8 58.94-3.58 32-7.52 64.77-7.52 64.77H217.28c-4.21-11.36-7.66-35.27-10.27-59.94-4-37.36-6-76.46-6-76.46H201c97.88-20.07 176.08 6.82 176.08 6.82 69.18-29.86 160.61 5.1 162.62 5.87Z"
    />
    <Path
      fill="#999"
      d="M539.74 471.23c-86.69-28.53-163.2-2.65-163.2-2.65-74.25-21.33-172.33-10.4-175.5-10 97.88-20.07 176.08 6.82 176.08 6.82 69.18-29.9 160.61 5.06 162.62 5.83Z"
    />
    <Path
      fill="#999"
      d="m372.18 467.38 2.12 124.9 6.21-124.9v-2.02l-4.16 1.27-4.17-.91v1.66z"
    />
    <Path
      fill="#EF4444"
      d="M397 456.43s-30.45 20.09-38.49 0c0 0-2.75-8.45 5.71-14.8 0 0 2.9-2.43 2-7.29a8.22 8.22 0 0 0-1.42-3.18c-1.32-1.93-3.5-6.69.48-13.85 0 0-7.21-2.17-6.75-8.87a13 13 0 0 1 1.46-4.87s-1.06-16.92 3.17-16.92c0 0 4.92 2.11 8.27 10.57a6.18 6.18 0 0 1 2-1c1.8-.58 4.82-.89 9 1 0 0 5.08-8.46 8.26-7.4a40.11 40.11 0 0 1-1.06 14.8s3.17 7.4-2.12 11.63a10.42 10.42 0 0 0 2.23 8s17.86 22.67 7.26 32.18Z"
      data-primary="true"
    />
    <Path
      fill="#2f2e41"
      d="M373.42 396.26c-.36 20.18-14.85 12.19-14.85 12.19a13 13 0 0 1 1.46-4.87s-1.06-16.92 3.17-16.92c0 0 4.92 2.11 8.27 10.57a6.18 6.18 0 0 1 1.95-.97Z"
      data-secondary="true"
    />
    <Path
      fill="#fff"
      d="M379.25 431.64a.56.56 0 0 1-.39-.17.52.52 0 0 1 0-.74c.19-.18 4.78-4.44 13.14-3.9a.53.53 0 0 1 .49.56.51.51 0 0 1-.56.49c-7.86-.51-12.3 3.58-12.34 3.62a.54.54 0 0 1-.34.14ZM381.17 439a.51.51 0 0 1-.42-.21.53.53 0 0 1 .1-.74c.3-.23 7.33-5.43 15-4.89a.53.53 0 0 1 .49.56.51.51 0 0 1-.57.49c-7.27-.55-14.21 4.63-14.28 4.68a.56.56 0 0 1-.32.11ZM385.62 446.75a.53.53 0 0 1-.49-.32.52.52 0 0 1 .28-.69c.42-.19 10.35-4.45 14.29-3.46a.53.53 0 0 1-.26 1c-3.59-.9-13.51 3.36-13.61 3.41a.52.52 0 0 1-.21.06Z"
    />
    <Path
      fill="#EF4444"
      d="M394 455.43a12.72 12.72 0 0 0-4.78 2.76 23.28 23.28 0 0 1-10.17 5c-3.58.72-7.76.74-11-1.63 0 0-14.2-13.75-18.52-6.28 0 0-5.16 11.85 15.36 13.89 0 0 21.61 1.87 30.92-10.87a1.83 1.83 0 0 0-1.81-2.87Z"
      data-primary="true"
    />
    <Path
      d="M394 455.43a12.72 12.72 0 0 0-4.78 2.76 23.28 23.28 0 0 1-10.17 5c-3.58.72-7.76.74-11-1.63 0 0-14.2-13.75-18.52-6.28 0 0-5.16 11.85 15.36 13.89 0 0 21.61 1.87 30.92-10.87a1.83 1.83 0 0 0-1.81-2.87Z"
      opacity={0.2}
    />
    <Path
      fill="#2f2e41"
      d="M151 536.54 142.2 614h-23.72l-8.69-70.82-.86-7.08a4.07 4.07 0 0 1 4-4.57h33.58a4.52 4.52 0 0 1 4.49 5.01Z"
      data-secondary="true"
    />
    <Path
      d="M151 536.54 142.2 614h-4.76v-60.8c-3.17-22.2-27.65-10-27.65-10l-.86-7.08a4.07 4.07 0 0 1 4-4.57h33.58a4.52 4.52 0 0 1 4.49 4.99Z"
      opacity={0.2}
    />
    <Path
      fill="#EF4444"
      d="M147.4 439.62s-6.26-11.73-2-31.83l5.29-22.2s9.52 25.45 0 43.39c0 0-2.53 5-2.32 8.84Z"
      data-primary="true"
    />
    <Path
      fill="#EF4444"
      d="M205.64 417.31s-25.35-6.9-55.5 17.17c0 0-2 3.65-3.4 6.46 0 0 4.18-3 12.21-2.65a43.42 43.42 0 0 0 9.45-.74c9.31-1.7 25.73-6.55 37.24-20.24ZM135 471.23s4.22-10.66 22.63-20.13c0 0 18-9.26 45.14-11.48 0 0-25 31.59-57.32 28.84a15.49 15.49 0 0 0-10.31 2.67ZM136.07 467.65s-15-11.22-4.44-59.86c0 0 16.28 28.79 4.44 59.86ZM129.09 500.89s7.52-27.3 51-33.24c.03 0-19.71 18.48-51 33.24ZM127.86 519.73s1.25-23.72 39.52-32.41c0 0-10.38 22-30.47 27.27a19.67 19.67 0 0 0-9.05 5.14ZM114.86 437.72s-8.36 47.1 14 63l.07-.05c-.51-.93-2.68-5.52-1.17-14.29.05.04 4.17-35.64-12.9-48.66Z"
      data-primary="true"
    />
    <Path
      fill="#EF4444"
      d="M102 473.35s1.06 9.52 2.12 20.09c0 0-.15 23 23.72 26.29 0 0-2.78-1.51-2.77-6.13a25.55 25.55 0 0 0-.81-6.92c-1.91-7.01-7.37-20.68-22.26-33.33ZM162.25 415.75s-14.76-24.87 8.5-48.14c0 0 7.31 22.25-8.5 48.14ZM177.85 397.7s.35-23.74 33.63-30.09c0 0-6.48 22.1-33.63 30.09ZM165 412.12s18.4-21.24 51.18-18.07c0 0-16.92 20.09-42.3 20.09-2.11 0-6.42-1.13-14.31 5.25Z"
      data-primary="true"
    />
    <G fill="#fff" opacity={0.4}>
      <Path d="M147.4 439.62s-6.26-11.73-2-31.83l5.29-22.2s9.52 25.45 0 43.39c0 0-2.53 5-2.32 8.84Z" />
      <Path d="M205.64 417.31s-25.35-6.9-55.5 17.17c0 0-2 3.65-3.4 6.46 0 0 4.18-3 12.21-2.65a43.42 43.42 0 0 0 9.45-.74c9.31-1.7 25.73-6.55 37.24-20.24ZM135 471.23s4.22-10.66 22.63-20.13c0 0 18-9.26 45.14-11.48 0 0-25 31.59-57.32 28.84a15.49 15.49 0 0 0-10.31 2.67ZM136.07 467.65s-15-11.22-4.44-59.86c0 0 16.28 28.79 4.44 59.86ZM129.09 500.89s7.52-27.3 51-33.24c.03 0-19.71 18.48-51 33.24ZM127.86 519.73s1.25-23.72 39.52-32.41c0 0-10.38 22-30.47 27.27a19.67 19.67 0 0 0-9.05 5.14ZM114.86 437.72s-8.36 47.1 14 63l.07-.05c-.51-.93-2.68-5.52-1.17-14.29.05.04 4.17-35.64-12.9-48.66Z" />
      <Path d="M102 473.35s1.06 9.52 2.12 20.09c0 0-.15 23 23.72 26.29 0 0-2.78-1.51-2.77-6.13a25.55 25.55 0 0 0-.81-6.92c-1.91-7.01-7.37-20.68-22.26-33.33ZM162.25 415.75s-14.76-24.87 8.5-48.14c0 0 7.31 22.25-8.5 48.14ZM177.85 397.7s.35-23.74 33.63-30.09c0 0-6.48 22.1-33.63 30.09ZM165 412.12s18.4-21.24 51.18-18.07c0 0-16.92 20.09-42.3 20.09-2.11 0-6.42-1.13-14.31 5.25Z" />
    </G>
  </Svg>
);
