// Define a mapping between Latin and Khmer numerals
const khmerNumerals: Record<string, string> = {
  "0": "០",
  "1": "១",
  "2": "២",
  "3": "៣",
  "4": "៤",
  "5": "៥",
  "6": "៦",
  "7": "៧",
  "8": "៨",
  "9": "៩",
};

// Function to convert Latin numerals to Khmer numerals
function toKhmerNumerals(str: string): string {
  return str.replace(/\d/g, (match) => khmerNumerals[match] || match);
}

/**
 * Formats a date string into a localized date string with Khmer numerals.
 *
 * @param {string | Date} date - The date to format.
 * @param {string} lang - The language code to use for localization.
 * @return {string} The formatted date string with Khmer numerals.
 */
export function formatDate(date: string | Date, lang: string): string {
  const formattedDate = new Date(date).toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // Apply Khmer numerals only when the language code is 'km'
  return lang === "km" ? toKhmerNumerals(formattedDate) : formattedDate;
}

/**
 * Converts a date string or Date object to an ISO string.
 *
 * @param {string | Date} date - The date to convert.
 * @return {string} The ISO string representation of the date.
 */
export function toISOString(date: string | Date): string {
  return new Date(date).toISOString();
}
