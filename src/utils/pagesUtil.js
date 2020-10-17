
/**
 * returns the name of the page ex: 'careers' 
 * @param {string} pathname
 * @returns {string} The page name.
 * @private 
 */
const getPageName = (pathname) => {
  return pathname.split('/').slice(-2, -1)[0]
}

/**
 * Returns true if portfolioDetails page else false
 * @param {string} pathname 
 * @returns {boolean} True/False
 * @public
 */
export const isPortfolioDetails = (pathname) => getPageName(pathname) === 'portfolioDetails';