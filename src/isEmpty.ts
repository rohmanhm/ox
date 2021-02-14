const hasOwnProp = Object.prototype.hasOwnProperty;

export function isEmpty<T extends { [key: string]: unknown }>(obj: T) {
  // Check if obj has .length property
  // and if === 0 - it's empty
  if (obj.length) {
    return obj.length === 0;
  }

  // Otherwise, does it have any properties of its own?
  for (const key in obj) {
    if (hasOwnProp.call(obj, key)) return false;
  }

  // Fallback
  return true;
}
