import { ViewStyle } from 'react-native';

interface ShimmerProps {
  /**
   * The style object to be applied to the Shimmer component.
   * This extends ViewStyle to allow all valid React Native View styles.
   */
  style?: ViewStyle | (ViewStyle | { flex: number; } | undefined)[];
}

export default ShimmerProps;