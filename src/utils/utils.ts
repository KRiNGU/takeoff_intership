export const updateValues = <T>(a: T, b: T) => {
  let key: keyof T;
  for (key in a) {
    a[key] = b[key];
  }
};
