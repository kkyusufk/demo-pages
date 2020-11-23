/**
 * appending a null value at the beginning to make sure Jan is at index 1, Feb at 2 and so on.
 * @type Array<strings>
 */
const months = [
  "null",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * returns the date in this format date month year
 * @example
 *  formatDate('04/02/2021') => 04 Feb 2021
 * @param {string} date
 */
export const formatDate = (date) => {
  const dateArray = date.split("/");
  const monthName = months[parseInt(dateArray[1])];
  dateArray[1] = monthName;
  return dateArray.join(" ");
};
