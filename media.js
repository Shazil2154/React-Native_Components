/**
 * Problem: React Native accepts either percentages or
 * density-independent pixels (DP) for its styles.
 * Percentages work well on the web,
 * but they don't support all the style properties in React Native.
 * Only padding, margin, width, height, minWidth, minHeight,
 * maxWidth, maxHeight, flexBasis can have percentage values
 * according to this commit.
 * https://github.com/facebook/react-native/commit/3f49e743bea730907066677c7cbfbb1260677d11
 * Density independent pixels (DP) are different than traditional pixels.
 * The bigger the device, the more DP it has. However,
 * density-independent pixels (DP) vary from device to device,
 * so it cannot be directly used for creating a responsive layout.
 *
 * In order to make the app look good on phones, tablets,
 * and a variety of other devices, we need to scale all of our styles.
 *
 * And we use the following functions
 * scale, widthPercentageToDP and heightPercentageToDP
 */
import {
  Dimensions,
  PixelRatio,
} from 'react-native';

let {
  width: screenWidth,
  height: screenHeight,
} = Dimensions.get('window');
export const SCREEN_WIDTH = screenWidth;
export const SCREEN_HEIGHT = screenHeight;
export const DEVICES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
};
export const ORIENTATION = {
  LANDSCAPE: 'landscape',
  PORTRAIT: 'portrait',
  PORTRAITUPSIDEDOWN: 'portraitUpSideDown',
};
const iphone8Wscale = screenWidth / 375;
const iphone8Hscale = screenHeight / 667;
const iphone11Wscale = screenWidth / 414;
const iphone11Hscale = screenHeight / 896;
/**
 * Use iphone8Scale() function to scale your fonts,
 * margins and paddings w.r.t screen width and height
 * @param {number} size
 * pixel value to scale w.r.t screen dpi
 * @param {string} based
 * the value with respect to width or height
 * based = 'width' | 'height' default 'width',
 * https://github.com/NewBieBR/react-native-normalize/blob/master/src/index.ts
 */
export const iphone8Scale = (
  size,
  based = 'width',
) => {
  const newSize = (
    (based === 'height')
      ? (size * iphone8Hscale)
      : (size * iphone8Wscale)
  );
  if (screenWidth < 768) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return size * 1.273;
};
/**
 * Use iphone11Scale() function to scale your fonts,
 * margins and paddings w.r.t screen width and height
 * @param {number} size
 * pixel value to scale w.r.t screen dpi
 * @param {string} based
 * the value with respect to width or height
 * based = 'width' | 'height' default 'width',
 * https://github.com/NewBieBR/react-native-normalize/blob/master/src/index.ts
 * @param {function} accessibilityScaleFactor
 * Func  to get Font size by PixelRatio.
 * if accessibility is > 100% (1) than multiple font size with PixelRatio.
 * if accessibility is > 150% (1.5) than divide font size with PixelRatio + 1.8.

 */
export const iphone11Scale = (
  size,
  based = 'width',
  accessibilityScaleFactor,
) => {
  let newSize = (
    (based === 'height')
      ? (size * iphone11Hscale)
      : (size * iphone11Wscale)
  );
  if (screenWidth < 768) {
    if (accessibilityScaleFactor) {
      newSize = accessibilityScaleFactor(newSize);
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return size * 1.273;
};

/**
 * Use iphone11ScaleMarkdown() function to scale your fonts in markdown,
 * margins and paddings w.r.t screen width and height
 * @param {number} size
 * pixel value to scale w.r.t screen dpi
 */
export const iphone11ScaleMarkdown = (size) => {
  const fontScale = PixelRatio.getFontScale();
  return iphone11Scale(size, 'width', (size) => {
    if (fontScale >= 1) {
      if (fontScale > 1.5) {
        return size / fontScale + 1.8;
      }
      return size * fontScale;
    }
    return size;
  });
};
export const scale = iphone11Scale;
export const scaleMarkdown = iphone11ScaleMarkdown;
/**
 * Converts provided width percentage
 * to independent pixel (dp).
 * @param  {string} widthPercent The
 * percentage of screen's width
 * that UI element should cover
 * along with the percentage symbol (%).
 *
 * @return {number} The
 * calculated dp depending on current device's screen width.
 * https://github.com/marudy/react-native-responsive-screen/blob/master/index.js
 */
export const widthPercentageToDP = (widthPercent) => {
  // Parse string percentage input and convert it to number.
  const elemWidth = (
    (typeof widthPercent === 'number')
      ? widthPercent
      : parseFloat(widthPercent)
  );
  /**
   * Use PixelRatio.roundToNearestPixel method
   * in order to round the layout
   * size (dp) to the nearest one
   * that correspons to an integer number of pixels.
   * */
  return PixelRatio.roundToNearestPixel(screenWidth * (elemWidth / 100));
};
/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The
 * percentage of screen's height
 * that UI element should cover
 * along with the percentage symbol (%).
 * @return {number} The
 * calculated dp depending on
 * current device's screen height.
 */
export const heightPercentageToDP = (heightPercent) => {
  // Parse string percentage input and convert it to number.
  const elemHeight = (
    (typeof heightPercent === 'number')
      ? heightPercent
      : parseFloat(heightPercent)
  );
  /**
   * Use PixelRatio.roundToNearestPixel method
   * in order to round the layout
   * size (dp) to the nearest one
   * that correspons to an integer number of pixels.
  * */
  return PixelRatio.roundToNearestPixel(screenHeight * (elemHeight / 100));
};
/**
 * Event listener function that detects orientation
 * change (every time it occurs) and triggers
 * screen rerendering. It does that, by changing the
 * state of the screen where the function is
 * called. State changing occurs for a new state
 * variable with the name 'orientation' that will
 * always hold the current value of the orientation
 * after the 1st orientation change.
 * Invoke it inside the screen's constructor or in
 * componentDidMount lifecycle method.
 * @param {object} that Screen's
 * class component this variable. The function needs it to
 * invoke setState method and trigger screen rerender (this.setState()).
 */
export const listenOrientationChange = (setOrientation) => {
  Dimensions.addEventListener('change', (newDimensions) => {
    // Retrieve and save new dimensions
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;
    // Trigger screen's rerender with a state update of the orientation variable
    setOrientation((screenWidth < screenHeight) ? ORIENTATION.PORTRAIT : ORIENTATION.LANDSCAPE);
  });
};
/**
 * Wrapper function that removes orientation change
 * listener and should be invoked in
 * componentWillUnmount lifecycle method of
 * every class component (UI screen) that
 * listenOrientationChange function has been invoked.
 * This should be done in order to
 * avoid adding new listeners every
 * time the same component is re-mounted.
 */
export const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};
