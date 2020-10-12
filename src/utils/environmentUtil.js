import { BREAKPOINTS } from "../constants";

/**
 * @class
 */
class EnvironmentUtil {
  /**
   * returns true if window is defined else false
   */
  isWindowDefined() {
    return typeof window !== `undefined`;
  }

  /**
   * returns true if browserWidth is less than 576px
   * @param {number} browserWidth
   */
  isMobile(browserWidth = window.innerWidth) {
    return browserWidth <= BREAKPOINTS.MOBILE;
  }
}

const environmentUtil = new EnvironmentUtil();

export { environmentUtil };
