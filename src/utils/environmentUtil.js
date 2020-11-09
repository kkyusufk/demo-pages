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
    return (
      browserWidth <= BREAKPOINTS.TABLET && browserWidth >= BREAKPOINTS.MOBILE
    );
  }

  /**
   * returns true if browserWidth is more than or equal to 992px
   * @param {!number} browserWidth
   * @returns {boolean}
   */
  isDesktop(browserWidth) {
    return browserWidth >= BREAKPOINTS.DESKTOP;
  }

  /**
   * returns true if element is in viewport, else false;
   * @param {DomElement} el
   * @returns {boolean}
   */
  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    console.log(rect);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    );
  }
}

const environmentUtil = new EnvironmentUtil();

export { environmentUtil };
