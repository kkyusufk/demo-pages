
/**
 * @class 
 */
class EnvironmentUtil {
  /**
   * returns true if window is defined else false
   */
  isWindowDefined () { 
    return typeof window !== `undefined`;
  }
}

const environmentUtil = new EnvironmentUtil();

export { environmentUtil };