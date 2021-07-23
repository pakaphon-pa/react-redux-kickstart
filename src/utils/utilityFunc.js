export const get = (object, property, defaultValue) => {
  if (object[property]) {
    return object[property];
  }

  return defaultValue;
};
