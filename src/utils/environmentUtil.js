import { BREAKPOINTS } from "../constants";

/**
 * @class
 */
class EnvironmentUtil {
  /**
   * returns true if window is defined else false
   * @returns {boolean}
   */
  isWindowDefined() {
    return typeof window !== `undefined`;
  }

  /**
   * returns true if browserWidth is less than 767px
   * @param {!number} browserWidth
   * @returns {boolean}
   */
  isMobile(browserWidth) {
    return browserWidth <= BREAKPOINTS.MOBILE;
  }

  /**
   * returns true if browserWidth is less than 991px
   * @param {!number} browserWidth
   * @returns {boolean}
   */
  isTablet(browserWidth) {
    return browserWidth <= BREAKPOINTS.TABLET && browserWidth >= BREAKPOINTS.MOBILE;
  }

  /**
   * returns true if browserWidth is more than or equal to 992px
   * @param {!number} browserWidth
   * @returns {boolean}
   */
  isDesktop(browserWidth) {
    return browserWidth >= BREAKPOINTS.DESKTOP;
  }

}

const environmentUtil = new EnvironmentUtil();

export { environmentUtil };
