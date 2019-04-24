import { Dimensions } from 'react-native';

export function isScreenPortrait() {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const isScreenPortrait = height >= width;

  return isScreenPortrait;
}
