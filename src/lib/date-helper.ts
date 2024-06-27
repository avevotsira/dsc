/**
 * Formats a date string into a localized date string.
 *
 * @param {string | Date} date - The date to format.
 * @param {string} lang - The language code to use for localization.
 * @return {string} The formatted date string.
 */
export function formatDate(date: string | Date, lang: string): string {
  return new Date(date).toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
