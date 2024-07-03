/**
 * Replaces every separator (spaces, hyphens, and underscores) with a space
 * and capitalizes the first character of each word.
 *
 * @param {string} str - The string to modify.
 * @return {string} The modified string with spaces and capitalized words.
 */
export function replaceSeparatorsAndCapitalize(str: string): string {
  return str
    .split(/[\s-_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
