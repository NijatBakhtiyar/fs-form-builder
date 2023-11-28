let index = 0;
/**
 * Generate a unique ID according to the current time and random number
 * @returns {string} Unique ID
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2) + (index++).toString(36);
}
