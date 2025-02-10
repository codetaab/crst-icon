/**
 * Converts a string from PascalCase or camelCase to kebab-case.
 * For example, "HomeIcon" becomes "home-icon".
 */
export function kebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
