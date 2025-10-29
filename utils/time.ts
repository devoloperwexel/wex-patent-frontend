/**
 * Converts an ISO 8601 date-time string into separate readable date and time strings.
 *
 * @param {string} isoString - An ISO 8601 date-time string (e.g., "2024-08-01T08:00:00Z").
 * @returns {Object} An object containing the formatted date and time strings.
 * @returns {string} return.formattedDate - The date portion in "YYYY-MM-DD" format.
 * @returns {string} return.formattedTime - The time portion in "HH:MM" format.
 *
 * @example
 * const isoString = "2024-08-01T08:00:00Z";
 * const { formattedDate, formattedTime } = formatISODateTime(isoString);
 * console.log(`Date: ${formattedDate}`); // Date: 2024-08-01
 * console.log(`Time: ${formattedTime}`); // Time: 08:00
 */
export function formatISODateTime(isoString?: string) {
  if (!isoString) {
    return { formattedDate: null, formattedTime: null };
  }
  const date = new Date(isoString);

  // Get the date parts
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Get the time parts
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDate = `${day}-${month}-${year}`;
  const formattedTime = `${hours}:${minutes}`;

  return { formattedDate, formattedTime };
}

export const getYesterdayDate = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, "0");
  const day = String(yesterday.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getTodayDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getNextDay = () => {
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);

  const year = nextDay.getFullYear();
  const month = String(nextDay.getMonth() + 1).padStart(2, "0");
  const day = String(nextDay.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * Calculates the time difference in minutes between today and the given ISO string.
 * @param isoString - The ISO date string to compare.
 * @returns The time difference in minutes. Returns null if the ISO string is invalid.
 */
export function getTimeDifferenceInMinutes(isoString: string): number | null {
  const inputDate = new Date(isoString);

  if (isNaN(inputDate.getTime())) {
    return null; // Return 0 for invalid dates
  }

  const today = new Date();
  const timeDifference = today.getTime() - inputDate.getTime();

  return timeDifference / (1000 * 60); // Convert milliseconds to minutes
}
