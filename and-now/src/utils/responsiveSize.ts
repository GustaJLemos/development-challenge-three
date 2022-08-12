import { rem } from "responsive-native"

export const responsiveSize = (value: number) => {
  return rem({size: value, baseFontSize: 10})
}