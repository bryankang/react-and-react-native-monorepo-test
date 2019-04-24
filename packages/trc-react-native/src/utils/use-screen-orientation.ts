import { useState, useRef, useEffect } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

// export function useScreenOrientation() {
//   const [isPortrait, setIsPortrait] = useState(true);

//   const dimensionsChangeListener = useRef((dimensions: { window: ScaledSize, screen: ScaledSize }) => {
//     const width = dimensions.screen.width;
//     const height = dimensions.screen.height;
//     const isNextPortrait = height >= width;

//     setIsPortrait(isNextPortrait);
//     console.log(isNextPortrait)
//   });

//   useEffect(() => {
//     Dimensions.addEventListener("change", dimensionsChangeListener.current);
//     console.log('ue', isPortrait)

//     return () => Dimensions.removeEventListener("change", dimensionsChangeListener.current);
//   }, []);

//   return isPortrait;
// }


export function useScreenOrientation() {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const isPortrait = height >= width;

  return isPortrait;
}
