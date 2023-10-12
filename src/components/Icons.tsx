import { Path,Svg } from "react-native-svg"
export function IconStar({className}:{className:string}){
    return (
      <Svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={'#ef4444'}
        className={className}>
        <Path d="M12.8649 2.99628C12.4796 2.33213 11.5204 2.33213 11.1351 2.99628L8.42101 7.67359C8.23064 8.00168 7.90159 8.22557 7.52653 8.28222L2.44021 9.05044C1.58593 9.17947 1.28627 10.2581 1.95158 10.8093L5.74067 13.9485C6.09141 14.2391 6.25633 14.6975 6.17113 15.1449L5.17996 20.35C5.02327 21.1729 5.88706 21.8122 6.62821 21.4219L11.4176 18.9001C11.7821 18.7082 12.2178 18.7082 12.5824 18.9001L17.3718 21.4219C18.1129 21.8122 18.9767 21.1729 18.82 20.35L17.8289 15.1449C17.7437 14.6975 17.9086 14.2391 18.2593 13.9485L22.0484 10.8093C22.7137 10.2581 22.4141 9.17947 21.5598 9.05044L16.4735 8.28222C16.0984 8.22557 15.7694 8.00168 15.579 7.67359L12.8649 2.99628Z" />
      </Svg>
    )
}
type SvgProps={
  classProp:string
  styleProp?:object
}
export const SvgComponentTrailerIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#ef4444"
    stroke="currentColor"
    strokeWidth={0}
    style={props.styleProp}
    viewBox="0 0 448 512"
    className={props.classProp}
    {...props}>
    <Path
      stroke="none"
      d="M424.4 214.7 72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
    />
  </Svg>
)
export const SvgComponentMovieIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#000"
    stroke="currentColor"
    strokeWidth={0}
    style={props.styleProp}
    viewBox="0 0 24 24"
    className={props.classProp}
    {...props}>
    <Path
      stroke="none"
      d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM9.536 9 6.869 5h2.596l2.667 4H9.536zm5 0-2.667-4h2.596l2.667 4h-2.596zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z"
    />
    <Path stroke="none" d="m10 18 5.5-3-5.5-3z" />
  </Svg>
)
