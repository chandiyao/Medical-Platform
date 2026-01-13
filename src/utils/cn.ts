/**
 * Minimal className joiner to avoid an extra dependency.
 */
export function cn(...values: Array<string | undefined | false | null>) {
  return values.filter(Boolean).join(" ");
}
