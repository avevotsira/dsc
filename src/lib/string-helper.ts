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

/**
 * Removes markdown syntax from the input text.
 *
 * @param {string} text - The text containing markdown syntax.
 * @return {string} The text with markdown syntax removed.
 */
export function removeMarkdown(text: string): string {
  return text
    .replace(/#{1,6}\s?/g, "") // Remove headers
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // Remove bold
    .replace(/(\*|_)(.*?)\1/g, "$2") // Remove italic
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1") // Remove links
    .replace(/`{1,3}[^`\n]+`{1,3}/g, "") // Remove code blocks
    .replace(/^\s*[-*+]\s/gm, "") // Remove list items
    .trim();
}
